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
      <div class="columns">
        <div class="column is-6"><button class="button is-info is-focused is-outlined is-fullwidth" @click="goToTeacherProfile" >More... </button></div>
        <div class="column is-6"><button class="button is-dark is-outlined is-fullwidth" @click="goToTeacherProfile" >Join Course</button></div>
      </div>

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
  },
  methods: {
    goToTeacherProfile() {
      // pass the tutor object Using Vuex to store the data in global
      this.$store.state.specific.tutor = this.tutor
      // Then go to teacherProfile page
      console.log("Success")
      console.log(this.$store.state.specific.tutor)
      this.$router.push('teacherProfile')
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
