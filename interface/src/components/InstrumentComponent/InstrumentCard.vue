<template>
    <div class="card">
        <div class="columns">
            <div class="column is-5">
                <div class="card-image is-fullwidth">
                        <img src="https://d1aeri3ty3izns.cloudfront.net/media/19/194914/1200/preview.jpg" alt="Placeholder image">
                </div>
            </div>

            <div class="column is-7">
                <div class="card-content content">
                    <h6 class="title">Instrument Name: </h6>
                    <h6 class="title">Condition : </h6>
                    <h6 class="subtitle">Cost :
                        <br>
                        InStock: 
                    </h6>
                </div> <!-- Card Content end -->
            </div> <!-- Column end -->
        </div> <!-- Columns end -->
        <div class="has-text-centered">
            <div class="columns">
                <div class="column is-3"></div>
                <div class="column is-6">
                    <router-link class="button is-fullwidth is-info is-rounded" :to = "{name: 'HireInstrument'}">Hire </router-link>
                </div>
            </div>
        </div>
    </div> <!-- Card end -->
</template>

<script>
    export default {

    }
</script>
<style scoped>

</style>
