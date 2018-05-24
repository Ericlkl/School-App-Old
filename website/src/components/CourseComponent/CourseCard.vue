<template>
    <div class = "card">
        <router-link :to = "{name: 'specific'}">
        <img v-bind:src="event.Image_URL">
        <div class="text">
            <h4 class='subtitle is-5'>{{event.CourseName}}</h4>
            <h4>Price : {{event.TutionFee}}</h4>
            <h4>Period : {{event.Period}}</h4>
            <h4>Time : {{event.Day}} {{event.Time}}</h4>
            <h4>Student: {{event.NumbersOfStudent}}</h4>
            <p>By {{event.Teacher}}</p>   
        </div>
    </router-link>
  </div>
</template>
<script>

export default {
  props: ['event'],
  watch : {
        event: function(val) {
            this.tutor = val
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
    
    margin-top:10px;
}
.card:hover{
   opacity:0.9;
   box-shadow:         1px 1px 3px 5px #ccc;  
}

</style>
