<template>
    <div>
      <Navbar class="nav"/>
            <!-- Instrument Information Banner -->
            <section class="hero card is-small">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-4">
                                <img class="image is-Square" src="https://d1aeri3ty3izns.cloudfront.net/media/19/194914/1200/preview.jpg">
                            </div>
                            <div class="has-text-centered column is-8">
                                <h1 class="title is-1">Instrument Name : </h1>
                                <h1 class="title is-2">Condition : </h1>
                                <h1 class="title is-2">Cost : </h1>
                                <h1 class="title is-2">In Stock : </h1>
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
    }
  
}
</script>
<style scoped>
.card{
    background-color: aliceblue;
}

</style>
