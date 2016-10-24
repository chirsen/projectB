<template>
	<div class="wrap">
		<h1>{{articleInfo.title}}</h1>
		<p>{{articleInfo.quto}}</p>
		<div class="detail">
			<div>
				<span class="date">{{articleInfo.writeDate}}</span>
				<span class="num">{{articleInfo.scanNum}}</span>
				<span class="folder">{{articleInfo.folder}}</span>
			</div>
			<a v-bind:href="articleInfo.folder">查看详情</a>
		</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {};
		},
		name:"content-item",
		props:['articleInfo'],
		methods:{}
	}
</script>
<style scoped>
	.wrap{
		box-shadow:2px 2px 2px rgba(100, 100,100,.6);
		border-radius: 1px;
		border: solid 1px #aaa;
		margin: 5px 0px;
		padding: 0px 5px;
	}
	h1{
		margin: 5px 0px 0px 5px;
		padding: 0px;
	}
	p{
		margin: 0px 0px 0px 5px;
		padding: 0px;
	}
	.detail{
		margin: 0px 0px 5px 5px;
		padding: 0px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.detail > div{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.date{
		margin-right: 40px;
	}
	.date:before{
		content: '\e953';
		margin-right: 5px;
	}
	.num{
		margin-right: 40px;
	}
	.num:before{
		content: '\e9cf';
		margin-right: 5px;
	}
	.folder{
		margin-right: 40px;
	}
	.folder:before{
		content: '\e930';
		margin-right: 5px;
	}
	a{
		color: #aaa;
		margin-right: 40px;
	}
</style>