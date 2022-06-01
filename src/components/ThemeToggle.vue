<template>
  <button class="btn btn-primary" @click="toggle">Toggle Color</button>
</template>

<script>
export default {
    name: "ThemeToggle",
    data() {
        return {
            theme: 'dark'
        }
    },
    methods: {
        toggle() {
            if (document.body.classList.contains(this.theme)) {
                document.body.classList.remove(this.theme)
            } else {
                document.body.classList.add(this.theme)
            }
        }
    }
}
</script>

<style>

</style>