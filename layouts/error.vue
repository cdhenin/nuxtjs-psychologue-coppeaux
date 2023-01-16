<template>
  <div class="flex-grow-vertical wrapper">
    <font-awesome-icon :icon="['fas', 'face-frown']" class="icon" />
    <h1>Erreur 404</h1>
    <p>Cette page n'existe pas</p>

    <div class="buttons">
      <NuxtLink to="/" class="button">Accueil</NuxtLink>
      <NuxtLink to="/me-connaitre" class="button primary"
        >Me connaître</NuxtLink
      >
      <NuxtLink to="/ma-pratique" class="button">Ma pratique</NuxtLink>
      <NuxtLink to="/bilan-psychologique" class="button primary"
        >Bilan psychologique</NuxtLink
      >
      <NuxtLink to="/contact" class="button">Prendre rendez-vous</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  gap: 3rem;
}
</style>
