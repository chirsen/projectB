<template>
	<div class="right">
		<ul>
			<li v-for="item in list">
				<spinner :item-data="item"></spinner>
			</li>
		</ul>
		<a v-bind:style="styleObj" v-on:click.prevent="aboutClick" class="help" v-on:mouseover.prevent="hover" v-on:mouseleave.prevent="leave">关于</a>
		<a v-bind:style="styleObj" class="help-icon" v-on:click.prevent="aboutClick" v-on:mouseover.prevent="hover" v-on:mouseleave.prevent="leave"></a>
	</div>
</template>
<script>
	var spinner_list = require("./spinner_list.vue");
    import Bus from '../../js/bus.js';

    export default {
        data: function() {
            return {
                styleObj:{
                    color:"#aaa"
                },
            	msg:"right",
            	list:[{
            		name:"首页",
            		url:"/home",
            		ls:[]
            	},{
            		name:"前端",
            		url:"/front",
            		ls:[{
            			subName:"html",
            			subUrl:"/front/html"
            		},{
            			subName:"css",
            			subUrl:"/front/css"
            		},{
            			subName:"js",
            			subUrl:"/front/js"
            		}]
            	},{
            		name:"node",
            		url:"/node",
            		ls:[]
            	},{
            		name:"杂烩",
            		url:"/multi",
            		ls:[{
            			subName:"阅读",
            			subUrl:"/multi/read"
            		},{
            			subName:"开发工具",
            			subUrl:"/multi/tools"
            		},]
            	}]
            };
        },
        name: "header-right",
        components:{"spinner":spinner_list},
        methods:{
            hover:function(e){
                this.styleObj.color = "#555";
            },
            leave:function(e){
                this.styleObj.color = "#aaa";
            },
            aboutClick:function(e){
                Bus.$emit('rout', '/about');
            }
        }
    }
</script>
<style scoped>
	.right{
		display: flex;
        flex-direction: row;
        justify-content: flex-end;    
        align-items: center;
        flex: 1 1 50%;

        height: 100%;
	}
	ul{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
        flex: 1 1 85%;
        height: 60px;
	}

    li{
        padding:0px 0px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:flex-end;
    }

	.help{
         flex: 6 6 15%;
         align-self: flex-end;
         padding: 0px 0px 10px 20px;
         font-size: 16px;
         font-weight: 400;
	}
	
	.help-icon{
		display:none;
	}

	@media screen and (max-width: 750px){
		ul{
			display:none;
		}
		.help{
			display:none;
		}

		.help-icon{
			display:block;
		}
		.help-icon:after{
			color:#aaa;
			content: "\ea09";
		}
	}
</style>