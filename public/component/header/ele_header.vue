<template>
  <div class="header">
      <div class="header-wrap">
        <header-left></header-left>
        <header-middle></header-middle>
        <header-right></header-right>  
      </div>
  </div>
</template>

<script>
    var header_left = require("./header_left.vue");
    var header_right = require("./header_right.vue");
    var header_middle = require("./header_middle.vue");

    export default {
        data() {
            return {
                msg: 'header'
            }
        },
        name: 'ele-header',
        components: {
            "header-left": header_left,
            "header-middle": header_middle,
            "header-right": header_right
        }
    }
</script>

<style scoped>
    .header {
        background-color: white;
        position: fixed;
        width: 100%;
        border-bottom: solid 1px #eee;
        top: 0px;
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        z-index: 1000;
    }
    
    .header-wrap {
        margin: 0px auto;
        padding: 0px 10px;
        height: 60px;

        flex-basis: 1240px;
        
         /*  建立弹性框 */
        display: -webkit-flex;
        -webkit-flex-direction: row;

        display: flex;
        flex-direction: row;
    }

    @media screen and (max-width: 1240px) and (min-width: 941px){
        .header-wrap{
            flex-basis: 940px;
        }
    }

    @media screen and (max-width: 940px) and (min-width: 741px){
        .header-wrap{
            flex-basis: 740px;
        }
    }

    @media screen and (max-width: 740px) and (min-width: 441px){
        .header-wrap{
            width: 100%;
        }
    }

    @media screen and (max-width: 440px){
        .header-wrap{
            width: 440px;
        }
    }

</style>