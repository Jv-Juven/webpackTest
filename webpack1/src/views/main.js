import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './routerConfig';
// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({});
Vue.use(Router);

var router = new Router();
routerConfig(router);

router.start(App, ".body");
