<template>
  <div class="wrapper">
    <section id="home">
      <div class="card">
        <h1>Amélie COPPEAUX</h1>
        <div class="subtitles">
          <h2>Psychologue&nbsp;clinicienne à Toulouse</h2>
          <h3>Enfants- Adolescents- Adultes</h3>
          <h3>Bilan intellectuel et cognitif (WISC 5)</h3>
          <h3>Consultations au cabinet et en visio</h3>
          <h3>Consultations à domicile (enfants et adolescents)</h3>
        </div>
        <div class="buttons">
          <NuxtLink
            aria-label="Visiter la page contact"
            to="/contact"
            class="button primary"
            >Prendre rendez-vous</NuxtLink
          >
        </div>
      </div>
    </section>
    <RendezVous />

    <MapsIframe />
  </div>
</template>

<script>
import MapsIframe from '~/components/MapsIframe.vue'

export default {
  name: 'IndexPage',
  components: { MapsIframe },
  head() {
    return {
      title: 'Amélie Coppeaux Psychologue clinicienne à Toulouse',
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

#home {
  background-size: cover;
  background-position: right 45% bottom 45%;
  height: calc(100vh - $navbar-height);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-image 1s;
  background-image: url('~/assets/img/home.jpg');

  &::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - $navbar-height);
  }

  > .card {
    z-index: 1;
    padding: $spacing-5;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $light-color;
    border: 3px solid $secondary-color-main;

    h1 {
      font-size: 3rem;
    }

    .subtitles {
      font-weight: 600;
      color: $primary-color-main;

      h2,
      h3 {
        margin: 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    > .card {
      padding: $spacing-3;
      h1 {
        font-size: 2rem;
      }
      .subtitles {
        h2 {
          font-size: 1.5rem;
        }

        h3 {
          font-size: 1.2rem;
        }
      }

      .button {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
