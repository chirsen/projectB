require("../public/css/style.css");
require("../public/css/theme.css");
var Vue = require('vue');
var vueRouter = require('vue-router');

Vue.use(vueRouter);

if(module.hot)
    module.hot.accept();

var ele_header = require('../public/component/header/ele_header.vue');
var ele_content = require('../public/component/content/ele_content.vue');
var ele_copyRight = require('../public/component/copyRight/ele_copyRight.vue');

//内容页里面的组件
var location_list = require("../public/component/content/location_list.vue");
var content_list = require("../public/component/content/content_list.vue");
var rank_list = require("../public/component/content/rank_list.vue");
var date_list = require("../public/component/content/date_list.vue");
var pages_list = require("../public/component/content/pages_list.vue");

import Bus from '../public/js/bus.js'


const router = new vueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            components: {
                "location-list": location_list,
                "content-list": content_list,
                "rank-list": rank_list,
                "date-list": date_list,
                "pages-list": pages_list,
            }
        }, {
            path: '/:front',
            components: {
                "location-list": location_list,
                "content-list": content_list,
                "rank-list": rank_list,
                "date-list": date_list,
                "pages-list": pages_list,
            }
        }, {
            path: '/:front/:type',
            components: {
                "location-list": location_list,
                "content-list": content_list,
                "rank-list": rank_list,
                "date-list": date_list,
                "pages-list": pages_list,
            }
        }
    ]
});

new Vue({
    router,
    components: { "ele-header": ele_header, "ele-content": ele_content, "ele-copyright": ele_copyRight },
    created: function() {
        Bus.$on('rout', function(toUrl) {
            router.push({path:toUrl});
        });
    }
}).$mount('#app');
