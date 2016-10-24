<template>
	<div>
		<h2>排行榜</h2>
		<ul>
			<li v-for="item in dateList">
				<a v-on:click.prevent="click" v-bind:href="item.url"><span>{{item.date}}</span><span>{{item.num}}</span></a>
			</li>
		</ul>
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
				dateList:[{
					date:"xx-xx",
					url:"xxxx",
					num:"10"
				},{
					date:"xx-xx",
					url:"xxxx",
					num:"10"
				}]
			};
		},
		name:"date-list",
		methods:{
			click:function(e){
				console.log(e.target.getAttribute("href"));
			}
		}
	}
</script>
<style scoped>
	div{
		margin-top: 20px;
		padding: 10px 10px;
		border: solid 1px #eee; 
		background-color: #eee;
		border-radius: 2px;
	}
	h2{
		font-size: 16px;
		padding-bottom: 5px;
	}
	ul{
	}
	li{
		margin: 5px 0px;
		
	}
	a{
		display: inline-flex;
		word-wrap: break-word;
		color: #888;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
