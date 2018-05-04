<template>
  <div>
   

  <!-- Hero header: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar is-info">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
         <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <!--
    Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!--
    Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <router-link class="navbar-item col" :to = "{name: 'Courses'}"> Courses </router-link>
          <router-link class="navbar-item col" :to = "{name: 'events'}"> Events </router-link>
         <router-link class="navbar-item col" :to = "{name: 'About'}"> About us </router-link>
          <router-link class="navbar-item col" :to = "{name: 'Become'}"> Become a tutor </router-link>
          <router-link class="navbar-item col" :to = "{name: 'getTutor'}"> Get a tutor </router-link>

           <a class="navbar-item col" href="/blog">
            Login
          </a>
        </div>
      </div>
    </nav>
  </div>



  </div>
</template>
<script>


export default {
    data(){
        return{
            showNav: false
        }
    }
  
}
</script>
<style scoped>
.navbar{
  margin-bottom:50px;
  height:100px;
}
.is-info{

 
 
  background: linear-gradient(to right, #00d2ff, #167df0); 
}
</style>
