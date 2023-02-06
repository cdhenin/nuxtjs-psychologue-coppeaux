<template>
  <nav>
    <button
      aria-label="Afficher Menu"
      class="mobile-menu-button"
      @click="toggleMenu"
    >
      <font-awesome-icon class="icon" :icon="['fas', 'bars']" />
    </button>

    <NuxtLink to="/" class="navbar-link">
      <h1 class="navbar-title">Amélie COPPEAUX</h1>
      <h2 class="navbar-subtitle">Psychologue Toulouse</h2>
    </NuxtLink>

    <ul>
      <li>
        <NuxtLink to="/me-connaitre">Me connaître</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/ma-pratique">Ma pratique</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/bilan-psychologique">Bilan psychologique</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/tarifs">Tarifs</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    toggleMenu(event) {
      event.stopPropagation()
      event.preventDefault()
      document.querySelector('nav > ul').classList.toggle('visible')
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: $primary-color-dark;
  color: $secondary-color-main;
  z-index: 2;
  min-height: $navbar-height;
  transition: all 1s ease;

  .mobile-menu-button {
    background: none;
    border: none;
    cursor: pointer;
  }

  &.scroll {
    opacity: 1;
    min-height: 53px;
  }

  .navbar-link {
    display: flex;
    flex-direction: column;

    &:hover {
      color: $secondary-color-main;
    }

    .navbar-subtitle {
      margin: 0;
      font-size: 1.2rem;
      font-family: teresatitle, GillSansRegular, 'Gill Sans MT', 'Gill Sans',
        Calibri, 'Trebuchet MS', sans-serif;
      text-transform: uppercase;
      text-align: right;
    }
  }

  > ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    min-height: $navbar-height;

    li {
      transition: all 0.5s ease-in-out;

      &:hover {
        background-color: $primary-color-main;
        color: $secondary-color-main;

        > a {
          color: $primary-color-light;
        }
      }

      a {
        padding: $spacing-3;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: $secondary-color-main;
        transition: all 1s ease-out;
        font-size: 1.2rem;
      }
    }

    .nuxt-link-active {
      background-color: $primary-color-main;
      color: $primary-color-light;
      @include text-bold;
    }
  }
  .mobile-menu-button {
    display: none;
    padding: $spacing-3;

    .icon {
      width: 1.2rem;
      font-size: 1.2rem;
    }
  }
}

@media screen and (max-width: 918px) {
  nav,
  nav.scroll {
    justify-content: flex-start;
    height: auto;

    .navbar-title {
      font-size: 1.2rem;
    }
    .navbar-subtitle {
      font-size: 1rem;
    }

    .mobile-menu-button {
      display: inline-flex;
    }

    > ul {
      display: none;
      width: 100%;
      &.visible {
        display: block;
      }
    }
  }
}
</style>
