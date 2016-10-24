<template>
	<div>
		<h2>排行榜</h2>
		<ol>
			<li v-for="item in rankList">
				<a v-on:click.prevent="click" v-bind:href="item.url">{{item.title}}</a>
			</li>
		</ol>
	</div>
</template>
<script>
	/*
	**排行榜组件
	**
	 */
	export default{
		data:function(){
			return {
				rankList:[{
					title:"XXXX",
					url:"xxxx"
				},{
					title:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxaaaaaaaaaaa",
					url:"xxxx"
				}]
			};
		},
		name:"rank-list",
		methods:{
			click:function(e){
				console.log(e.target.getAttribute("href"));
			}
		}
	}
</script>
<style scoped>
	div{
		padding: 10px 10px;
		border: solid 1px #eee; 
		border-radius: 2px;
		box-shadow: 2px 2px 2px rgba(100, 100, 100, 0.5);
	}
	h2{
		font-size: 16px;
		padding-bottom: 5px;
		border-bottom: solid 1px #aaa;
	}
	ol{
	}
	li{
		margin: 5px 0px;
	}
	a{
		display: inline-block;
		width: 280px;
		word-wrap: break-word;
	}
</style>