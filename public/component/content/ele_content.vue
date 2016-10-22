<template>
  <div class="content">
      <div class="content-wrap">
          <location-list></location-list>
          <content-list></content-list>
          <pages-list></pages-list>
          <rank-list></rank-list>
          <date-list></date-list>
      </div>
  </div>
</template>

<script>

    import location_list from "./location_list.vue"
    import content_list from "./content_list.vue"
    import rank_list from "./rank_list.vue"
    import date_list from "./date_list.vue"
    import pages_list from "./pages_list.vue"

    export default {
        data: function(){
            return {
               
            }
        },
        name: 'ele-content',
        components:{
          "location-list": location_list,
          "content-list": content_list,
          "pages-list":pages_list,
          "rank-list":rank_list,
          "date-list":date_list
        }
    }
</script>

<style scoped>
    .content{
        display:flex;
        flex-direction: row;
        justify-content: center;
    }
    
    .content-wrap{
      min-height: 500px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    @media screen and (max-width: 1240px){
        .content-wrap{
            flex-basis: 940px;
        }
    }

     @media screen and (max-width: 440px){
        .content-wrap{
            width: 440px;
        }
    }
</style>