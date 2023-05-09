<template>
  <div class="flex-grow-vertical">
    <section id="pratique" class="section">
      <div class="image-container">
        <nuxt-img
          format="webp"
          alt="illustration pratique"
          src="/img/pratique.jpg"
          sizes="sm:400px md:600px lg:800px xl:1000px"
          loading="lazy"
          width="1920"
          height="1403"
          quality="75"
        />
      </div>
      <div class="content">
        <div>
          <h1>Comment je travaille</h1>
          <hr class="divider" />
        </div>
        <div class="description">
          <p>Ma pratique se veut intégrative, collaborative et dynamique.</p>
          <p>
            Chaque personne est unique, c’est pourquoi j’adapte différents
            outils et approches issus essentiellement de Thérapies
            Comportementales et Cognitives (TCC), à vos besoins et votre
            demande.
          </p>
          <p>
            Je considère le travail thérapeutique comme un travail d’équipe,
            nous travaillons ensemble pour aller vers votre mieux être.
          </p>
          <p>
            Enfin, ma pratique est dynamique, vous êtes acteur de votre
            thérapie. C’est pourquoi je n'hésite pas à proposer des choses à
            mettre en place entre les séances, afin que le travail soit efficace
            et vous rende autonome.
          </p>
        </div>
      </div>
    </section>
    <section id="tarifs" class="section dark">
      <div class="image-container">
        <nuxt-img
          format="webp"
          alt="illustration tarifs"
          src="/img/notes.jpg"
          loading="lazy"
          width="1920"
          height="1280"
          sizes="sm:400px md:600px lg:800px xl:1000px"
          quality="75"
        />
      </div>

      <div class="content">
        <div>
          <h1>Informations et tarifs</h1>
          <hr class="divider" />
        </div>
        <div class="description">
          <h2>Adultes</h2>
          <p>60 € - 1 heure</p>
          <h2>Etudiants</h2>
          <p>40€ - 1 heure</p>

          <h2>Enfants / adolescents</h2>
          <ul>
            <li>
              60 € - 1h, premier entretien en présence d’au moins un des parents
            </li>
            <li>50€ - 45 min (suivi)</li>
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
  </div>
</template>

<script>
export default {
  name: 'MaPratiquePage',
  head() {
    return {
      title: 'Ma pratique - Amélie Coppeaux Psychologue clinicienne à Toulouse',
    }
  },
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  padding: 0;

  > .image-container,
  > .content {
    width: 50%;
  }

  > .image-container {
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &#tarifs {
    flex-direction: row-reverse;
  }

  .content {
    padding: 3rem;
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .description {
      p {
        padding: $spacing-2 0;
      }

      h2 {
        margin: 1rem 0 0 0;
        font-size: 1.2rem;
      }
    }
  }
}

@media (max-width: 864px) {
  .section,
  .section#tarifs {
    flex-direction: column;

    > .image-container,
    > .content {
      width: 100%;
    }

    .content {
      padding: $spacing-4;
    }
  }
}
</style>
