<template>
  <v-card flat class="my-10">
    <v-row>
      <v-col cols="12" md="3" sm="12">
        <div class="image-container">
          <img src="https://randomuser.me/api/portraits/women/70.jpg" alt="">
        </div>
        <!-- <v-row align="center" justify="center" class="mx-4"> -->
        <!-- </v-row> -->
      </v-col>
      <v-spacer />
      <!-- <v-col class="pt-0" cols="12" md="8" sm="12">
        <v-expansion-panels class="d-flex d-sm-none">
          <v-expansion-panel>
            <v-expansion-panel-header>
              <div>
                <v-card-title class="text-center">
                  Professor William
                </v-card-title>
                <v-card-subtitle>Leader</v-card-subtitle>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card-text class="d-none d-sm-flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col> -->
      <v-col class="pt-0" cols="12" md="8" sm="12">
        <v-card-title class="text-center">
          Professor William
        </v-card-title>
        <v-card-subtitle>Leader</v-card-subtitle>
        <v-card-text class="d-none d-sm-flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
        <v-card-actions class="px-4">
          <v-btn outlined>Contact</v-btn>
          <v-spacer />
          <v-btn class="d-sm-none" text @click="show = !show">
            {{ show ? 'Less' : 'More' }}
            <v-icon right>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-expand-transition class="d-sm-none">
      <div v-show="show">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

.image-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  /* position: absolute; */
  /* top: 50%; */
  /* margin-top: -90px; */
  min-width:180px;
  min-height:180px;
  object-fit:cover;
  border-radius:50%;
  filter:grayscale(100%);
}
</style>
