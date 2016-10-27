<template>
  <div class="content">
  <router-view class="location" name="location-list"></router-view>
      <div class="content-wrap">
          <div class="left">
              <router-view name="content-list"></router-view>
              <router-view name="pages-list"></router-view>
          </div>
          <div class="right">
            <router-view name="rank-list"></router-view>
            <router-view name="date-list"></router-view>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        data: function(){
            return {
               
            }
        },
        name: 'ele-content'
    }
</script>

<style scoped>
    .content{
        margin-top: 61px;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .content-wrap{
      align-self: center;
      min-height: 500px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 1240px;
      padding: 0px 10px;
      flex-wrap: wrap;
    }

    .location{
      align-self: center;
      width: 1240px;
    }

    .left{
        flex: 3 1 70%;
        order: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .right{
        margin-top: 15px;
        margin-left: 10px;
        flex: 1 3 320px;
        -webkit-order: 2;
        -moz-order: 2;
        -ms-order: 2;
        -o-order: 2;
        order: 2;
    }

    @media screen and (max-width: 1240px) and (min-width: 941px){
        .content-wrap{
            width: 940px;
        }

        .location{
          width: 940px;
        }
    }

    @media screen and (max-width: 940px) and (min-width: 741px){
        .content-wrap{
            width: 740px;
        }

        .location{
          width: 740px;
        }
    }

    @media screen and (max-width: 740px){
        .content-wrap{
            width: 100%;
        }

        .location{
          width: 100%;
        }
    }

    @media screen and (max-width: 440px){
        .content-wrap{
            width: 440px;
        }

        .location{
          width: 440px;
        }
    }

</style>