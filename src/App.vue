<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/styles/_fonts.scss';

$primary-color: #070e14;
$secondary-color: #fafafa;

body {
  background-color: $secondary-color;
  color: $primary-color;
  font-family: 'Share Tech', Arial, sans-serif;
  font-size: 6rem;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  padding: 0;

  @media (prefers-color-scheme: dark) {
    background-color: $primary-color;
    color: $secondary-color;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 767px) {
    font-size: 2rem;
  }
}

main {
  align-content: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    font-size: 8rem;
    padding: {
      bottom: 5rem;
      top: 5rem;
    }

    transform: skewY(-3deg);

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 6rem;
      padding: {
        bottom: 3rem;
        top: 3rem;
      }
    }

    @media (max-width: 767px) {
      font-size: 4rem;
      padding: {
        bottom: 2rem;
        top: 2rem;
      }
    }
  }

  .content {
    margin: 0 auto;
    max-width: 1200px;
    padding: {
      left: 0.3rem;
      right: 0.3rem;
    }

    width: calc(100% - 0.6rem);
  }
}

a {
  background-color: $primary-color;
  color: $secondary-color;

  @media (prefers-color-scheme: dark) {
    background-color: $secondary-color;
    color: $primary-color;
  }
}
</style>
