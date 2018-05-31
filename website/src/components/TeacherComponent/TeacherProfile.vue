<template>
    <div class="box" style=" ">
        <article class="media">
            <div class="media-content" >
                    <div class="content">
                    <!-- shows teacher img using the data in global -->
                    <img class="image" v-bind:src="this.$store.state.specific.tutor.Image_URL" alt="">
                    <br>
                    <!-- shows teacher name using the data in global -->
                    <h6 class="subtitle is-6">Teacher Name: {{this.$store.state.specific.tutor.FirstName}}  {{this.$store.state.specific.tutor.LastName}}</h6>
                    <!-- shows teacher qualification using the data in global -->
                    <h6 class="subtitle is-6">Qualification: {{this.$store.state.specific.tutor.Qualification}}</h6>
                    <!-- shows Instrument data in global -->
                    <h6 class="subtitle is-6">Instrument: 
                    <span class="tag is-info">{{this.$store.state.specific.tutor.Good_at}}</span>
                    </h6>
                </div>
            </div>
        </article>
    </div>
</template>
<script>

export default {
  
}
</script>
<style scoped>
.box{
    color:white;
}
.coursetitle{
    color:white;
}
</style>
