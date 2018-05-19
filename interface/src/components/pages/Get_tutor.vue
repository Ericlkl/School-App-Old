<template>
  <div>
      <Navbar class="nav"/>
      <div class="container">
        <div class="columns">
            <!-- <div v-for= "index in num_of_tutors " >
                <h1>${{received.tutorList[index - 1]}}</h1>
            </div> -->
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
import Application from '../../services/Application'

export default {
    components:{
        Footer,
        Navbar,
        TeacherCard
    },
    data() {
        return {
            received: {},
            num_of_tutors : 0
        }
    },
    methods : {
        async getInfo() {
            try {
                this.received.tutorList = (await Application.getTutorsInfo()).data
                this.num_of_tutors = this.received.tutorList.length
                console.log(this.received.tutorList)
                console.log(this.num_of_tutors)
            } catch (error){
                console.log(error)
            }
        }
    },
    watch : {
        received: function(val) {
            this.received = val
        }
    },
    mounted() {
        this.getInfo()
    }
}
</script>
<style scoped>

.tutor{
    background-size: 100%;
}

</style>
