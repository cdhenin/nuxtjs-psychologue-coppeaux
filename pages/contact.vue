<template>
  <div class="flex-grow-vertical">
    <div class="cabinet-wrapper">
      <div class="cabinet-layer"></div>
      <img
        class="full-width cabinet"
        alt="photo du cabinet rue Ledru-Rollin"
        src="~/assets/img/cabinet.jpg"
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
            <font-awesome-icon
              aria-hidden="false"
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

    <iframe
      class="full-width"
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
  name: 'ContactPage',
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
  background-image: url('~/assets/img/cabinet.jpg');
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

.text {
  color: $primary-color-dark;
}
</style>
