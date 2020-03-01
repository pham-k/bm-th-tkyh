<template>
  <v-row class="pb-4">
    <v-col
      v-for="(course, index) in courses"
      :key="index"
      cols="12"
      lg="4"
      md="6"
      sm="12"
    >
      <course-card :course="course" />
    </v-col>
    <!-- <v-col cols="12" lg="4" md="6" sm="12">
      <course-card />
    </v-col>
    <v-col cols="12" lg="4" md="6" sm="12">
      <course-card />
    </v-col> -->
  </v-row>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue'
export default {
  components: {
    CourseCard
  },
  props: {
    courses: {
      type: Array,
      default: null
    }
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
