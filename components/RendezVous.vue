<template>
  <section id="contact" class="dark flex-grow-vertical">
    <div class="flex-row-space-around">
      <div class="flex-row-space-around-item">
        <font-awesome-icon
          aria-hidden="false"
          aria-label="Adresse du cabinet"
          role="heading"
          aria-level="2"
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
          role="heading"
          aria-level="2"
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
          aria-level="2"
          :icon="['fas', 'envelope']"
          class="icon"
        />
        <div class="email">
          <span>ameliecoppeaux.psychologue</span>

          <span class="at">
            <font-awesome-icon
              class="at-icon"
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
  </section>
</template>

<script>
export default {
  name: 'RendezVous',
}
</script>

<style lang="scss" scoped>
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
</style>
