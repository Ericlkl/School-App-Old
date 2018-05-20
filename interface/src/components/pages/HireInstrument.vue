<template>
    <div>
      <Navbar class="nav"/>
            <!-- Instrument Information Banner -->
            <section class="hero card is-small">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-4">
                                <img class="image is-Square" v-bind:src="this.$store.state.specific.instrument.Image_URL">
                            </div>
                            <div class="has-text-centered column is-8">
                                <h1 class="title is-2">{{this.$store.state.specific.instrument.InstrumentName}} </h1>
                                <h1 class="title is-2">Condition : {{this.$store.state.specific.instrument.Condition}} </h1>
                                <h1 class="title is-2">Cost : {{this.$store.state.specific.instrument.Cost}}  </h1>
                                <h1 class="title is-2">In Stock : {{this.$store.state.specific.instrument.InStock}}  </h1>
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
}

</style>
