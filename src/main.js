/**
 * WebPack Entry main
 *
 * @since       0.0.1
 */

/**
 * LESS
 */
require('../assets/less/main.less');


/**
 * Imports
 */
import Vue from 'vue';

/**
 * WP-JS-Hooks
 * @version 1.0.0
 * @author Carl Danley & 10up
 */
!function(t,n){"use strict";t.wp=t.wp||{},t.wp.hooks=t.wp.hooks||new function(){function t(t,n,r,i){var e,o,c;if(f[t][n])if(r)if(e=f[t][n],i)for(c=e.length;c--;)(o=e[c]).callback===r&&o.context===i&&e.splice(c,1);else for(c=e.length;c--;)e[c].callback===r&&e.splice(c,1);else f[t][n]=[]}function n(t,n,i,e,o){var c={callback:i,priority:e,context:o},l=f[t][n];l?(l.push(c),l=r(l)):l=[c],f[t][n]=l}function r(t){for(var n,r,i,e=1,o=t.length;e<o;e++){for(n=t[e],r=e;(i=t[r-1])&&i.priority>n.priority;)t[r]=t[r-1],--r;t[r]=n}return t}function i(t,n,r){var i,e,o=f[t][n];if(!o)return"filters"===t&&r[0];if(e=o.length,"filters"===t)for(i=0;i<e;i++)r[0]=o[i].callback.apply(o[i].context,r);else for(i=0;i<e;i++)o[i].callback.apply(o[i].context,r);return"filters"!==t||r[0]}var e=Array.prototype.slice,o={removeFilter:function(n,r){return"string"==typeof n&&t("filters",n,r),o},applyFilters:function(){var t=e.call(arguments),n=t.shift();return"string"==typeof n?i("filters",n,t):o},addFilter:function(t,r,i,e){return"string"==typeof t&&"function"==typeof r&&n("filters",t,r,i=parseInt(i||10,10),e),o},removeAction:function(n,r){return"string"==typeof n&&t("actions",n,r),o},doAction:function(){var t=e.call(arguments),n=t.shift();return"string"==typeof n&&i("actions",n,t),o},addAction:function(t,r,i,e){return"string"==typeof t&&"function"==typeof r&&n("actions",t,r,i=parseInt(i||10,10),e),o}},f={actions:{},filters:{}};return o}}(window);

/**
 * Vuew config
 * @type {{}}
 */
const Vuew = window.Vuew || {};

/**
 * Vue Router
 */
import router from './router';

/**
 * Vuex - Store/State
 */
import { store } from './store';

/**
 * Root App
 */
import App from './App.vue';

/**
 * Analytics
 */
/*import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
    id: 'XXXXXX',
    router
})*/

/**
 * Instantiate Vue root component
 * @type {Vue}
 */
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#vuew-app');