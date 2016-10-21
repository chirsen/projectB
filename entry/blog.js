require("../public/css/style.css");
require("../public/css/theme.css");
var Vue = require('vue');
import ele_header from '../public/component/header/ele_header.vue'
import ele_content from '../public/component/content/ele_content.vue'
import ele_copyRight from '../public/component/copyRight/ele_copyRight.vue'

var vue = new Vue({
    el: '#app',
    components: { "ele-header": ele_header, "ele-content": ele_content, "ele-copyright": ele_copyRight }
});