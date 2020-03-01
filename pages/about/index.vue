<template>
  <v-container>
    <h1 class="mb-4 display-1">About us</h1>
    <p class="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <br>
    <timeline-department />
  </v-container>
</template>

<script>
import TimelineDepartment from '@/components/TimelineDepartment.vue'
export default {
  components: {
    TimelineDepartment
  }
}
</script>

<style>

</style>
