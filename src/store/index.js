import Vue from 'vue'
import Vuex from 'vuex'

import messages from './modules/messages.js'
import users from './modules/users'

Vue.use(Vuex)

//stateを呼び出す時は this.$store.state.モジュール名.propety

const store = new Vuex.Store({
    modules: {
        users,
        messages
    }
})

export default store