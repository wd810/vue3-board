import { createStore } from "vuex";

export default createStore({
    state: {
        users: [
            {id: 1, name: "pikachu", privilege: ["list"]},
            {id: 2, name: "psyduck", privilege: ["list", "add"]},
            {id: 3, name: "snorlax", privilege: ["list", "edit"]},
            {id: 4, name: "bulbasaur", privilege: ["list", "delete"]},
            {id: 5, name: "charmander", privilege: ["list", "add", "edit"]},
            {id: 6, name: "squirtl", privilege: ["list", "edit", "delete"]},
            {id: 7, name: "meowth", privilege: ["list", "add", "edit", "delete"]},
        ],
        currentUser: {id: 1, name: "pikachu", privilege: ["list"]}
    },
    getters: {},
    mutations: {
        switchUser(state, user) {
            state.currentUser = user
        }
    },
    actions: {},
    modules: {}
})