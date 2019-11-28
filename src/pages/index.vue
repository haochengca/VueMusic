<template>
    <div class="index">
    <ul>

      <router-link tag="li" to="/Home"><img src="@/assets/x-logo.jpeg" alt=""></router-link>
      <router-link tag="li" to="/Musician">Musician</router-link>
<!--      <router-link tag="li" to="/Featured">Featured</router-link>-->
<!--      <router-link tag="li" to="/MyLibrary">My Library</router-link>-->
      <router-link tag="li" to="/Search">Search</router-link>

    </ul>
    <router-view />

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .index img{
    width: 26px;
    height: 26px;
  }

  .index ul{
    display: flex;
    height: 50px;
    line-height: 50px;
    background: #f9f9f9;
  }

  .index ul li {
    flex: 1;
    text-align: center;
  }

  .index ul li a{
    font-size: 16px;
    color: #999;
  }

</style>
