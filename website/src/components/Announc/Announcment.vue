<template>
    <div class = "card">

        <img v-bind:src="img" >
        <div class="text">
            <h1 class="subtitle is-4">{{title}} </h1>
            <h4>{{location}}</h4>
            <h4>Time : {{time}}</h4>

            <p>Price: {{entry}} </p>   
        </div>

  </div>
</template>
<script>

export default {
    props:["img","title", "location","time", "entry"]
}
</script>
<style scoped>

.card{
    flex-basis: 350px;
    cursor: pointer;

    margin:20px;
    margin-top:40px;
    transition: 0.5s ease-in-out;
}

.text p{
    
    margin-top:10px;
}
.text{
    border-top:1px solid #dfe6e9;
    color:#4a4a4a;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    padding:10px;
    opacity:0.9;
    overflow: hidden;
}

</style>
