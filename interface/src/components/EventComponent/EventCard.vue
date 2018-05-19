<template>
<!-- Card1 -->
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img v-bind:src="event.Image_URL" alt="Placeholder image">
            </figure>
        </div>

    <div class="card-content">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">{{event.EventName}}</p>
                <p class="subtitle is-6">@{{event.Tag}}</p>
            </div>
        </div>

    <div class="content">
     {{event.Description}}...
        <a>@{{event.Place}}</a>
        <a href="#">#{{event.Instrument}}</a> <a href="#">#{{event.Company}}</a>
        <br>
        <time datetime="2016-1-1">{{event.Time}} - {{event.Date}}</time>
        </div>
    </div>
</div> <!--End Of Card-->

</template>

<script>
    export default {
        props: ['event'],
        watch: {
            event: function(value){
                this.event = value
            }
        }
    }
</script>
<style scoped>

</style>
