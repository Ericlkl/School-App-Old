<template>
  <div>
      <Navbar class="nav"/>

      <section id="banner" class="hero is-medium">
        <div class="hero-body">
          <div class="container">
             <h1 class="title is-1 has-text-centered" id="banner-title">Tutor</h1>
             <h4 class="subtitle is-4 has-text-centered" id="banner-title">Best Music Tutors in Brisbane</h4>
          </div>
        </div>
      </section>

      <br>
      <br>
      <div class="container">
        <div v-for = "n in num_of_tutors" >
            <div v-if = "n === 1 || (n - 1) % 3 === 0" class="columns">
                <div v-if="num_of_tutors - n >= 0" class="column is-4"> <TeacherCard :tutor="received.tutorList[n - 1]"/></div>
                <div v-if="num_of_tutors - n - 1 >= 0 " class="column is-4"> <TeacherCard :tutor="received.tutorList[n]"/></div>
                <div v-if="num_of_tutors - n - 2 >= 0 " class="column is-4"> <TeacherCard :tutor="received.tutorList[n + 1]"/></div>
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
import Connection from '../../services/Connection'

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
                this.received.tutorList = (await Connection.getTutorsInfo()).data
                // calculate how many teacher do we have
                this.num_of_tutors = this.received.tutorList.length
                console.log(this.received.tutorList)
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

#banner{
  background-image:url(https://www.forbesmusic.com/_images/img-piano-4.jpg);
  background-size: cover;
  background-position: center center;
}

#banner-title{
  color: white;
  background-color:rgba(128, 128, 128, 0.08);
}

</style>
