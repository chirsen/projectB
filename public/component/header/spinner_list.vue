<template>
	<div class="spinner" v-on:mouseover.prevent="hover" v-on:mouseleave.prevent="leave">
		<a class="title" v-on:click.prevent="urlClick" v-bind:style="styleObj" v-bind:href="itemData.url">{{itemData.name}}</a>
		<ul v-if="itemData.ls.length !== 0 && show" v-on:mouseover.prevent="hover" v-on:mouseleave.prevent="leaveUl">
			<li v-for="li in itemData.ls" v-on:click.prevent="urlClick">
				<a v-bind:href="li.subUrl"  >{{li.subName}}</a>
			</li>
		</ul>
	</div>
</template>
<script>

	import Bus from '../../js/bus.js'

	export default{
		data:function(){
			return {
				show: false,
				styleObj:{
					color:"#aaa"
				},
				timmer:null
			};
		},
		props:["itemData"],
		name:"spinner",
		methods:{
			hover:function(e){
				this.show = true;
				this.styleObj.color = "#555";
				if(this.timmer){
					clearTimeout(this.timmer);
				}
			},
			leave:function(e){
				if(this.timmer){
					clearTimeout(this.timmer);
				}
				let that = this;
				this.timmer = setTimeout(function(){
					that.styleObj.color = "#aaa";
					that.show = false;
				}, 50);
			},
			leaveUl:function(e){
				if(this.timmer){
					clearTimeout(this.timmer);
				}
				let that = this;
				this.timmer = setTimeout(function(){
					that.show = false;
				}, 50);
			},
			urlClick:function(e){
				let target = e.target;
				if(target.nodeName === 'LI'){
					target = target.children[0];
				}
				let url = target.getAttribute('href');
				Bus.$emit('rout', url);
			}
		}
	}
</script>
<style scoped>
	.spinner{
		display: inline-flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0px 20px;
		height: 100%;
	}
	.title{
		font-size: 16px;
		font-weight: 400;
		margin-bottom: 10px;
	}
	ul{
		padding: 10px 0px;
		margin-left: -10px;
		position: absolute;
		top: 100%;
		border-left: solid 2px #aaa;
		width:100px;
		background-color: white;
	}
	li{
		padding: 0px;
		margin: 0px;
		padding: 5px 20px 0px 10px;
	}

	li:hover{
		background-color:#eee;
	}

	li:a{
		color: #aaa;
	}
</style>
