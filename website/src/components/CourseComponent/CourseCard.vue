<template>
    <div @click="goCoursePage" class = "card">
        <img v-bind:src="course.Image_URL">
        <div class="text">
            <h4 class='subtitle is-5'>{{course.CourseName}}</h4>
            <h4>Price : {{course.TutionFee}}</h4>
            <h4>Period : {{course.Period}}</h4>
            <h4>Time : {{course.Day}} {{course.Time}}</h4>
            <h4>Student: {{course.NumbersOfStudent}}</h4>
            <p>By {{course.Teacher}}</p>   
        </div>
        </div>
</template>
<script>


export default {
  data(){
      return {
        inBrowser: true
      }
  },
  props: ['course'],
  methods: {
      goCoursePage: function(){
          if(this.inBrowser){
            this.$router.push('/course-specific')
          }
          return "In Course Specfic page"
      }
  }
}
</script>
<style scoped>
*{
    color:#4a4a4a;
}
.card{
    flex-basis: 200px;
    cursor: pointer;
    min-width:300px;
    min-height:400px;
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
    
    margin-top:11px;
}
.card:hover{
   opacity:0.9;
   box-shadow:         1px 1px 3px 5px #ccc;  
}

</style>
