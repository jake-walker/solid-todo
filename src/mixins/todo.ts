export const todo = {
  data: () => ({
    tasks: [],
  }),
  mounted() {
    if (localStorage.tasks) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push({
        name: task,
        done: false,
        created: new Date()
      });
    },
  },
  watch: {
    tasks: {
      handler(newTasks, oldTasks) {
        if (JSON.stringify(newTasks) != localStorage.tasks) {
          console.log("Todo updated");
          localStorage.tasks = JSON.stringify(newTasks);
        }
      },
      deep: true,
    },
  },
}
