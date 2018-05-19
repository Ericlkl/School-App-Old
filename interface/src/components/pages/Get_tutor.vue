<template>
  <div>
      <Navbar class="nav"/>
      <div class="container">
          
        <!-- correct Answer -->
        <div v-for = "n in num_of_tutors" >
            <div v-if = "n === 1 || (n - 1) % 3 === 0" class="columns">
                <div v-if="num_of_tutors - n >= 0" class="column is-4"> <TeacherCard :tutor="received.tutorList[n]"/></div>
                <div v-if="num_of_tutors - n - 1 >= 0 " class="column is-4"> <TeacherCard :tutor="received.tutorList[n - 1]"/></div>
                <div v-if="num_of_tutors - n - 2 >= 0 " class="column is-4"> <TeacherCard :tutor="received.tutorList[n - 2]"/></div>
            </div>
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
                // get the teacher information from Teacher Table
                this.received.tutorList = (await Application.getTutorsInfo()).data
                // calculate how many teacher do we have
                this.num_of_tutors = this.received.tutorList.length
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
