<template>
  <v-card flat>
    <v-card-title>
      <h2 class="headline">{{ course.courseTitle }}</h2>
    </v-card-title>
    <v-card-text>
      <v-chip v-for="(tag, index) in course.tags" :key="index" class="mx-1" color="primary">
        {{ tag }}
      </v-chip>
    </v-card-text>
    <div class="px-4">
      <h3 class="title mt-4">Giảng viên hướng dẫn</h3>
      <ul>
        <li v-for="(ins, index) in course.instructors" :key="index" class="body-1">{{ ins }}</li>
      </ul>
      <h3 class="title mt-4">Mã số</h3>
      <p class="body-1">{{ course.id }}</p>
      <h3 class="title mt-4">Trình độ</h3>
      <p class="body-1">{{ course.level }}</p>
      <h3 class="title mt-4">Giới thiệu</h3>
      <p class="body-1">{{ course.courseShortDescription }}</p>
      <h3 class="title mt-4">Mục tiêu</h3>
      <ul>
        <li class="body-1" v-for="(goal, index) in course.goals" :key="index">{{ goal }}</li>
      </ul>
      <h3 class="title mt-4">Chuẩn đầu ra</h3>
      <ul>
        <li class="body-1" v-for="(output, index) in course.courseOutputs" :key="index">{{ output }}</li>
      </ul>
      <h3 class="title mt-4">Giáo trình</h3>
      <ul>
        <li class="body-1" v-for="(textbook, index) in course.textbooks" :key="index">{{ textbook }}</li>
      </ul>
      <h3 class="title mt-4">Phương thức tính điểm</h3>
      <p class="body-1">YTCC3.01234</p>
      <h3 class="title mt-4">Lịch học</h3>
      <a href="">Link</a>
      <h3 class="title mt-4">Bài tập</h3>
      <ul>
        <li class="body-1">
          <a href="http://">Link</a>
        </li>
        <li class="body-1">
          <a href="http://">Link</a>
        </li>
        <li class="body-1">
          <a href="http://">Link</a>
        </li>
      </ul>
      <h3 class="title mt-4">Lecture notes</h3>
      <ul>
        <li class="body-1">
          <a href="http://">Link</a>
        </li>
        <li class="body-1">
          <a href="http://">Link</a>
        </li>
        <li class="body-1">
          <a href="http://">Link</a>
        </li>
      </ul>
    </div>
    <v-card-actions class="px-4">
      <v-spacer />
      <v-btn color="primary" :disabled="course.disabledEnroll">
        Enroll
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default: null,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
