<template>
  <div class="flex-grow-vertical">
    <img
      class="cover"
      alt="illustration tarifs"
      src="~/assets/img/organizer.jpg"
    />
    <section id="tarifs" class="section">
      <div class="content container">
        <div>
          <h1>Tarifs</h1>
          <hr class="divider" />
        </div>
        <div class="description">
          <h2>Consultations</h2>
          <div class="tarifs">
            <div class="item">
              <div>
                <font-awesome-icon :icon="['fas', 'users']" class="icon" />
                <h3>Adultes</h3>
              </div>
              <p>1 heure - 60 €</p>
              <p></p>
            </div>

            <div class="item">
              <div>
                <font-awesome-icon
                  :icon="['fas', 'user-graduate']"
                  class="icon"
                />
                <h3>Etudiants</h3>
              </div>
              <p>1 heure - 40€</p>
              <p></p>
            </div>
            <div class="item">
              <div>
                <font-awesome-icon
                  :icon="['fas', 'child-reaching']"
                  class="icon"
                />
                <h3>Enfants / adolescents</h3>
              </div>
              <ul class="list">
                <li>
                  1h, premier entretien en présence d’au moins un des parents -
                  60€
                </li>
                <li>45 min (suivi) - 50€</li>
              </ul>
            </div>
          </div>

          <h2>Bilan psychologique</h2>

          <ul>
            <li>
              Entretien préalable en présence des parents&nbsp;:
              60€&nbsp;-&nbsp;1 heure
            </li>
            <li>
              Bilan (passation du test, correction, restitution orale et
              écrite)&nbsp;: 150€
            </li>
          </ul>
          <h2>Modalités de Paiements</h2>
          <p>
            Le paiement s’effectue à chaque séance en espèces ou par paiement
            mobile (Lydia, Lyfpay, Paylib)
          </p>

          <h2>Remboursement des consultations</h2>
          <p>
            Les séances ne sont pas remboursées par la sécurité sociale.
            Néanmoins, certaines mutuelles proposent une prise en charge
            partielle des frais engagés. Pour en savoir plus, n'hésitez pas à
            vous renseigner auprès de votre mutuelle.
          </p>
        </div>
      </div>
    </section>
    <RendezVous />
  </div>
</template>

<script>
import RendezVous from '~/components/RendezVous.vue'
export default {
  name: 'TarifsPage',
  components: { RendezVous },
  head() {
    return {
      title: 'Tarifs - Amélie Coppeaux Psychologue clinicienne à Toulouse',
    }
  },
}
</script>

<style lang="scss" scoped>
.cover {
  height: 30vh;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
}

.tarifs {
  display: flex;
  justify-content: space-around;
  gap: 2rem;

  .item {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    text-align: center;
    width: 100%;
    border: 2px dashed;
    padding: 2rem;
    justify-content: space-between;

    .list {
      text-align: left;
      margin: 0;
      padding: 1rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .tarifs {
    flex-direction: column;
  }
}

@media screen and (min-width: 1024px) {
  .tarifs {
    .item {
      width: 33%;
    }
  }
}
</style>
