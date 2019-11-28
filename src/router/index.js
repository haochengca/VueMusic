import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Musician from '@/pages/Musician'
import Featured from '@/pages/Featured'
import MyLibrary from '@/pages/MyLibrary'
import Search from '@/pages/Search'
import HotList from '@/pages/MusicList/HotList'
import NewList from '@/pages/MusicList/NewList'
import KingList from '@/pages/MusicList/KingList'
import MoreList from "../pages/MoreList";
import MusicPlay from "../pages/MusicPlay";
import ArtistsDetails from  "../pages/artistsDetails/artistsDetails"




Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/MusicPlay',
      name:"MusicPlay",
      component:MusicPlay
    },
    {
      path: '/',
      name: 'Index',
      redirect:'/Home',
      component: Index,
      children:[

        {

          path:'Home',
          component:Home,
          redirect:'/home/HotList',
          children:[
            {
              path:'HotList',
              component:HotList
            },{
              path:'NewList',
              component:NewList
            },{
              path:'KingList',
              component:KingList
            },


          ]
        },
        {
          path:'Musician',
          component:Musician
        },
        {
          path:'Featured',
          component:Featured
        },
        {
          path:'MyLibrary',
          component:MyLibrary
        },
        {
          path:'Search',
          component:Search
        },
        {
          path:'More',
          name:'MoreList',
          component:MoreList
        },
        {
          path:"artistsdetails",
          name:"ArtistsDetails",
          component:ArtistsDetails
        },


      ]


    }
  ]
})
