<template>
  <v-row class="pb-4">
    <v-col cols="12">
      <research-card />
    </v-col>
    <v-col cols="12">
      <research-card />
    </v-col>
    <v-col cols="12">
      <research-card />
    </v-col>
  </v-row>
</template>

<script>
import ResearchCard from '@/components/ResearchCard.vue'
export default {
  components: {
    ResearchCard
  }
}

</script>

<style scoped>
  .foo1 {
    background: plum;
  }

  .foo2 {
    background: blueviolet;
  }

  .foo3 {
    background: yellowgreen;
  }

</style>
