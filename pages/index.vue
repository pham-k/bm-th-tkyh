<template>
  <v-container>
    <!-- Courses Section -->
    <section class="mb-6">
      <v-row class="pb-4">
        <v-col cols="12" lg="4" md="6" sm="12">
          <!-- <div class="display-1">Our Courses</div> -->
          <h1 class="display-1">Giảng dạy</h1>
        </v-col>
        <v-spacer />
        <!-- <v-col cols="12" lg="4" md="6" sm="12" class="foo2" /> -->
        <v-col class="d-none d-sm-block" cols="12" lg="4" md="6" sm="12">
          <v-row class="pr-3">
            <v-spacer />
            <v-btn outlined nuxt to="/courses">Xem tất cả ({{ getCoursesQuantity }})</v-btn>
          </v-row>
        </v-col>
      </v-row>
      <course-cards :courses="getCoursesByFeatured" />
      <v-row class="pr-3 d-sm-none">
        <v-spacer />
        <v-btn outlined nuxt to="/courses">Xem tất cả ({{ getCoursesQuantity }})</v-btn>
      </v-row>
    </section>
    <!-- Research Section -->
    <section>
      <v-row class="pb-4">
        <v-col cols="12" lg="4" md="6" sm="12">
          <!-- <div class="display-1">Our Courses</div> -->
          <h1 class="display-1">Nghiên cứu</h1>
        </v-col>
        <v-spacer />
        <!-- <v-col cols="12" lg="4" md="6" sm="12" class="foo2" /> -->
        <v-col class="d-none d-sm-block" cols="12" lg="4" md="6" sm="12">
          <v-row class="pr-3">
            <v-spacer />
            <v-btn outlined nuxt to="/research">Xem thêm</v-btn>
          </v-row>
        </v-col>
      </v-row>
      <section-research />
      <v-row class="pr-3 d-sm-none">
        <v-spacer />
        <v-btn outlined nuxt to="/research">Xem thêm</v-btn>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import CourseCards from '@/components/CourseCards.vue'
import SectionResearch from '@/components/SectionResearch.vue'
export default {
  components: {
    CourseCards,
    SectionResearch
  },
  computed: {
    getCoursesByFeatured () {
      // console.log(this.$store.getters['courses/getCoursesByFeatured'])
      return this.$store.getters['courses/getCoursesByFeatured']
    },
    getCoursesQuantity () {
      return this.$store.getters['courses/getCoursesQuantity']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
