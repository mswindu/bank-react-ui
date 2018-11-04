<template>
  <div id="appRoot">
    <v-app id="inspire" class="app">
      <app-drawer class="app--drawer"></app-drawer>
      <app-toolbar class="app--toolbar"></app-toolbar>
      <v-content>
        <div class="page-wrapper">
          <router-view></router-view>
        </div>
        <v-footer height="auto" class="white pa-3 app--footer">
          <span class="caption">Design &copy; {{ new Date().getFullYear() }}</span>
          <v-spacer></v-spacer>
          <span class="caption mr-1"> Make With Love </span> <v-icon color="pink" small>favorite</v-icon>
        </v-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import AppDrawer from './components/AppDrawer.vue';
  import AppToolbar from './components/AppToolbar.vue';
  export default {
    components: {
      AppDrawer,
      AppToolbar,
    },
    created () {
      window.getApp = this;
    }
  }  
</script>

<style lang="stylus" scoped>
  .page-wrapper
    //min-height:calc(100vh - 64px - 50px - 81px );
    min-height:calc(100vh - 58px - 50px);
</style>