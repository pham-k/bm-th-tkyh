<template>
  <v-app id="inspire" light>
    <v-navigation-drawer v-model="drawer" app right>
      <v-list>
        <v-list-item @click="drawer = !drawer">
          <v-list-item-content>
            <div>
              <!-- <v-btn text> -->
              <v-icon>mdi-close</v-icon>
              <!-- </v-btn> -->
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt link to="/">
          <v-list-item-content>
            <v-list-item-title>Trang chủ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="(navLink, index) in navLinks" :key="index" nuxt link :to="navLink.path">
          <v-list-item-content>
            <v-list-item-title>{{ navLink.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="" fixed>
      <v-toolbar class="d-none d-sm-block" flat color="">
        <v-toolbar-title>
          <nuxt-link class="reset-link" to="/">BỘ MÔN TIN HỌC - THỐNG KÊ Y HỌC</nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items v-for="(navLink, index) in navLinks" :key="index" class="d-none d-md-block">
          <v-btn text nuxt link :to="navLink.path">{{ navLink.text }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-spacer class="d-md-none" />
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
    </v-app-bar>

    <v-content class="">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer id="plz">
      <v-container>
        <v-row>
          <v-col cols="12" md="2" />
          <v-col cols="12" md="6">
            <h3 class="mb-2">Bộ môn Tin học - Thống kê Y học</h3>
            <div>
              Phòng 201 Lầu 2 - Khu nhà A2
            </div>
            <div>
              02 Dương Quang Trung (86/2 Thành Thái), P.12, Q.10 TPHCM
            </div>
            <p> +84 028 38641515</p>
            <p> bmtkyhth@pnt.edu.vn</p>
          </v-col>

          <v-col cols="12" md="2" class="d-none d-md-block">
            <ul v-for="(navLink, index) in navLinks" :key="index" class="footer-list">
              <li class="mb-2">
                <nuxt-link :to="navLink.path">{{ navLink.text }}</nuxt-link>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    navLinks: [
      {
        text: 'Giới thiệu',
        path: '/about'
      },
      {
        text: 'Giảng dạy',
        path: '/courses'
      },
      {
        text: 'Nghiên cứu',
        path: '/research'
      },
      {
        text: 'Nhân sự',
        path: '/people'
      },
      {
        text: 'Liên hệ',
        path: '/contact'
      }
    ]
  }),
  computed: {
    getLoading () {
      // console.log('it worked', this.$store.getters.getLoading)
      return 'this.$store.getters.getLoading'
    }
  }
}
</script>

<style lang="scss">
  .primary-background {
    background-color: #EEEEEE
  }

  .reset-link {
    color: black;
    text-decoration: none;
    outline: none
  }

  .footer-list {
    list-style-type: none;
  }

  .footer-list a {
    color:black;
    text-decoration: none;
  }

  #inspire {
    background: white;
  }

  #plz {
    background: linear-gradient(#FFFFFF, #9FA8DA);
  }
</style>
