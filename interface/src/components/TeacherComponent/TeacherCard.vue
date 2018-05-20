<template>
<div class="card">
    <!-- Card Header -->
    <header class="card-header">
        <h1 id="name" class="card-header-title ">{{tutor.FirstName + " " + tutor.LastName}}</h1>
    </header>

    <!-- Teacher Profile Image -->
  <div class="card-image">
    <figure class="image is-4by3">
      <img v-bind:src="tutor.Image_URL" alt="Placeholder image">
    </figure>
  </div>

    <!-- Teacher Facebook and their Ability -->
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p id="instrument" class="title is-4">{{tutor.Good_at + " "+ tutor.Qualification }}</p>
        <p id="facebook" class="subtitle is-6">{{ tutor.Facebook_ID}}</p>
      </div>
    </div>
    
    <!-- Teacher Desciption-->
    <div class="content">
      {{tutor.Personal_Description}}
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
  props: ['tutor'],
  watch : {
        tutor: function(val) {
            this.tutor = val
        }
  }
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
