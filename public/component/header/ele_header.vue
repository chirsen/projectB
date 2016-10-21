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
    import header_left from "./header_left.vue"
    import header_right from "./header_right.vue"
    import header_middle from "./header_middle.vue"

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
        width: 100%;
        background-color: "#E2E2E2";
        position: relative;
        border-bottom: solid 1px #eee;

        display: flex;
        flex-direction:row;
        justify-content: space-between;
    }
    
    .header-wrap {
        margin: 5px auto;
        padding: 0px 10px;
        height: 60px;

        flex-basis: 1240px;
        
         /*  建立弹性框 */
        display: -webkit-flex;
        -webkit-flex-direction: row;

        display: flex;
        flex-direction: row;
    }

    @media screen and (max-width: 1240px){
        .header-wrap{
            flex-basis: 940px;
        }
    }


</style>