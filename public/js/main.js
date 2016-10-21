import Vue from 'vue'
import ele_header from '../component/header/ele_header.vue'
import ele_content from '../component/content/ele_content.vue'
import ele_copyRight from '../component/copyRight/ele_copyRight.vue'

var vue = new Vue({
    el: 'body',
    components: { ele_header }
});