<template>
    <div>
    <!-- Show Nav bar on the top  -->
      <Navbar class="nav"/>
            <!-- Instrument Information Banner -->
            <section class="hero fix is-small">
                <!-- The body of the banner -->
                <div class="hero-body">
                    <div class="container">
                        <!-- Layout box -->
                        <div class="columns">
                            <!-- show Instrument Image on the right hand side of the card, which used 40% space of the card-->
                            <div class="column is-4">
                                <!-- Instrument Image, get the Image URL from the global storage Vuex -->
                                <img class="image is-Square" v-bind:src="this.$store.state.specific.instrument.Image_URL">
                            </div>
                            <!-- Instrument Information, which use 60% space of the card -->
                            <div class="has-text-centered column is-8">
                                <!-- Push the text a bit down from the top of the banner -->
                                <br v-for="x in 3" :key="x">
                                <!--  Instrument Name -->
                                <h1 class="subtitle is-4">{{this.$store.state.specific.instrument.InstrumentName}} </h1>
                                <!--  Instrument Condition -->
                                <h1 class="subtitle is-4">Condition : {{this.$store.state.specific.instrument.Status}} </h1>
                                <!--  Instrument Cost -->
                                <h1 class="subtitle is-4">Cost : ${{this.$store.state.specific.instrument.Cost}} p/m </h1>
                                <!-- How many Instrument In Stock -->
                                <h1 class="subtitle is-4">In Stock : {{this.$store.state.specific.instrument.InStock}}  </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section> <!-- Hero Card End -->

            <!-- Show Hire Instrument Form Component -->
            <HireInstrumentForm/>
        <!-- Show Footer -->
      <Footer/>
    </div>
</template>
<script>

/*
    Import Module, Import the UI Component to show it on the Page
        Footer : Footer at the bottom of the page
        Navbar : Navigation Bar on the Top of the page
        HireInstrumentForm: For user to enrol the course, they can fill it up to finish the student registation
*/
import Footer from '../Footer'
import Navbar from '../Navbar'
import HireInstrumentForm from '../InstrumentComponent/HireInstrumentForm'

export default {
    components:{
        Footer,
        Navbar,
        HireInstrumentForm
    },
}
</script>
<style scoped>
/* change the banner background color */
.card{
    background-color: aliceblue;
    border:1px solid white !important;
}
/* make it closer to the navbar */
.fix{
    background-color:#ecf0f1;
    margin-top:-50px;
}
</style>
