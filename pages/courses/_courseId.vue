<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <course :course="getCoursesById" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Course from '@/components/Course.vue'
export default {
  components: {
    Course
  },
  computed: {
    getCoursesById () {
      return this.$store.getters['courses/getCoursesById'](this.$route.params.courseId)
    }
  }
}
</script>

<style>

</style>
