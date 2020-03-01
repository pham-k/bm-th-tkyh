<template>
  <v-timeline class="" align-top dense>
    <v-timeline-item color="primary" small>
      <p class="headline">1989</p>
      <p class="caption">Founded</p>
    </v-timeline-item>
    <v-timeline-item color="green" small>
      <p class="headline">2019</p>
      <p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </v-timeline-item>
    <v-timeline-item color="grey" small>
      <p class="headline">2024</p>
      <p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '1960'
      },
      {
        color: 'green',
        year: '1970'
      },
      {
        color: 'pink',
        year: '1980'
      },
      {
        color: 'amber',
        year: '1990'
      },
      {
        color: 'orange',
        year: '2000'
      }
    ]
  })
}
</script>

<style>

</style>
