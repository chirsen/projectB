<template>
	<div>
		<a v-on:click.prevent = "prePage">上一页</a>
		<ul>
			<li v-for="i in (end - start + 1 > maxPages ? maxPages : end - start + 1)">
				<a v-on:click.prevent="skipTo" v-bind:class="{'choose': (current == (tempStart + i - 1))}">{{tempStart + i - 1}}</a>
			</li>
		</ul>
		<a v-on:click.prevent = "nextPage">下一页</a>
	</div>
</template>
<script>
	// 分页组件
	/*
	**页面跳转规则：
	**当前点击或者将要去的页码，在显示页码的2/3以后，开始页码增加
	**当前点击或者将要去的页码，在显示页码的1/3以前，开始页码减小
	 */
	export default{
		data:function(){
			return {
				start: 1,
				end : 50,
				tempStart : 1, //当前处在第一位的页码
				current : 1,
				maxPages: 10
			};
		},
		name:"pages-list",
		methods:{
			skipTo:function(e){//点击跳转
				var toPage = e.target.innerHTML;
				this.current = parseInt(toPage);
				if(this.end > this.maxPages){//页面总数超过限定

					if(this.current >= this.tempStart + Math.round(2/3*this.maxPages)){ 
						this.tempStart = (this.tempStart + Math.round(this.maxPages/2));
					}else if(this.current <= this.tempStart + Math.round(this.maxPages/3)){
						this.tempStart = (this.tempStart - Math.round(this.maxPages/2));
					}
					if(this.tempStart < this.start){
						this.tempStart = this.start;
					}

					if(this.tempStart + this.maxPages > this.end){
						this.tempStart = this.end - this.maxPages + 1;
					}
				}
				console.log(toPage+":" + this.tempStart);
			},
			prePage:function(e){
				if(this.current != this.start){
					--this.current;
				}

				if(this.end >= this.maxPages){

					if(this.current - this.tempStart <= Math.round(this.maxPages/3)){
						if(this.tempStart != 1){
							this.tempStart = this.tempStart - 1;
						}
					}
					if(this.tempStart <= 0){
						this.tempStart = 1;
					}
				}
				console.log(this.current);
			},
			nextPage:function(e){
				if(this.current != this.end){
					++this.current;
				}

				if(this.end >= this.maxPages){

					if( this.current >= this.tempStart + Math.round(2*this.maxPages/3)){
						if(this.tempStart != (this.end - this.maxPages) + 1){
							this.tempStart += 1;
						}
					}

					if(this.tempStart + this.maxPages > this.end){
						this.tempStart = this.end - this.maxPages + 1;
					}
				}
				console.log(this.current);
			}
		}
	}
</script>
<style scoped>
	div{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	a{
		display: inline-block;
		padding: 3px 5px;
		min-width: 16px;
		text-align: center;
		line-height: 16px;
		margin: 0px 2px;
		border: solid 1px #bbb;
		moz-user-select: -moz-none;
		-moz-user-select: none;
		-o-user-select:none;
		-khtml-user-select:none;
		-webkit-user-select:none;
		-ms-user-select:none;
		user-select:none;
	}

	.choose{
		color: white;
		background-color: #9EB5B5;
	}

	ul{
		list-style: none;
		padding: 0px;
		margin: 0px;
	}

	li{
		display: inline-block;
	}

</style>