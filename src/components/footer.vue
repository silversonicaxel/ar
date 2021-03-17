<template>
  <footer>
    <p>© copyright <a href="http://alessandrorabitti.com">alessandrorabitti.com</a> 2021</p>
    <p>KVK 74007262</p>
    <br />
    <p>~~ thanks Alba &amp; Alfredo ~~</p>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
footer {
  margin: 1rem auto;
  font-size: 1rem;
  text-align: center;
  width: calc(100% - 0.6rem);

  p {
    margin: 0;
  }
}
</style>
