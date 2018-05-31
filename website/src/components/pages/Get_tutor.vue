<template>
  <div>
      <Navbar class="nav"/>

    <!-- Tutors banner -->
      <section id="banner" class="hero is-medium">
        <div class="hero-body">
          <div class="container">
              <!-- Banner Title -->
             <h1 class="title is-1 has-text-centered" id="banner-title">Tutor</h1>
             <!-- Banner subinformation -->
             <h4 class="subtitle is-4 has-text-centered" id="banner-title">Best Music Tutors in Brisbane</h4>
          </div>
        </div>
      </section>

      <br>
      <br>
      <!-- Tutors list -->
      <div class="container">
          <!-- Using for loop to loop over the tutors list -->
        <div v-for = "n in num_of_tutors" :key="n">
            <!-- should only print 3 tutor cards only in one single line -->
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

/*
    Import Module, Import the UI Component to show it on the Page
        Footer : Footer at the bottom of the page
        Navbar : Navigation Bar on the Top of the page
        TeacherCard: Displaying Teacher information in the Card Component 
        Connection : Javascipt file which build the connection method to communicate with database
*/
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
    // Data in this component
    data() {
        return {
            // The data object will receive the data from database
            received: {},
            // Numbers of tutor in the database, dafault it is 0
            num_of_tutors : 0
        }
    },
    // function for this component 
    methods : {
        // Get tutor information from the Database
        async getInfo() {
            try {
                // get the teacher information from Teacher Table
                this.received.tutorList = (await Connection.getTutorsInfo()).data
                // calculate how many teacher do we have
                this.num_of_tutors = this.received.tutorList.length
                // Return the msg if the connection is success
                return "Connection Success"
            } catch (error){
                // Return the msg if the connection is Fail
                return "Connection Fail"
            }
        }
    },
    // Trigger the getinfo function when user enter to this page
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
