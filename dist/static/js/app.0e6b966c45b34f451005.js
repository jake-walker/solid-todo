webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify_dist_vuetify_min_css__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify_lib_util_colors__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_solid_ts__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_todo_ts__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_settings_ts__ = __webpack_require__(184);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.













__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vuetify___default.a, {
  theme: {
    primary: __WEBPACK_IMPORTED_MODULE_3_vuetify_lib_util_colors__["a" /* default */].green.darken1,
    secondary: __WEBPACK_IMPORTED_MODULE_3_vuetify_lib_util_colors__["a" /* default */].green.lighten4,
    accent: __WEBPACK_IMPORTED_MODULE_3_vuetify_lib_util_colors__["a" /* default */].blue.base
  }
});

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__webpack_require__(185));

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].mixin(__WEBPACK_IMPORTED_MODULE_8__mixins_settings_ts__["a" /* settings */]);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].mixin(__WEBPACK_IMPORTED_MODULE_6__mixins_solid_ts__["a" /* solid */]);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].mixin(__WEBPACK_IMPORTED_MODULE_7__mixins_todo_ts__["a" /* todo */]);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */],
  components: { App: __WEBPACK_IMPORTED_MODULE_4__App__["a" /* default */] },
  template: '<App/>'
});

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(61);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f2469dd_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(107);
var normalizeComponent = __webpack_require__(40)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f2469dd_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-navigation-drawer',{attrs:{"persistent":"","enable-resize-watcher":"","fixed":"","app":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-toolbar',{staticClass:"transparent",attrs:{"flat":""}},[_c('v-list',{staticClass:"pa-0"},[_c('v-list-tile',{attrs:{"avatar":""}},[_c('v-list-tile-avatar',[_c('img',{attrs:{"src":"https://cdn.vuetifyjs.com/images/lists/1.jpg"}})]),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("Jake Walker")])],1)],1)],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list',_vm._l((_vm.items),function(item,i){return _c('v-list-tile',{key:i,attrs:{"to":{path: item.path}}},[_c('v-list-tile-action',[_c('v-icon',{domProps:{"innerHTML":_vm._s(item.icon)}})],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(item.title)}})],1)],1)}))],1),_vm._v(" "),_c('v-toolbar',{attrs:{"app":"","color":"primary","dark":""}},[_c('v-toolbar-side-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer = !_vm.drawer}}}),_vm._v(" "),_c('v-toolbar-title',{domProps:{"textContent":_vm._s(_vm.title)}})],1),_vm._v(" "),_c('v-content',[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Todo__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Settings__ = __webpack_require__(113);






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Todo',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Todo__["a" /* default */]
  }, {
    path: '/settings',
    name: 'Settings',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Settings__["a" /* default */]
  }]
}));

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Todo_vue__ = __webpack_require__(62);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4947631e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Todo_vue__ = __webpack_require__(112);
function injectStyle (ssrContext) {
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(40)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4947631e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Todo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4947631e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Todo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"s12":"","sm6":"","offset-sm3":""}},[(_vm.settings.showSyncDisabledAlert)?_c('v-alert',{attrs:{"value":true,"type":"warning","icon":"warning"}},[_c('b',[_vm._v("You are not logged into your Solid Pod.")]),_vm._v("\n      Your data is not being synced to Solid.\n    ")]):_vm._e(),_vm._v(" "),_c('v-card',[(_vm.tasks.length > 0)?_c('v-list',{attrs:{"two-line":""}},_vm._l((_vm.tasks),function(task,k){return _c('v-list-tile',{key:task.name,on:{"click":function($event){}}},[_c('v-list-tile-action',[_c('v-checkbox',{model:{value:(task.done),callback:function ($$v) {_vm.$set(task, "done", $$v)},expression:"task.done"}})],1),_vm._v(" "),_c('v-list-tile-content',{on:{"click":function($event){task.done = !task.done}}},[_c('v-list-tile-title',{class:{ done: task.done },domProps:{"innerHTML":_vm._s(task.name)}}),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("\n              "+_vm._s(_vm._f("moment")(task.created,"calendar"))+"\n            ")])],1),_vm._v(" "),(task.done)?_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"red"},on:{"click":function($event){_vm.tasks.pop(task)}}},[_vm._v("close")])],1):_vm._e()],1)})):_vm._e(),_vm._v(" "),(_vm.tasks.length < 1)?_c('div',{staticClass:"text-xs-center pa-5"},[_c('v-icon',{attrs:{"x-large":"","color":"primary"}},[_vm._v("done_all")]),_vm._v(" "),_c('h1',[_vm._v("You're done here.")]),_vm._v(" "),_c('p',[_vm._v("Go relax or add some more tasks.")])],1):_vm._e(),_vm._v(" "),_c('v-btn',{attrs:{"dark":"","fab":"","fixed":"","bottom":"","right":"","color":"green"},on:{"click":function($event){_vm.dialog = true}}},[_c('v-icon',[_vm._v("add")])],1),_vm._v(" "),_c('v-dialog',{attrs:{"max-width":"600px"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("New Task")]),_vm._v(" "),_c('v-card-text',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Task","required":"","clearable":""},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.createNewTask()}},model:{value:(_vm.newTask),callback:function ($$v) {_vm.newTask=$$v},expression:"newTask"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"flat":"flat"},on:{"click":function($event){_vm.dialog = false}}},[_vm._v("\n              Cancel\n            ")]),_vm._v(" "),_c('v-btn',{attrs:{"flat":"flat","disabled":_vm.newTask.trim() == ''},on:{"click":function($event){_vm.createNewTask()}}},[_vm._v("\n              Create\n            ")])],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Settings_vue__ = __webpack_require__(63);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32db22fc_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Settings_vue__ = __webpack_require__(114);
var normalizeComponent = __webpack_require__(40)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Settings_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32db22fc_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Settings_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"s12":"","sm6":"","offset-sm3":""}},[_c('v-card',[_c('v-list',{attrs:{"two-line":"","subheader":""}},[_c('v-subheader',[_vm._v("Synchronization")]),_vm._v(" "),_c('v-list-tile',{on:{"click":function($event){_vm.login()}}},[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("Log In")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("Connect your Solid Pod to Solid Todo to sync your tasks.")])],1)],1),_vm._v(" "),_c('v-list-tile',{on:{"click":function($event){}}},[_c('v-list-tile-avatar',[_c('img',{attrs:{"src":"https://cdn.vuetifyjs.com/images/lists/1.jpg"}})]),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("Logged in as Jake Walker")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("Last synced yesterday")])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',[_vm._v("exit_to_app")])],1)],1),_vm._v(" "),_c('v-list-tile',{on:{"click":function($event){}}},[_c('v-list-tile-action',[_c('v-checkbox',{model:{value:(_vm.settings.showSyncDisabledAlert),callback:function ($$v) {_vm.$set(_vm.settings, "showSyncDisabledAlert", $$v)},expression:"settings.showSyncDisabledAlert"}})],1),_vm._v(" "),_c('v-list-tile-content',{on:{"click":function($event){_vm.settings.showSyncDisabledAlert = !_vm.settings.showSyncDisabledAlert}}},[_c('v-list-tile-title',[_vm._v("Show 'Sync Disabled' Alerts")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("You should check this if you don't want to sync.")])],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rdflib__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rdflib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rdflib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_solid_auth_client__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_solid_auth_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_solid_auth_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__external_solid_file_client__ = __webpack_require__(142);





var fileClient = Object(__WEBPACK_IMPORTED_MODULE_2__external_solid_file_client__["a" /* sfc */])(__WEBPACK_IMPORTED_MODULE_0_rdflib__, __WEBPACK_IMPORTED_MODULE_1_solid_auth_client__);

const solid = {
  data: () => ({
    session: null,
  }),
  methods: {
    test() {
      console.log(__WEBPACK_IMPORTED_MODULE_0_rdflib__);
      console.log(__WEBPACK_IMPORTED_MODULE_1_solid_auth_client__);
      console.log(fileClient);
    },
    login() {
      fileClient.popupLogin().then(webId => {
        if (!webId) {
          console.error("ERROR!");
          return;
        }

        console.log("Logged in!");
      });
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = solid;


__WEBPACK_IMPORTED_MODULE_1_solid_auth_client__["trackSession"](async function(session) {
  console.log("Session", session);
  /*log("info", "solid>auth>trackSession", "Session updated", (session));

  if (session) {
    let store = $rdf.graph();
    let fetcher = new $rdf.Fetcher(store);

    await fetcher.load(session.webId);

    app.store = store;
    app.fetcher = fetcher;
  }

  app.session = session;

  app.load();*/
});


/***/ }),

/***/ 118:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./N3Lexer": 41,
	"./N3Lexer.js": 41,
	"./N3Parser": 42,
	"./N3Parser.js": 42,
	"./N3Store": 69,
	"./N3Store.js": 69,
	"./N3StreamParser": 70,
	"./N3StreamParser.js": 70,
	"./N3StreamWriter": 80,
	"./N3StreamWriter.js": 80,
	"./N3Util": 43,
	"./N3Util.js": 43,
	"./N3Writer": 47,
	"./N3Writer.js": 47
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 120;

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sfc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


/* VERSION 0.1.0
**     
*/
function sfc($rdf, auth) {

    sfc = {};

    var self = sfc;

    var solid = {
        auth: auth

        //if (typeof(module)!="undefined" ){
        //    if(typeof($rdf)==='undefined') $rdf = require('rdflib')
        //    if(typeof(solid)==='undefined') solid={auth:require('solid-auth-client')}
        //}

        /* FILETYPES
        */
    };sfc.guessFileType = function (url) {
        var ext = url.replace(/.*\./, '');
        if (ext.match(/\/$/)) return 'folder';
        if (ext.match(/(md|markdown)/)) return 'text/markdown';
        if (ext.match(/html/)) return 'text/html';
        if (ext.match(/xml/)) return 'text/xml';
        if (ext.match(/ttl/)) return 'text/turtle';
        if (ext.match(/n3/)) return 'text/n3';
        if (ext.match(/rq/)) return 'application/sparql';
        if (ext.match(/css/)) return 'text/css';
        if (ext.match(/txt/)) return 'text/plain';
        if (ext.match(/json/)) return 'application/json';
        if (ext.match(/js/)) return 'application/javascript';
        if (ext.match(/(png|gif|jpeg|tif)/)) return 'image';
        if (ext.match(/(mp3|aif|ogg)/)) return 'audio';
        if (ext.match(/(avi|mp4|mpeg)/)) return 'video';
        /* default */return 'text/turtle';
    };
    sfc.getFileType = function (graph, url) {
        var subj = $rdf.sym(url);
        var pred = $rdf.sym("http://www.w3.org/1999/02/22-rdf-syntax-ns#type");
        var types = graph.each(subj, pred, undefined);
        for (var t in types) {
            var type = types[t].value;
            if (type.match("ldp#BasicContainer")) return "folder";
            if (type.match("http://www.w3.org/ns/iana/media-types/")) {
                type = type.replace("http://www.w3.org/ns/iana/media-types/", '');
                return type.replace('#Resource', '');
            }
        }
        return "unknown";
    };
    /* SOLID READ/WRITE FUNCTIONS
    */
    sfc.createFile = function () {
        var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(url, type, content) {
            var newThing, parentFolder, response;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            newThing = url.replace(/\/$/, '').replace(/.*\//, '');
                            parentFolder = url.replace(newThing, '').replace(/\/\/$/, '/');
                            _context.next = 4;
                            return sfc.add(parentFolder, newThing, type, content);

                        case 4:
                            response = _context.sent;
                            return _context.abrupt('return', response);

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
    sfc.createFolder = function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(url) {
            var response;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return sfc.createFile(url, "folder");

                        case 2:
                            response = _context2.sent;
                            return _context2.abrupt('return', response);

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function (_x4) {
            return _ref2.apply(this, arguments);
        };
    }();
    sfc.deleteFolder = function () {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(url) {
            var res;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return solid.auth.fetch(url, { method: 'DELETE' }).catch(function (err) {
                                self.err = err;return false;
                            });

                        case 2:
                            res = _context3.sent;

                            if (!res.ok) {
                                _context3.next = 7;
                                break;
                            }

                            return _context3.abrupt('return', true);

                        case 7:
                            self.err = res.status + " (" + res.statusText + ")";
                            return _context3.abrupt('return', false);

                        case 9:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function (_x5) {
            return _ref3.apply(this, arguments);
        };
    }();
    sfc.updateFile = function () {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(url, content) {
            var del, add;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return sfc.deleteFile(url);

                        case 2:
                            del = _context4.sent;
                            _context4.next = 5;
                            return sfc.createFile(url, undefined, content);

                        case 5:
                            add = _context4.sent;
                            return _context4.abrupt('return', add);

                        case 7:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function (_x6, _x7) {
            return _ref4.apply(this, arguments);
        };
    }();
    sfc.deleteFile = sfc.deleteFolder;
    sfc.readFile = function (url) {
        return sfc.fetch(url);
    };
    sfc.readFolder = function () {
        var _ref5 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(url) {
            var body, graph;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return self.fetch(url);

                        case 2:
                            body = _context5.sent;

                            if (body) {
                                _context5.next = 5;
                                break;
                            }

                            return _context5.abrupt('return', false);

                        case 5:
                            graph = self.text2graph(body.value, url, "text/turtle");

                            if (graph) {
                                _context5.next = 8;
                                break;
                            }

                            return _context5.abrupt('return', false);

                        case 8:
                            return _context5.abrupt('return', self.processFolder(graph, url, body.value));

                        case 9:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function (_x8) {
            return _ref5.apply(this, arguments);
        };
    }();
    sfc.fetchAndParse = function () {
        var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6(url, contentType) {
            var res, obj, txt;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            contentType = contentType || sfc.guessFileType(url);
                            _context6.next = 3;
                            return solid.auth.fetch(url).catch(function (err) {
                                self.err = err;console.log(err);return false;
                            });

                        case 3:
                            res = _context6.sent;

                            if (res.ok) {
                                _context6.next = 7;
                                break;
                            }

                            self.err = res.status + " (" + res.statusText + ")";
                            return _context6.abrupt('return', false);

                        case 7:
                            if (!(contentType === 'application/json')) {
                                _context6.next = 12;
                                break;
                            }

                            _context6.next = 10;
                            return res.json().catch(function (err) {
                                self.err = err;return false;
                            });

                        case 10:
                            obj = _context6.sent;
                            return _context6.abrupt('return', obj);

                        case 12:
                            _context6.next = 14;
                            return res.text().catch(function (err) {
                                self.err = err;return false;
                            });

                        case 14:
                            txt = _context6.sent;
                            return _context6.abrupt('return', self.text2graph(txt, url, contentType));

                        case 16:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function (_x9, _x10) {
            return _ref6.apply(this, arguments);
        };
    }();
    sfc.text2graph = function (text, url, contentType) {
        contentType = contentType || sfc.guessFileType(url);
        var graph = $rdf.graph();
        try {
            $rdf.parse(text, graph, url, contentType);
            return graph;
        } catch (err) {
            self.err = err;
            return false;
        }
    };
    sfc.add = function () {
        var _ref7 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7(parentFolder, newThing, type, content) {
            var link, filetype, request, response;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            link = '<http://www.w3.org/ns/ldp#Resource>; rel="type"';

                            if (type === 'folder') {
                                link = '<http://www.w3.org/ns/ldp#BasicContainer>; rel="type"';

                                filetype = "text/turtle";
                            }
                            request = {
                                method: 'POST',
                                headers: { 'Content-Type': filetype, slug: newThing, link: link }
                            };

                            if (content) request.body = content;
                            _context7.next = 6;
                            return solid.auth.fetch(parentFolder, request).catch(function (err) {
                                self.err = err;return false;
                            });

                        case 6:
                            response = _context7.sent;

                            if (!response.ok) {
                                _context7.next = 11;
                                break;
                            }

                            return _context7.abrupt('return', true);

                        case 11:
                            self.err = response.status + " (" + response.statusText + ")";
                            return _context7.abrupt('return', false);

                        case 13:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function (_x11, _x12, _x13, _x14) {
            return _ref7.apply(this, arguments);
        };
    }();
    sfc.fetch = function () {
        var _ref8 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8(url, request) {
            var res, txt;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            _context8.next = 2;
                            return solid.auth.fetch(url, request).catch(function (err) {
                                self.err = err;return false;
                            });

                        case 2:
                            res = _context8.sent;

                            if (res.ok) {
                                _context8.next = 6;
                                break;
                            }

                            self.err = res.status + " (" + res.statusText + ")";
                            return _context8.abrupt('return', false);

                        case 6:
                            _context8.next = 8;
                            return res.text().catch(function (err) {
                                self.err = err;return false;
                            });

                        case 8:
                            txt = _context8.sent;
                            return _context8.abrupt('return', { value: txt });

                        case 10:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        return function (_x15, _x16) {
            return _ref8.apply(this, arguments);
        };
    }();
    /* SESSION MANAGEMENT
    */
    sfc.checkSession = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee9() {
        var sess;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.next = 2;
                        return solid.auth.currentSession();

                    case 2:
                        sess = _context9.sent;

                        if (sess) {
                            _context9.next = 6;
                            break;
                        }

                        self.webId = undefined;
                        return _context9.abrupt('return', false);

                    case 6:
                        self.webId = sess.webId;
                        return _context9.abrupt('return', { webId: sess.webId });

                    case 8:
                    case 'end':
                        return _context9.stop();
                }
            }
        }, _callee9, this);
    }));
    sfc.popupLogin = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee10() {
        var session, popupUri;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        _context10.next = 2;
                        return solid.auth.currentSession();

                    case 2:
                        session = _context10.sent;
                        popupUri = 'https://solid.community/common/popup.html';

                        if (session) {
                            _context10.next = 8;
                            break;
                        }

                        _context10.next = 7;
                        return solid.auth.popupLogin({ popupUri: popupUri });

                    case 7:
                        session = _context10.sent;

                    case 8:
                        return _context10.abrupt('return', session.webId);

                    case 9:
                    case 'end':
                        return _context10.stop();
                }
            }
        }, _callee10, this);
    }));
    sfc.login = function () {
        var _ref11 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee11(idp) {
            var session;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            _context11.next = 2;
                            return solid.auth.currentSession();

                        case 2:
                            session = _context11.sent;

                            if (session) {
                                _context11.next = 6;
                                break;
                            }

                            _context11.next = 6;
                            return solid.auth.login(idp);

                        case 6:
                            return _context11.abrupt('return', session.webId);

                        case 7:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        return function (_x17) {
            return _ref11.apply(this, arguments);
        };
    }();
    sfc.logout = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee12() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        session = '';
                        _context12.next = 3;
                        return solid.auth.logout();

                    case 3:
                        res = _context12.sent;
                        return _context12.abrupt('return', res);

                    case 5:
                    case 'end':
                        return _context12.stop();
                }
            }
        }, _callee12, this);
    }));
    /* INTERNAL FUNCTIONS
    */
    sfc.getStats = function (graph, subj) {
        subj = $rdf.sym(subj);
        var mod = $rdf.sym('http://purl.org/dc/terms/modified');
        var size = $rdf.sym('http://www.w3.org/ns/posix/stat#size');
        var mtime = $rdf.sym('http://www.w3.org/ns/posix/stat#mtime');
        return {
            modified: graph.any(subj, mod, undefined).value,
            size: graph.any(subj, size, undefined).value,
            mtime: graph.any(subj, mtime, undefined).value
        };
    };
    sfc.getFolderItems = function (graph, subj) {
        var contains = {
            folders: [],
            files: []
        };
        var itemsTmp = graph.each($rdf.sym(subj), $rdf.sym('http://www.w3.org/ns/ldp#contains'), undefined);
        // self.log("Got "+itemsTmp.length+" items")
        for (i = 0; i < itemsTmp.length; i++) {
            var item = itemsTmp[i];
            var newItem = {};
            newItem.type = sfc.getFileType(graph, item.value);
            var stats = self.getStats(graph, item.value);
            newItem.modified = stats.modified;
            newItem.size = stats.size;
            newItem.mtime = stats.mtime;
            newItem.label = decodeURIComponent(item.value).replace(/.*\//, '');
            if (newItem.type === 'folder') {
                item.value = item.value.replace(/[/]+/g, '/');
                item.value = item.value.replace(/https:/, 'https:/');
                var name = item.value.replace(/\/$/, '');
                newItem.name = name.replace(/.*\//, '');
                newItem.url = item.value;
                contains.folders.push(newItem);
            } else {
                newItem.url = item.value;
                newItem.name = item.value.replace(/.*\//, '');
                if (newItem.name === 'index.html') self.hasIndexHtml = true;
                contains.files.push(newItem);
            }
        }
        return contains;
    };
    sfc.processFolder = function (graph, url, content, callback) {
        // sfc.log("processing folder")
        var items = self.getFolderItems(graph, url);
        var stats = self.getStats(graph, url);
        var fullname = url.replace(/\/$/, '');
        var name = fullname.replace(/.*\//, '');
        var parent = fullname.replace(name, '');
        return {
            type: "folder",
            name: name,
            url: url,
            modified: stats.modified,
            size: stats.size,
            mtime: stats.mtime,
            parent: parent,
            content: content,
            folders: items.folders,
            files: items.files
        };
    };
    return sfc;
}
//if (typeof(module)!="undefined" )  module.exports = SolidFileClient()
/* END */

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const todo = {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = todo;



/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const settings = {
  data: () => ({
    settings: {
      showSyncDisabledAlert: true,
    },
  }),
  mounted() {
    if (localStorage.settings) {
      this.settings = JSON.parse(localStorage.settings);
    }
  },
  watch: {
    settings: {
      handler(newSettings, oldSettings) {
        if (JSON.stringify(newSettings) != localStorage.settings) {
          console.log("Settings updated");
          localStorage.settings = JSON.stringify(newSettings);
        }
      },
      deep: true,
    },
  },
}
/* harmony export (immutable) */ __webpack_exports__["a"] = settings;



/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      drawer: false,
      items: [{
        path: '/',
        icon: 'check_circle',
        title: 'Todo List'
      }, {
        path: '/settings',
        icon: 'settings',
        title: 'Settings'
      }],
      title: 'Solid Todo'
    };
  },

  name: 'App'
});

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      dialog: false,
      newTask: ''
    };
  },

  methods: {
    createNewTask: function createNewTask() {
      this.addTask(this.newTask);
      this.dialog = false;
      this.newTask = '';
    }
  },
  name: 'Todo'
});

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Settings'
});

/***/ })

},[100]);
//# sourceMappingURL=app.0e6b966c45b34f451005.js.map