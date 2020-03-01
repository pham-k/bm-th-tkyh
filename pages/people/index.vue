<template>
  <v-container>
    <v-row class="pb-4">
      <v-col cols="12" lg="4" md="6" sm="12">
        <!-- <div class="display-1">Our Courses</div> -->
        <h1 class="display-1">Nhân sự</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="10" sm="10" xs="12">
        <person />
        <person />
        <person />
        <person />
        <person />
      </v-col>
    </v-row>
    <v-row class="pb-4">
      <v-col cols="12" lg="4" md="6" sm="12">
        <!-- <div class="display-1">Our Courses</div> -->
        <h1 class="display-1">Nghiên cứu viên</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="10" sm="10" xs="12">
        <person />
        <person />
        <person />
        <person />
        <person />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Person from '@/components/Person.vue'
export default {
  components: {
    Person
  }
}
</script>

<style scoped>
.container .container--fluid {
  background: white;
}
</style>
