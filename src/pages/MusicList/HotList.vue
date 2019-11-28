<template>
<div>

  <MusicListNav :url="url" />
</div>
</template>

<script>
  import MusicListNav from '../../components/MusicListNav'
    export default {
        name: "HotList",
        data(){
            return{
                url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=21&size=6&offset=30"
            }
        },
        components:{
            MusicListNav
        }
    }
</script>

<style scoped>

</style>
