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
				},]
			};
		},
		name:"pcontent-list",
		components:{
			"content-item":content_item
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