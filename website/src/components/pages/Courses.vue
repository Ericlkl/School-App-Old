<template>
  <div>
      <Navbar/>
      
      <div class="main-content">
         <h1 class="subtitle is-1">Choose the courses you like</h1>
          <div class="flex-cards">
                 <CourseCard v-for = "x in num_of_Event" :key="x.id" :event="received.courseList[x-1]" />
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
