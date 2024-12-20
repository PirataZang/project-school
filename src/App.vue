<template>
  <div id="app">
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },
};
</script>
