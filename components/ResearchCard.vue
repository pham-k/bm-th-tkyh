<template>
  <v-card>
    <v-img src="https://helicobacter.vn/wp-content/uploads/2019/09/Screen-Shot-2019-09-12-at-09.33.35.png" height="200px" />

    <v-card-title>
      Helicobacter pylori
    </v-card-title>

    <v-card-subtitle>
      Thông tin khoa học về nhiễm Helicobacter pylori
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        class="d-none d-sm-flex"
        color="primary"
        text
        href="https://helicobacter.vn/"
        target="_blank"
      >
        Trang chủ
      </v-btn>
      <v-btn
        class="d-none d-sm-flex"
        color="primary"
        text
        nuxt
        to="/people"
      >
        Liên hệ
      </v-btn>

      <v-btn
        class="d-sm-none mx-0"
        small
        color="primary"
        text
        href="https://helicobacter.vn/"
        target="_blank"
      >
        Trang chủ
      </v-btn>
      <v-btn
        class="d-sm-none mx-0"
        small
        color="primary"
        text
        nuxt
        to="/people"
      >
        Liên hệ
      </v-btn>
      <v-spacer />
      <!-- <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn> -->
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider />

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
          sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you
          add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
}
</script>

<style>

</style>
