<template>
	<div>
		<ul>
			<li v-for="item in list">
				<content-item :article-info = "item" ></content-item>
			</li>
		</ul>
	</div>
</template>
<script>
	var content_item = require("./content_item.vue");
	var jsonp = require("../../js/jsonp.js");
	export default{
		data:function(){	
			return {
				list:[{
					title:"XXXX",
					quto:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					writeDate:"xxxx-xx-xx",
					scanNum:"10000",
					folder:"xx/xx"
				},{
					title:"XXXX",
					quto:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					writeDate:"xxxx-xx-xx",
					scanNum:"10000",
					folder:"xx/xx"
				},{
					title:"XXXX",
					quto:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					writeDate:"xxxx-xx-xx",
					scanNum:"10000",
					folder:"xx/xx"
				},{
					title:"XXXX",
					quto:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					writeDate:"xxxx-xx-xx",
					scanNum:"10000",
					folder:"xx/xx"
				},{
					title:"XXXX",
					quto:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					writeDate:"xxxx-xx-xx",
					scanNum:"10000",
					folder:"xx/xx"
				},{
					title:"XXXX",
					quto:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					writeDate:"xxxx-xx-xx",
					scanNum:"10000",
					folder:"xx/xx"
				},{
					title:"XXXX",
					quto:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					writeDate:"xxxx-xx-xx",
					scanNum:"10000",
					folder:"xx/xx"
				},{
					title:"XXXX",
					quto:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					writeDate:"xxxx-xx-xx",
					scanNum:"10000",
					folder:"xx/xx"
				},]
			};
		},
		name:"pcontent-list",
		components:{
			"content-item":content_item
		},
        beforeRouteEnter (to, from, next) {
            console.log(to.path);
            //发出jsonp请求
            let url = "http://localhost:3000"+to.path;
            console.log(url);
            let callbackStr = "fsData" + (new Date()).getTime().toString();
            let urlData = {
            	js: callbackStr+"(x)",
            }

            jsonp(url, urlData, callbackStr, function(json){
            	console.log(json);
            });
            next(function(vm){
            	vm.list = [{
					title:"XXXX",
					quto:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					writeDate:"xxxx-xx-xx",
					scanNum:"10000",
					folder:"xx/xx"
				},{
					title:"XXXX",
					quto:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					writeDate:"xxxx-xx-xx",
					scanNum:"10000",
					folder:"xx/xx"
				}];
            });
        }
	}
</script>
<style scoped>
	div{
		margin: 10px 5px;
	}
	ul{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0px 0px 0px 10px;
		padding: 0px;
		list-style: none;
	}
</style>