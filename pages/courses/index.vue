<template>
  <v-container>
    <v-row class="pb-4">
      <v-col cols="12" lg="4" md="6" sm="12">
        <!-- <div class="display-1">Our Courses</div> -->
        <h1 class="display-1">Đại học</h1>
      </v-col>
    </v-row>
    <course-cards :courses="getCourses" />
    <v-row class="pb-4">
      <v-col cols="12" lg="4" md="6" sm="12">
        <!-- <div class="display-1">Our Courses</div> -->
        <h1 class="display-1">Sau đại học</h1>
      </v-col>
    </v-row>
    <course-cards :courses="getCourses" />
    <v-row class="pb-4">
      <v-col cols="12" lg="4" md="6" sm="12">
        <!-- <div class="display-1">Our Courses</div> -->
        <h1 class="display-1">Đào tạo liên tục</h1>
      </v-col>
    </v-row>
    <course-cards :courses="getCourses" />
  </v-container>
</template>

<script>
import CourseCards from '@/components/CourseCards.vue'
export default {
  components: {
    CourseCards
  },
  computed: {
    getCourses () {
      return this.$store.getters['courses/getCourses']
    }
  }
}
</script>

<style>

</style>
