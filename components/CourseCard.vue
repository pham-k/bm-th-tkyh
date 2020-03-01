<template>
  <v-card class="pb-2" shaped hover nuxt :to="'/courses/' + course.id">
    <v-card-title>
      <!-- fix word break, word-break, word-wrap -->
      <h2 class="headline min-height-64">{{ course.courseTitle }}</h2>
    </v-card-title>
    <v-card-text>
      <v-chip v-for="(tag, index) in course.tags" :key="index" class="mx-1" color="primary">
        {{ tag }}
      </v-chip>
    </v-card-text>
    <v-card-text class="foo">
      <p class="body-1 foo-foo">
        {{ course.courseShortDescription }}
      </p>
    </v-card-text>
    <v-card-actions class="ml-2">
      <v-btn color="primary" :disabled="course.disabledEnroll">
        Đăng ký
      </v-btn>
      <v-spacer />
      <v-btn text color="primary">
        Tìm hiểu thêm
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default: null
    }
  }
}

</script>

<style scoped>
.foo {
  overflow: hidden;
  max-height: 120px; /* some fixed height that you need you content to fix to */
}

/* .foo-foo {
  overflow: hidden;
} */
/* .v-card {
  background-image: linear-gradient(to right, #A1FFCE, #FAFFD1)
} */

.min-height-64 {
  min-height: 64px;
}

</style>
