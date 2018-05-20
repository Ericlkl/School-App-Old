<template>
    <div class="card">
        <div class="columns">
            <div class="column is-5">
                <div class="card-image is-fullwidth">
                        <img v-bind:src="instrument.Image_URL" alt="Placeholder image">
                </div>
            </div>

            <div class="column is-7">
                <div class="card-content content">
                    <h6 class="title"><b>{{instrument.InstrumentName}}</b></h6>
                    <h6 class="title">Condition : {{instrument.Condition}} </h6>
                    <h6 class="subtitle">Cost : {{instrument.Cost}}
                        <br>
                        InStock: {{instrument.InStock}}
                    </h6>
                </div> <!-- Card Content end -->
            </div> <!-- Column end -->
        </div> <!-- Columns end -->
        <div class="has-text-centered">
            <div class="columns">
                <div class="column is-3"></div>
                <div class="column is-6">
                    <button class="button is-fullwidth is-info is-rounded" @click="goToHireInstrument" >Hire</button>
                </div>
            </div>
        </div>
    </div> <!-- Card end -->
</template>

<script>

    export default {
        props: ['instrument'],
        methods : {
            goToHireInstrument() {
                // pass the instrument object Using Vuex to store the data in global
                this.$store.state.specific.instrument = this.instrument
                // Then go to hire instrument page
                this.$router.push('hire_instrument')
            }
        },
        watch: {
            event: function(value){
                this.instrument = value
            }
        }
    }
</script>
<style scoped>

</style>
