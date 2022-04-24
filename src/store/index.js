import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import state from "@/store/state";
import * as mutations from "@/store/mutations";
import * as getters from "@/store/getters";
import * as actions from "@/store/actions";

export default createStore({
    state,
    getters,
    mutations,
    actions,
    plugins: [
        createPersistedState(
            {
                paths: []
            }),
    ],
})
