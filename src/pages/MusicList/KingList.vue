<template>
  <MusicListNav :url="url" />
</template>

<script>
    import MusicListNav from '../../components/MusicListNav'
    export default {
        name: "KingList",
        data(){
            return{
                url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=21&size=6&offset=40"
            }
        },
        components:{
            MusicListNav
        }
    }
</script>

<style scoped>

</style>
