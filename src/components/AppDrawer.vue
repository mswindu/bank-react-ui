<template>
  <v-navigation-drawer
    id="appDrawer"
    v-model="drawer"
    fixed
    app
    width="260"
  >
    <v-toolbar color="primary darken-1" dark>
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vue Material</span>
      </v-toolbar-title>
    </v-toolbar>
    <vue-perfect-scrollbar
      :settings="scrollSettings"
      class="drawer-menu--scroll"
    >
      <v-list
        dense
        expand
      >
        <template v-for="(item) in menus">
          <v-list-tile
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            :disabled="item.disabled"
            :target="item.target"
            :key="item.name"
            ripple="ripple"
            rel="noopener"
          >
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="item.subAction">
              <v-icon class="success--text">{{ item.subAction }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>

<script>
  import menu from '../api/menu.js'
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'

  export default {
    components: {
      VuePerfectScrollbar
    },
    data: () => ({
      drawer: false,
      menus: menu,
      scrollSettings: {
        maxScrollbarLength: 160
      }
    }),
    created () {
      window.getApp.$on('APP_DRAWER_TOGGLED', () => {
        this.drawer = (!this.drawer)
      })
    }
  }
</script>

<style>

</style>
