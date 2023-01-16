<template>
  <main @click="closeMobileMenu">
    <NavBar />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>
export default {
  methods: {
    closeMobileMenu() {
      document.querySelector('nav > ul').classList.remove('visible')
    },
  },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  min-height: 100vh;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-size: 1.2rem;
  font-family: $main-font;
  background-color: $light-color;
  color: $primary-color-dark;
}

main {
  min-height: 100vh;
  padding-top: $navbar-height;
  display: flex;
  flex-direction: column;
}
</style>
