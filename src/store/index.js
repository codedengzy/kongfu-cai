import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        allGoodsList: {}
    },
    getters: {
        getterAllGoodsList(state) {
            return state.allGoodsList;
        }
    },
    mutations: {
        mutationAllGoodsList(state, _d) {
            state.allGoodsList = _d;
            // console.log(_d);
        }
    },
    actions: {
        actionsAllGoodsList({ commit }, _id) {
            axios
                .get("/api/get_allgoods_sidebar", {
                    params: {
                        sidebar_id: _id,
                    },
                })
                .then((_d) => {
                    commit('mutationAllGoodsList', _d.data);
                });
        }
    }
})