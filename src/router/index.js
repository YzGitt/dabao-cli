import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
	  {
		  path: '/',
		  name: 'index',
		  component: () => import("@/view/index")
	  },
	  {
		  path: '/login',
		  name: 'login',
		  component: () => import("@/view/login/index")
	  },
	  {
		  path: '/thankyou',
		  name: 'thankyou',
		  component: () => import("@/view/thankyou/index")
	  },
	  {
		  path: '/music',
		  name: 'music',
		  component: () => import("@/view/music/index")
	  },
	  {
		  path: '/playlist',
		  name: 'playlist',
		  component: () => import("@/view/playlist/index")
	  },
	  {
		  path: '/playlist/uselist',
		  name: 'uselist',
		  component: () => import("@/view/playlist/uselist")
	  },

  ]
})
