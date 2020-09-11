import Vue from "vue";
import Vuex from "vuex";
import auth from './auth'
import info from './info'
import category from './category'
import record from './record'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		error: null
	},
	mutations: {
		setError(state, error) {
			state.error = error
		},
		clearError(state) {
			state.error = null
		},
		
	},
	actions: {
		async fetchCurrency() {
			// const key = process.env.VUE_APP_FIXER
			const res = await fetch(`http://data.fixer.io/api/latest?access_key=938cc1128efd7a6c62e816f4d9376df9&symbols=USD,EUR,KZT`)
			return await res.json()
		}
	},
	getters: {
		error: s => s.error
	},
	modules: {
		auth, info, category, record
	}
});
