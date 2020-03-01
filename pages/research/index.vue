<template>
  <v-container>
    <v-row class="pb-4">
      <v-col cols="12" lg="4" md="6" sm="12">
        <!-- <div class="display-1">Our Courses</div> -->
        <h1 class="display-1">Research</h1>
      </v-col>
    </v-row>
    <research-cards />
  </v-container>
</template>

<script>
import ResearchCards from '@/components/ResearchCards.vue'
export default {
  components: {
    ResearchCards
  }
}
</script>

<style>

</style>
