<template>
    <a class="left">
        <img v-bind:src="img" alt="">
    </a>
</template>
<script>
    import imgUrl from "../../images/page.png"
    export default {
        data: function() {
            return {
                msg: "left",
                img: imgUrl
            };
        },
        name: "header-left"
    }
</script>
<style scoped>
    a{
        display: inline-flex;
        height: 60px;
        padding-left: 10px;

        flex-direction: column;
        justify-content: center;
        flex: 1 1 100px;
    }
    img {
        height: 60px;
        width: 52px;
    }

    @media screen and (max-width: 750px){
        img{
            display: none;
        }
        a:before{
            content: "\e9bd";
            position: relative;
        }
    }
</style>