import Vue from "vue";
import Vuelidate from 'vuelidate'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;

Vue.use(messagePlugin)

Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)


firebase.initializeApp({
	apiKey: "AIzaSyCrltDo-qeIC0yW32dI_yaJre_MjyxDS0Y",
    authDomain: "vue-crm-kirill.firebaseapp.com",
    databaseURL: "https://vue-crm-kirill.firebaseio.com",
    projectId: "vue-crm-kirill",
    storageBucket: "vue-crm-kirill.appspot.com",
    messagingSenderId: "320590324801",
    appId: "1:320590324801:web:48cfa3bbcf92890e4d92c0"
})

let app

firebase.auth().onAuthStateChanged(() => {
	if(!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount("#app");
	}
	
})


