<template>
  <a class="external" :href="href" target="_blank" rel="noopener noreferrer">
    <font-awesome-icon
      aria-hidden="true"
      :icon="['fas', 'arrow-up-right-from-square']"
      class="icon"
    />
    {{ content }}
  </a>
</template>

<script>
export default {
  props: ['href', 'content'],
}
</script>

<style lang="scss" scoped>
a.external {
  .icon {
    font-size: 1rem;
    width: 1rem;
  }
}
</style>
