<template>
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid container">
            <a class="navbar-brand" href="#">Assignment</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Switch User
                </a>
                
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li v-for="(user) in users" 
                        :key="user.id"
                        @click="switchUser(user)">
                        <a class="dropdown-item">{{ user.name }}</a>
                    </li>
                </ul>
                </li>
                <p>current user: {{ currentUser.name }}, can do: {{ currentUser.privilege }}</p>
                <theme-toggle></theme-toggle>
            </ul>
            </div>
        </div>
    </nav>
</header>

</template>

<script>
import {computed} from 'vue'
import {useStore} from "vuex"
import ThemeToggle from "./ThemeToggle.vue"
export default {
    name: "Header",
    components: {
        ThemeToggle
    },
    setup() {
        const store = useStore()
        const users = computed(function() {
            return store.state.users
        })

        let currentUser = computed(function() {
            return store.state.currentUser
        })

        function switchUser(user) {
            store.commit("switchUser", user)
        }

        return {
            users,
            currentUser,
            switchUser
        }
    }
}
</script>

<style scoped>
.navbar-nav {
    align-items: center;
}
.navbar-nav p {
    margin-bottom: 0;
    margin-right: 1em;
}
</style>