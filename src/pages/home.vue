<template>
    <div>

      <discover title="Discover" type="21"/>
      <New/>
      <SwiperBanner/>
      <MusicList/>
      <keep-alive><router-view/></keep-alive>
<!--      <discover title="New Discover" type="25"/>-->
    </div>
</template>

<script>
  import Discover from "../components/Discover";
  import New from "../components/New";
  import SwiperBanner from "../components/SwiperBanner";
  import MusicList from "./MusicList/MusicList";
    export default {
        name: "home",
        components:{
            Discover,
            New,
            SwiperBanner,
            MusicList

        }
    }
</script>

<style scoped>

</style>
