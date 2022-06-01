<template>
  <article>
      <h6>display message here: </h6>
      <p>{{ message }}</p>
  </article>
</template>

<script>
export default {
    name: "Message",
    props: {
        message: String,
    }
}
</script>

<style>

</style>