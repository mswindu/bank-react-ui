<template>
  <div id="App">
    <v-app id="inspire">
      <navigation-layout></navigation-layout>
      <content-layout></content-layout>
      <footer-layout></footer-layout>
    </v-app>
  </div>
</template>

<script>
  import NavigationLayout from './NavigationLayout.vue'
  import ContentLayout from './ContentLayout.vue'
  import FooterLayout from './FooterLayout.vue'

  export default { 
    components: {
      NavigationLayout,
      ContentLayout,
      FooterLayout
    }
  }
</script>
