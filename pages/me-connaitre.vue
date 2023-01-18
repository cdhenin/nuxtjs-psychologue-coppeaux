<template>
  <div class="flex-grow-vertical">
    <section id="about" class="flex-grow-vertical">
      <div class="container mx-auto">
        <h1>Qui suis-je ?</h1>
        <hr class="divider" />
        <div class="presentation">
          <img
            alt="portrait amélie coppeaux psychologue"
            width="200"
            src="~/assets/img/amélie.jpg"
          />
          <div>
            <p>
              Diplômée de l’école de Psychologues Praticiens de Paris, je vous
              reçois dans mon cabinet pour des prises en charge d'enfants,
              d’adolescents et d’adultes.
            </p>
            <p>
              Formée à la passation de bilans lors de mes études, puis
              psychologue de l’Education Nationale, je propose également les
              bilans cognitifs et intellectuels pour les enfants de 6 à 16 ans
              (WISC-V).
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="formations" class="dark">
      <div class="container mx-auto">
        <h1>Mes formations</h1>
        <hr class="divider" />
        <div class="formations">
          <div class="formation">
            <img
              alt="logo école Psychologues Praticiens Paris"
              src="~/assets/img/logo_EPP.png"
              height="75"
            />
            <p>
              Diplômée de
              <a
                href="https://www.psycho-prat.fr/"
                target="_blank"
                rel="noopener noreferrer"
                >l’école de Psychologues Praticiens de Paris</a
              >
            </p>
          </div>

          <!-- <div class="formation">
            <img
              alt="Logo AFTCC - Formation pratique aux TCC"
              src="~/assets/img/logo_AFTCC.png"
              height="75"
            />
            <p>
              Formation pratique aux TCC de
              <a
                href="https://www.aftcc.org/"
                target="_blank"
                rel="noopener noreferrer"
              >l'AFTCC</a>
            </p>
          </div> -->
          <div class="formation">
            <img
              alt="Logo Asadis"
              src="~/assets/img/logo_asadis.png"
              height="50"
            />
            <p>
              Certification de formation Méthodologie avancée d’analyse et
              d’interprétation du WISC-V -
              <a
                href="https://asadis.net/fr/"
                target="_blank"
                rel="noopener noreferrer"
                >Asadis</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MeConnaitrePage',
  head() {
    return {
      title:
        'Me connaître - Amélie Coppeaux Psychologue clinicienne à Toulouse',
    }
  },
}
</script>

<style lang="scss" scoped>
.presentation {
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  padding: 2rem;

  > img {
    border: 2px solid;
    border-radius: 5%;
  }
  > p {
    padding: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .presentation {
    flex-direction: column;
    padding: 1rem;
  }
}

.formations {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  .formation {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border: 3px solid $secondary-color-main;
    justify-content: space-evenly;
    background: $light-color;
    color: $primary-color-dark;
    gap: 1rem;
    width: 100%;
    height: 250px;

    > p {
      text-align: center;
    }

    a {
      color: $primary-color-main;
    }
  }

  @media (min-width: 768px) {
    .formation {
      width: 33%;
    }
  }
}
@media (max-width: 1024px) {
  .formations {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 768px) {
  .formations {
    flex-direction: column;
    align-items: center;
  }
}
</style>
