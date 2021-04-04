import Vue from 'vue';

export function getPackages(params) {
    return Vue.axios.get('https://api.npms.io/v2/search', {
        params
    });
}
