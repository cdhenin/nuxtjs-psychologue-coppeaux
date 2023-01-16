<template>
  <div class="flex-grow-vertical">
    <section id="bilan" class="flex-grow-vertical">
      <div class="container">
        <h1>Le bilan intellectuel et cognitif WISC-V</h1>
        <hr class="divider" />
        <div class="group">
          <span class="icon-wrapper">
            <font-awesome-icon
              :icon="['fas', 'users-viewfinder']"
              class="icon"
            />
          </span>

          <div class="description">
            <h2>Pour qui ?</h2>
            <p>
              La passation d’un bilan cognitif type WISC-V est indiqué pour les
              enfants et adolescents entre 6 et 16 ans. Il peut être demandé par
              un tiers (l’école, le médecin, l’orthophoniste, la MDPH, …) ou par
              les parents.
            </p>
          </div>
        </div>
        <div class="group">
          <span class="icon-wrapper">
            <font-awesome-icon :icon="['fas', 'bullseye']" class="icon" />
          </span>

          <div class="description">
            <h2>Dans quel but ?</h2>
            <p>
              Le WISC-V est une photographie du fonctionnement intellectuel et
              cognitif de votre enfant, à un instant T de son développement. Il
              peut aider à mettre en évidence certains troubles des
              apprentissages. Mais également de révéler une précocité ou une
              déficience intellectuelle.
            </p>
          </div>
        </div>
        <div class="group">
          <span class="icon-wrapper">
            <font-awesome-icon :icon="['fas', 'comments']" class="icon" />
          </span>

          <div class="description">
            <h2>Comment ?</h2>
            <p>Le bilan s’effectue en plusieurs étapes:</p>
            <ul>
              <li>
                un premier entretien d’une heure, en présence des parents et de
                l’enfant, afin de connaître son histoire et d’approfondir les
                motifs de cette demande
              </li>
              <li>
                la passation du test, répartie sur 1 ou 2 séances (en fonction
                de votre enfant)
              </li>
              <li>
                un entretien de restitution, permettant de vous expliquer les
                résultats et vous permettre de poser vos questions. Lors de cet
                entretien, un compte rendu écrit vous sera également remis.
              </li>
            </ul>
          </div>
        </div>
        <div class="group">
          <span class="icon-wrapper">
            <font-awesome-icon :icon="['fas', 'circle-info']" class="icon" />
          </span>

          <div class="description">
            <h2>Tarifs</h2>

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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BilanPsychologiquePage',
  head() {
    return {
      title:
        'Bilan psychologique - Amélie Coppeaux Psychologue clinicienne à Toulouse',
    }
  },
}
</script>

<style lang="scss" scoped>
.icon {
  min-width: 60px;
}

.icon-wrapper {
  border-right: 2px solid;
  padding: 2rem;
}

.group {
  display: flex;
  align-items: center;
  gap: 2rem;
}

@media (max-width: 768px) {
  .group {
    flex-direction: column;
  }
  .icon-wrapper {
    border-bottom: 2px solid;
    border-right: none;
  }
}

.description {
  padding: 2rem;
  margin-bottom: 2rem;
}
</style>
