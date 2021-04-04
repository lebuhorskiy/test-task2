import Vue from 'vue'
import Vuex from 'vuex'
import {getPackages} from '@/services/api';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: {}
    },
    getters: {
        items: state => state.items.results,
        total: state => state.items.total
    },
    mutations: {
        setItems(state, data) {
            state.items = data;
        }
    },
    actions: {
        getItems({commit}, params) {

            // получаем пакеты и ставим их в стор

            return getPackages(params).then(response => {
                commit('setItems', response.data);
            }).catch(error => {
                alert((error.response.data.error ? error.response.data.error : 'Возникла ошибка'));
            });
        }
    },
    modules: {}
})
