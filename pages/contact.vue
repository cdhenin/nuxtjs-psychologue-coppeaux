<template>
  <div class="flex-grow-vertical">
    <div class="cabinet-wrapper">
      <div class="cabinet-layer"></div>
      <nuxt-img
        format="webp"
        sizes="sm:400px md:600px lg:800px xl:1000px"
        height="485"
        width="1024"
        class="full-width cabinet"
        alt="photo du cabinet rue Ledru-Rollin"
        src="/img/cabinet.jpg"
      />
    </div>
    <section id="contact" class="flex-grow-vertical">
      <h1>Contact & accès</h1>
      <hr class="divider" />
      <div class="container">
        <div class="flex-row-space-around">
          <div class="flex-row-space-around-item">
            <font-awesome-icon
              aria-hidden="false"
              aria-level="2"
              aria-label="Adresse du cabinet"
              role="heading"
              :icon="['fas', 'location-dot']"
              class="icon"
            />
            <div>
              <p>Centre commercial <br />du Clos de l'Hers</p>
              <p>31790 Saint-Jory</p>
            </div>
          </div>
          <div class="flex-row-space-around-item">
            <font-awesome-icon
              aria-hidden="false"
              aria-label="Téléphone"
              aria-level="2"
              role="heading"
              :icon="['fas', 'phone']"
              class="icon"
            />
            <a
              class="text"
              href="tel:0687899217"
              target="_blank"
              rel="noopener noreferrer"
              >06.87.89.92.17</a
            >
          </div>
          <div class="flex-row-space-around-item">
            <font-awesome-icon
              aria-hidden="false"
              aria-label="Adresse email"
              aria-level="2"
              role="heading"
              :icon="['fas', 'envelope']"
              class="icon"
            />
            <div class="email">
              <span>ameliecoppeaux.psychologue</span>

              <span class="at">
                <font-awesome-icon
                  aria-label="@"
                  aria-hidden="false"
                  alt="@"
                  :icon="['fas', 'at']"
                  class="at-icon"
                />gmail.com
              </span>
            </div>
          </div>

          <div class="flex-row-space-around-item">
            <font-awesome-icon
              aria-hidden="false"
              aria-level="2"
              aria-label="Rendez-vous doctolib"
              role="heading"
              :icon="['fas', 'calendar-check']"
              class="icon"
            />
            <a
              class="button doctolib"
              href="https://www.doctolib.fr/psychologue/toulouse/amelie-coppeaux"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prendre rendez-vous
              <nuxt-img
                src="/img/logo_doctolib.svg"
                aria-hidden="true"
                aria-label="logo Doctolib"
                role="text"
                height="28"
                width="94"
                alt="logo doctolib"
              />
            </a>
          </div>
        </div>

        <p>
          Pour arriver à mon cabinet vous trouverez à proximité le tramway
          lignes T1 et T2 (arrêt cartoucherie), des bus (L2, 45 et 66).
        </p>
        <p>
          Il est également possible de venir en voiture (stationnement gratuit
          autour du cabinet).
        </p>
      </div>
    </section>

    <MapsIframe />
  </div>
</template>

<script>
import MapsIframe from '~/components/MapsIframe.vue'

export default {
  name: 'ContactPage',
  components: { MapsIframe },
  head() {
    return {
      title: 'Contact- Amélie Coppeaux Psychologue clinicienne à Toulouse',
    }
  },
}
</script>

<style lang="scss" scoped>
$picture-height: 200px;

.cabinet-wrapper {
  background-image: url('/img/cabinet.jpg');
  height: $picture-height;
  width: 100%;
  display: flex;
  justify-content: center;
}

.cabinet-layer {
  backdrop-filter: blur(10px);
  height: $picture-height;
  width: 100%;
  position: absolute;
}

.cabinet {
  height: $picture-height;
  object-fit: cover;
  max-width: 1024px;
  z-index: 1;
}

.email {
  display: flex;
  flex-direction: column;
}

.at {
  display: flex;
  justify-content: center;

  .at-icon {
    max-width: 1.2rem;
  }
}

.text {
  color: $primary-color-dark;
}
</style>
