<template>
	<div>
		<ul>
			<li v-for="item in locationList">
				<a v-bind:href="item.url" v-on:click.prevent="click">{{item.name}}</a>
			</li>
		</ul>
	</div>
</template>
<script>

	import Bus from '../../js/bus.js'

	export default{
		data:function(){
			return {
				locationList:[]
			};
		},
		name:"location-list",
		methods:{
			click:function(e){
				let target = e.target;
				let url = target.getAttribute('href');
				Bus.$emit('rout', url);
			}
		},
		beforeRouteEnter (to, from, next) {
            console.log(to.path);
            next(function(vm){

            	vm.locationList = [{
					name:"首页",
					url:"/"
				},{
					name:"/前端",
					url:"/xxx"
				}];
            });
        }
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