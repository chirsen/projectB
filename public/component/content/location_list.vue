<template>
	<div>
		<ul>
			<li v-for="item in locationList">
				<a v-bind:href="item.url">{{item.name}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				locationList:[{
					name:"首页",
					url:"/"
				},{
					name:"/前端",
					url:"/xxx"
				}]
			};
		},
		name:"location-list"
	}
</script>
<style scoped>
	div{padding: 10px 10px;}
	ul{
		margin: 0px;
		padding: 0px 5px;
		list-style: none;
	}
	li{
		display: inline-block;
		margin-left: 5px;
	}
	a{
		color: #aaa;
	}
</style>