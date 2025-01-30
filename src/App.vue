<template>
  <div id="app">
    <NavbarApp />
    <main>
      <router-view></router-view>
    </main>
    <FooterApp />
  </div>
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'
import FooterApp from './components/FooterApp.vue'

export default {
  name: 'App',
  components: {
    NavbarApp,
    FooterApp
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap');

#app {
  font-family: 'Markazi Text', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app::-webkit-scrollbar-track {
  background: white;
}
  
#app::-webkit-scrollbar-thumb {
  background-color: #4070F4;
  border-radius: 20px;
  border: 1px solid #4070F4;
}
</style>
