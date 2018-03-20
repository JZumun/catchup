import Vue from 'vue';
import Router from 'vue-router';
import Home from 'routes/Home.vue';
import About from 'routes/About.vue';
import Login from "routes/Login.vue";
import Game from "routes/Game.vue"
import NotFound from "routes/Error.vue";

Vue.use(Router);

export default function createRouter () {
	return new Router({
		mode: 'history',
		routes: [
			{ path: '/', component: Home },
			{ path: '/about', component: About },
			{ path: "/login", component: Login },
			{ path: "/game", component: Game },
			{ path: "*", component: NotFound },
		]
	});
}
