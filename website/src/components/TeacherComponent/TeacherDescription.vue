<template>
<div class="box" style="">
    <article class="media">
        <div class="media-content">
                <div class="content">
                <!-- Background Information -->
                <h2 class="title is-2">Background Information</h2>
                <br>
                <p> {{this.$store.state.specific.tutor.Personal_Description}} </p>
                <!-- Skill Information -->
                <h2 class="title is-2">Skill Information</h2>
                <br>
                <p> {{this.$store.state.specific.tutor.Music_skill}}</p>

                <!-- Teaching Experience Information -->
                <h2 class="title is-2">Teaching Experience</h2>
                <br>
                <p> {{this.$store.state.specific.tutor.Teachering_Experience}}</p>

                <!-- Language Information -->
                <h2 class="title is-2">Language</h2>
                <br>
                <p> {{this.$store.state.specific.tutor.Language_skill}}</p>

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

</style>
