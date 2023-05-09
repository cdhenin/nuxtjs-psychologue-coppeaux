<template>
  <div class="flex-grow-vertical">
    <section id="about" class="flex-grow-vertical">
      <div class="container mx-auto">
        <h1>Qui suis-je ?</h1>
        <hr class="divider" />
        <div class="presentation">
          <nuxt-img
            format="webp"
            alt="portrait amélie coppeaux psychologue"
            width="400"
            height="648"
            src="/img/amélie.jpg"
            sizes="sm:200px md:400px lg:500px"
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
            <nuxt-img
              format="webp"
              alt="logo école Psychologues Praticiens Paris"
              src="/img/logo_EPP.png"
              height="75"
              width="166"
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
            <nuxt-img format="webp"
              alt="Logo AFTCC - Formation pratique aux TCC"
              src="~/img/logo_AFTCC.png"
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
            <nuxt-img
              format="webp"
              alt="Logo Asadis"
              src="/img/logo_asadis.png"
              height="50"
              width="176"
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
    width: 200px;
    height: auto;
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
