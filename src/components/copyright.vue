<script lang="ts">
export default {
  name: 'CopyrightView'
}
</script>

<template>
  <footer>
    <p>© copyright <a href="http://alessandrorabitti.com">alessandrorabitti.com</a> 2024</p>
    <br />
    <p>~~ thanks Alba &amp; Alfredo ~~</p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  margin: 1rem auto;
  font-size: 1rem;
  text-align: center;
  transform: skewY(-3deg);
  width: calc(100% - 0.6rem);

  p {
    margin: 0;
  }
}
</style>
