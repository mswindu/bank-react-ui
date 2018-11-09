<template>
  <v-toolbar
    color="primary"
    dark
    fixed
    height="64"
    extension-height="48"
    app
  >
    <v-toolbar-title class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="handleDrawerToggle" />
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      handleDrawerToggle () {
        window.getApp.$emit('APP_DRAWER_TOGGLED')
      }
    }
  }
</script>

<style>

</style>
