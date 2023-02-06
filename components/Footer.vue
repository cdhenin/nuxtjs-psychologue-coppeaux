<template>
  <footer>
    <p>Amélie Coppeaux, psychologue clinicienne à Toulouse</p>
    <p>|</p>
    <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
footer {
  background-color: $primary-color-dark;
  color: $secondary-color-main;
  text-align: center;
  padding: $spacing-2;
  font-size: 0.875rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  a {
    color: $secondary-color-main;
    text-decoration: none;
    @include text-bold;
  }
}

@media screen and (max-width: 768px) {
  footer {
    flex-direction: column;
  }
}
</style>
