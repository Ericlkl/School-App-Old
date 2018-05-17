<template>
  <div>
      <Navbar class="nav"/>
      <div class="container">
        <div class="columns">
          <div class="column is-4"> <TeacherCard/></div>
          <div class="column is-4"> <TeacherCard/></div>
          <div class="column is-4"> <TeacherCard/></div>
        </div>
      </div>
      <Footer/>
  </div>
</template>
<script>
import Footer from '../Footer'
import Navbar from '../Navbar'
import TeacherCard from '../TeacherComponent/TeacherCard.vue'


export default {
    components:{
        Footer,
        Navbar,
        TeacherCard
    }
  
}
</script>
<style scoped>

.tutor{
    background-size: 100%;
}

</style>
