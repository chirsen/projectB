<template>
	<div class="right">
		<ul>
			<li v-for="item in list">
				<spinner :item-data="item"></spinner>
			</li>
		</ul>
		<a v-bind:style="styleObj" class="help" v-on:mouseover.prevent="hover">关于</a>
	</div>
</template>
<script>
	import spinner_list from "./spinner_list.vue"

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
        justify-content: space-between;    
        align-items: center;
        flex: 1 1 50%;

        height: 100%;
	}
	ul{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
        flex: 2 2 80%;
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
         flex: 1 1 20%;
         align-self: flex-end;
         padding: 0px 0px 10px 20px;
         font-size: 16px;
         font-weight: 400;
	}
</style>