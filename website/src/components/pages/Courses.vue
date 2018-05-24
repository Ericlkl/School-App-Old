<template>
  <div>
      <Navbar/>
      
      <section id="banner" class="hero is-medium is-light is-bold">
        <div class="hero-body">
          <div class="container">
             <h1 class="title is-1 has-text-centered" id="banner-title">Courses</h1>
             <h4 class="subtitle is-4 has-text-centered" id="banner-title">Join the best music lessons</h4>
          </div>
        </div>
      </section>
      <div class="main-content">
          <div class="flex-cards">
                 <CourseCard v-for = "x in num_of_Event" :event="received.courseList[x-1]" />
          </div>     
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '../Footer'
import Navbar from '../Navbar'
import CourseCard from '../CourseComponent/CourseCard'
import Connection from '../../services/Connection'

export default {
    components:{
        Footer,
        Navbar,
        CourseCard
    },
    data() {
      return {
        received: {},
        num_of_Event: 0
      }
    },
    methods: {
      async getInfo() {
          try {
            this.received.courseList = (await Connection.getCoursesInfo() ).data
            this.num_of_Event = this.received.courseList.length
            console.log(this.received.courseList)
          } catch(error){
            console.log(error)
          }
      }
    },
    watch : {
      received: function(val){
        this.received = val
      }
    },
    mounted() {
      this.getInfo()
    }

}
</script>
<style scoped>
#banner{
  background-image:url(https://cdn.pixabay.com/photo/2015/09/22/15/24/music-951844__340.jpg);
  background-size: cover;
  background-position: center center;
}

#banner-title{
  color:whitesmoke;
}

h1{
    text-align: center;
}
.main-content{
    max-width: 1024px;
    margin: 0 auto;
    
}

.flex-cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}
.card{
    flex-basis: 200px;
    cursor: pointer;

    margin:20px;
    margin-top:40px;
    transition: 0.5s ease-in-out;
}
.text{
    border-top:1px solid #dfe6e9;
    padding-top:20px;

    display:flex;
    flex-direction: column;
    justify-content: space-around;
    padding:20px;
    opacity:0.9;
    overflow: hidden;
}
.text p{
    
    margin-top:10px;
}
.card:hover{
   opacity:0.9;
   box-shadow:         1px 1px 3px 5px #ccc;  
}

</style>
