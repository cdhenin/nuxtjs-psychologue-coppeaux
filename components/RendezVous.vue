<template>
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
</template>

<script>
export default {
  name: 'RendezVous',
}
</script>
