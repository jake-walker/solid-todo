const fileClient = new SolidFileClient();
const FOAF = $rdf.Namespace("http://xmlns.com/foaf/0.1/");

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

var app = new Vue({
  el: '#app',
  data: {
    session: null,
    store: null,
    fetcher: null,
    todos: [],
    page: "tasks"
  },
  methods: {
    login: function(e) {
      fileClient.popupLogin().then(webId => {
        if (!webId) {
          log("error", "app>methods>login", "Problem logging in", fileClient.err);
          toastr.error("Check the console for errors.", "Failed to login!");
          return;
        }
        
        log("success", "app>methods>login", "Logged in");
        toastr.success("Logged In!");
      });
    },
    logout: function(e) {
      fileClient.logout().then(() => {
        log("success", "app>methods>login", "Logged out");
        toastr.success("Logged out!");
      });
    },
    add: function(e) {
      var task = prompt("What is your task?");

      if (task && task.trim() != "") {
        var task = {
          id: uuid(),
          name: task,
          done: false
        };
        this.todos.push(task);
        toastr.success(`Added '${task}' to your todo list.`);
        log("success", "app>methods>add", "Added new task", task);
      } else {
        log("warn", "app>methods>add", "Didn't add task as it was an empty string.", {"task": task});
      }
    },
    save: function() {
      if (!this.session) { log("warn", "app>methods>save", "Skipping save as not logged in."); return; }

      fileClient.readFile(this.storageFile).then(success => {
        if (!success) {
          log("warn", "app>methods>save", "File does not exist in user's pod");
          
          fileClient.createFile(this.storageFile).then(success => {
            if (!success) {
              log("error", "app>methods>save", "Couldn't create file in user's pod", fileClient.err);
              toastr.error("Check the console for errors.", "Failed to create file in pod");
              return;
            }
            
            log("success", "app>methods>save", "Created file in user's pod", success);
          });
        }

        fileClient.updateFile(this.storageFile, JSON.stringify(this.todos)).then(success => {
          if (!success) {
            log("error", "app>methods>save", "Couldn't update file in user's pod", fileClient.err);
            toastr.error("Check the console for errors.", "Failed to update file in pod");
            return;
          }

          log("success", "app>methods>save", "Updated file in user's pod", this.todos);
          toastr.success("Saved!");
        });
      });
    },
    load: function() {
      if (!this.session) { log("warn", "app>methods>load", "Skipping load as not logged in"); return; }

      fileClient.readFile(this.storageFile).then(body => {
        if (!body) {
          log("error", "app>methods>load", "Error reading file from pod", fileClient.err);
          toastr.error("Check the console for errors.", "Failed to read file from pod");
          return;
        }

        log("success", "app>methods>load", "Loaded file from pod", JSON.parse(body.value));
        toastr.success("Loaded!");
        this.todos = JSON.parse(body.value);
      });
    }
  },
  computed: {
    storageFile: function() {
      if (!this.session) {
        return "";
      }

      var url = this.session.webId.split("/")[2];
      return `https://${url}/public/todo.json`;
    },
    name: function() {
      let name = this.store.any($rdf.sym(this.session.webId), FOAF("name"));
      return name && name.value;
    }
  },
  watch: {
    todos: {
      handler(val){
        this.debounceSave();
      },
      deep: true
    }
  },
  created: function () {
    this.debounceSave = _.debounce(this.save, 2500)
  },
});

function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

solid.auth.trackSession(async function(session) {
  log("info", "solid>auth>trackSession", "Session updated", (session));

  if (session) {
    let store = $rdf.graph();
    let fetcher = new $rdf.Fetcher(store);

    await fetcher.load(session.webId);

    app.store = store;
    app.fetcher = fetcher;
  }

  app.session = session;

  app.load();
});

function log(level, from, message, object) {
  var text = `%c[${level.toUpperCase()}] %c(${from}) %c${message} %O`;
  var css = "";

  switch (level) {
    case "error":
      css = "color: red;";
      break;
    case "warn":
      css = "color: orange;";
      break;
    case "info":
      css = "color: blue;";
      break;
    case "success":
      css = "color: green;";
      break;
  }

  console.log(text, "color: #a9a9a9;", "color: #696969;", css, object);
}