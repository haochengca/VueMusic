<template>
  <MusicListNav :url="url" />
</template>

<script>
    import MusicListNav from '../../components/MusicListNav'
    export default {
        name: "NewList",
        data(){
            return{
                url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=21&size=6&offset=50"
            }
        },
        components:{
            MusicListNav
        }
    }
</script>

<style scoped>

</style>
