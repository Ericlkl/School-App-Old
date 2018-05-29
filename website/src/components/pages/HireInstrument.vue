<template>
    <div>
      <Navbar class="nav"/>
            <!-- Instrument Information Banner -->
            <section class="hero fix is-small">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-4">
                                <img class="image is-Square" v-bind:src="this.$store.state.specific.instrument.Image_URL">
                            </div>
                            <div class="has-text-centered column is-8">
                                <br>
                                <br>
                                <br>
                                <h1 class="subtitle is-4">{{this.$store.state.specific.instrument.InstrumentName}} </h1>
                                <h1 class="subtitle is-4">Condition : {{this.$store.state.specific.instrument.Status}} </h1>
                                <h1 class="subtitle is-4">Cost : ${{this.$store.state.specific.instrument.Cost}} p/m </h1>
                                <h1 class="subtitle is-4">In Stock : {{this.$store.state.specific.instrument.InStock}}  </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section> <!-- Hero Card End -->

            <HireInstrumentForm/>
      <Footer/>
    </div>
</template>
<script>

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
.card{
    background-color: aliceblue;
    border:1px solid white !important;
}

.fix{
    background-color:#ecf0f1;
    margin-top:-50px;
}
</style>
