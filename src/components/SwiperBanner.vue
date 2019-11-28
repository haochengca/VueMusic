<template>
  <div class="banner">
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="../assets/img/b1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/img/b2.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/img/b3.jpg" alt=""></swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {pagination: {
                        el: '.swiper-pagination',
                    },

                }
            }
        }
    }
</script>

<style scoped>
  .banner{
    padding: 10px;
  }

</style>
