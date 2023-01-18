<template>
  <div class="wrapper">
    <section id="home">
      <div class="card">
        <h1>Amélie COPPEAUX</h1>
        <div class="subtitles">
          <h2>Psychologue&nbsp;clinicienne à Toulouse</h2>
          <h3>Enfants- Adolescents- Adultes</h3>
          <h3>Bilan intellectuel et cognitif (WISC 5)</h3>
        </div>
        <div class="buttons">
          <NuxtLink
            aria-label="Visiter la page contact"
            to="/contact"
            class="button primary"
          >
            Prendre rendez-vous
          </NuxtLink>
        </div>
      </div>
    </section>
    <section id="contact" class="dark flex-grow-vertical">
      <div class="flex-row-space-around">
        <div class="flex-row-space-around-item">
          <font-awesome-icon
            aria-hidden="false"
            aria-label="Adresse du cabinet"
            role="heading"
            :icon="['fas', 'location-dot']"
            class="icon"
          />
          <div>
            <p>3 Rue Ledru-Rollin</p>
            <p>31300 Toulouse</p>
          </div>
        </div>
        <div class="flex-row-space-around-item">
          <font-awesome-icon
            aria-hidden="false"
            aria-label="Téléphone"
            role="heading"
            :icon="['fas', 'phone']"
            class="icon"
          />
          <a href="tel:0687899217" target="_blank" rel="noopener noreferrer"
            >06.87.89.92.17</a
          >
        </div>
        <div class="flex-row-space-around-item">
          <font-awesome-icon
            aria-hidden="false"
            aria-label="Adresse email"
            role="heading"
            :icon="['fas', 'envelope']"
            class="icon"
          />
          <div style="display: flex; flex-direction: column">
            <span>ameliecoppeaux.psychologue</span>

            <span style="display: flex; justify-content: center">
              <font-awesome-icon
                style="max-width: 1.2rem"
                aria-label="@"
                aria-hidden="false"
                alt="@"
                :icon="['fas', 'at']"
              />gmail.com
            </span>
          </div>
        </div>

        <div class="flex-row-space-around-item">
          <a
            class="button doctolib"
            href="https://www.doctolib.fr/psychologue/toulouse/amelie-coppeaux"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prendre rendez-vous
            <img
              src="~/assets/img/logo_doctolib.svg"
              aria-hidden="false"
              aria-label="logo Doctolib"
              role="text"
              height="28"
              alt="logo doctolib"
            />
          </a>
        </div>
      </div>
    </section>

    <iframe
      class="full-width flex-grow-vertical"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11556.28201681057!2d1.4101201!3d43.6050736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f83287ad066bfe0!2sAm%C3%A9lie%20COPPEAUX-%20Psychologue!5e0!3m2!1sfr!2sfr!4v1671038760519!5m2!1sfr!2sfr"
      allowfullscreen
      loading="lazy"
      height="200"
      aria-label="google map widget avec adresse du cabinet"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
