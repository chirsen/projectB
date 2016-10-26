require("../public/css/style.css");
require("../public/css/theme.css");
var Vue = require('vue');
var ele_header = require('../public/component/header/ele_header.vue');
var ele_content = require('../public/component/content/ele_content.vue');
var ele_copyRight = require('../public/component/copyRight/ele_copyRight.vue');

var vue = new Vue({
    el: '#app',
    components: { "ele-header": ele_header, "ele-content": ele_content, "ele-copyright": ele_copyRight },
    create:function(){
    }
});
