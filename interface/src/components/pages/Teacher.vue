<template>
  <div>
      <Navbar class="nav" />
      <div class="container">
          <div class="columns">
              <div class="column is-4">
                  <TeacherProfile/>
              </div>
              <div class="column is-8">
                  <TeacherDescription/>
              </div>
          </div>
      </div>
      <Footer/>
  </div>
</template>
<script>

import Footer from '../Footer'
import Navbar from '../Navbar'
import TeacherDescription from '../TeacherComponent/TeacherDescription.vue'
import TeacherProfile from '../TeacherComponent/TeacherProfile.vue'
export default {
    components:{
        Footer,
        Navbar,
        TeacherProfile,
        TeacherDescription
    }
  
}
</script>
<style scoped>

</style>
