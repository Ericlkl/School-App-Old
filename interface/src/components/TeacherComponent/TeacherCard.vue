<template>
<div class="card">
    <!-- Card Header -->
    <header class="card-header">
        <p id="name" class="card-header-title">Glennys Looker</p>
    </header>

    <!-- Teacher Profile Image -->
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://segundadivisionweb.files.wordpress.com/2017/04/profesor-de-musica.jpg" alt="Placeholder image">
    </figure>
  </div>

    <!-- Teacher Facebook and their Ability -->
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p id="instrument" class="title is-4">Piano Master</p>
        <p id="facebook" class="subtitle is-6">Facebook Account</p>
      </div>
    </div>
    
    <!-- Teacher Facebook and their Ability -->
    <div class="content">
    I am a pianist and composer who has taught people of all ages and levels, including absolute
beginners, adult students, and taking students through AMEB or VCE exams.
      <br>
    </div>

    <!-- Card Footer -->
    <footer class="card-footer">
    <router-link class="card-footer-item" :to = "{name: 'teacherProfile'}">More... </router-link>
    <router-link class="card-footer-item" :to = "{name: 'Courses'}">Join Lesson</router-link>
  </footer>

  </div>
</div>
</template>
<script>

export default {
  
}
</script>
<style scoped>
#facebook{
    color:cadetblue;
}
#instrument{
    color:darkgoldenrod;
}
#name{
    color: gray;
}
</style>
