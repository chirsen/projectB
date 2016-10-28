<template>
    <div class="middle">
        <img v-bind:src="img" alt="">
        <span>一段介</span>
    </div>
</template>
<script>
    var imgUrl = require("../../images/page.png");

    export default {
        data: function() {
            return {
                img: imgUrl
            };
        },
        name: "header-middle"
    }
</script>
<style scoped>
	.middle{
		display: flex;
        flex-direction: column;
        justify-content: center;    
        flex: 6 6 40%;

        height: 100%;
	}

    img{
        height: 40px;
        align-self: flex-end;
        display: none;
    }

    span{
        display: inline-flex;
        align-self: flex-start;
    }

    @media screen and (max-width: 750px){
        img{
            display: block;
        }
        span{
            display: none;
            align-self: flex-end;
        }
    }
</style>