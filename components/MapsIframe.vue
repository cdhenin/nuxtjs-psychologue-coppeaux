<template>
  <div id="googlemaps" class="dashed">
    <font-awesome-icon :icon="['fas', 'map-location-dot']" class="icon" />
    <p>
      Les services google maps peuvent utiliser des cookies pour assurer leur
      fonctionnement.
    </p>
    <p>
      <ExternalLink
        href="https://policies.google.com/privacy?hl=fr"
        content="Voir la politique de Confidentialité de Google"
      />
      et
      <ExternalLink
        href="https://www.google.com/intl/fr_US/help/terms_maps/"
        content="voir les
                conditions d’utilisation de Google
                maps"
      />
    </p>

    <button id="gMapsConsentBtn" class="button">
      Accepter et voir la carte
    </button>
  </div>
</template>

<script>
import ExternalLink from './ExternalLink.vue'

export default {
  components: { ExternalLink },
  mounted: function () {
    const gMapsConsent = window.sessionStorage.getItem('gMapsConsent')
    if (gMapsConsent !== 'yes') {
      document
        .getElementById('gMapsConsentBtn')
        .addEventListener('click', this.gMapsConsent)
      return
    }
    this.displayGmaps()
  },
  methods: {
    gMapsConsent(event) {
      event.stopPropagation()
      event.preventDefault()
      window.sessionStorage.setItem('gMapsConsent', 'yes')
      this.displayGmaps()
    },
    displayGmaps() {
      const iframe = document.createElement('iframe')
      iframe.src =
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11556.28201681057!2d1.4101201!3d43.6050736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x7f83287ad066bfe0!2sAmÃ©lie COPPEAUX- Psychologue!5e0!3m2!1sfr!2sfr!4v1671038760519!5m2!1sfr!2sfr'
      iframe.setAttribute('allowfullscreen', '')
      iframe.setAttribute('loading', 'lazy')
      iframe.setAttribute('height', '200')
      iframe.setAttribute(
        'aria-label',
        'google map widget avec adresse du cabinet'
      )
      iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')
      const iframeContainer = document.getElementById('googlemaps')
      iframeContainer.classList.remove('dashed')
      iframeContainer.innerHTML = ''
      iframeContainer.append(iframe)
    },
  },
}
</script>

<style lang="scss" scoped>
.dashed {
  border: 2px dashed;
  padding: 1rem;
}

#googlemaps {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > * {
    margin: 0.5rem auto;
    text-align: center;
  }

  a {
    color: darken($secondary-color-dark, 5%);
  }

  .button {
    font-size: 1rem;
  }
}
</style>
