<template>
	<div class="right">
		<ul>
			<li v-for="item in list">
				<spinner :item-data="item"></spinner>
			</li>
		</ul>
		<a v-bind:style="styleObj" class="help" v-on:mouseover.prevent="hover" v-on:mouseleave.prevent="leave">关于</a>
		<a v-bind:style="styleObj" class="help-icon" v-on:mouseover.prevent="hover" v-on:mouseleave.prevent="leave"></a>
	</div>
</template>
<script>
	var spinner_list = require("./spinner_list.vue");

    export default {
        data: function() {
            return {
                styleObj:{
                    color:"#aaa"
                },
            	msg:"right",
            	list:[{
            		name:"首页",
            		url:"#",
            		ls:[]
            	},{
            		name:"前端",
            		url:"#",
            		ls:[{
            			subName:"html",
            			subUrl:"##"
            		},{
            			subName:"js",
            			subUrl:"##"
            		},{
            			subName:"css",
            			subUrl:"##"
            		}]
            	},{
            		name:"node",
            		url:"#",
            		ls:[]
            	},{
            		name:"杂烩",
            		url:"#",
            		ls:[{
            			subName:"阅读",
            			subUrl:"##"
            		},{
            			subName:"开发工具",
            			subUrl:"##"
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