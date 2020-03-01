<template>
  <!-- 1 card col 8, 1 card col 4 -->
  <v-row class="pb-4">
    <v-col cols="12" md="8">
      <research-card />
    </v-col>
    <v-col cols="12" md="4">
      <research-card />
    </v-col>
  </v-row>

  <!-- 2 collumn text with background image -->
  <!-- find suitable background image -->
  <!--
    <div class="module">
      <v-row class="pb-4 module-inside">
        <v-col cols="12" xs="12" md="6">
          <h2 class="pb-4">Helicobacter VN</h2>
          <p>Goal: Do something ad asdquw asdh sdl asdhqwid asd dsaiuw giu sadinc</p>
          <p>Goal: Do something ad asdquw asdh sdl asdhqwid asd dsaiuw giu sadinc</p>
          <p>Goal: Do something ad asdquw asdh sdl asdhqwid asd dsaiuw giu sadinc</p>
          <p>Goal: Do something ad asdquw asdh sdl asdhqwid asd dsaiuw giu sadinc</p>
        </v-col>
        <v-col cols="12" xs="12" md="6">
          <p>Lorem ipsum</p>
          <ul>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
          </ul>
        </v-col>
      </v-row>
    </div>
  -->
</template>

<script>
import ResearchCard from '@/components/ResearchCard.vue'
export default {
  components: {
    ResearchCard
  }
}

</script>

<style scoped>
  h2 {
    text-align: center;
  }
  .foo1 {
    background: plum;
  }

  .foo2 {
    background: blueviolet;
  }

  .foo3 {
    background: yellowgreen;
  }

  /* .module {
  position: relative;
  }
  .module::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: url('https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/stomach-and-gut/h-pylori-teaser.ashx');
    background-repeat: no;
    background-size: cover;
    filter: grayscale(100%);
    opacity: 0.1;
  }
  .module-inside {
    This will make it stack on top of the ::before
    position: relative;
  } */
</style>
