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
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Contact</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
      drawer: false   
    }),
    created () {
      window.getApp.$on('APP_DRAWER_TOGGLED', () => {
        this.drawer = (!this.drawer);
      });
    }
  }
</script>

<style>

</style>
