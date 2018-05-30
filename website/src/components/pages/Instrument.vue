<template>
    <div>
      <Navbar class="nav"/>
        <section id="banner" class="hero is-medium">
            <div class="hero-body">
            <div class="container">
                <h1 class="title is-1 has-text-centered" id="banner-title">Instrument</h1>
                <h4 class="subtitle is-4 has-text-centered" id="banner-title">Hire Instrument to practice your skill</h4>
            </div>
            </div>
        </section>

      <br>
      <br>
        <div class="main-content">
            <div class="container">
            <div v-for = "n in num_of_instruments" >
                <div v-if = "n === 1 || (n - 1) % 3 === 0" class="columns">
                    <div v-if="num_of_instruments - n >= 0" class="column is-4"><InstrumentCard :instrument="received.instrumentList[n-1]"/> </div>
                    <div v-if="num_of_instruments - n - 1 >= 0 " class="column is-4"><InstrumentCard :instrument="received.instrumentList[n]"/></div>
                    <div v-if="num_of_instruments - n - 2 >= 0 " class="column is-4"><InstrumentCard :instrument="received.instrumentList[n+1]"/></div>
                </div>
                <br>
            </div>

            </div> <!-- End of container tag-->
        </div>
      <Footer/>
    </div>
</template>
<script>

import Footer from '../Footer'
import Navbar from '../Navbar'
import InstrumentCard from '../InstrumentComponent/InstrumentCard'
import Connection from '../../services/Connection'

export default {
    components:{
        Footer,
        Navbar,
        InstrumentCard
    },
    data() {
        return {
            received: {},
            num_of_instruments : 0
        }
    },
    methods : {
        async getInfo() {
            try {
                // get the instrument information from instruments Table
                this.received.instrumentList = (await Connection.getInstrumentsInfo()).data
                // calculate how many instrument do we have
                this.num_of_instruments = this.received.instrumentList.length
                return "Connection Success"
            } catch (error){
                return "Connection Fail"
            }
        }
    },
    mounted() {
        this.getInfo()
    }
  
}
</script>
<style scoped>
#banner{
  background-image:url(https://images2.alphacoders.com/749/thumb-1920-749444.png);
  background-size: cover;
  background-position: center center;
}

#banner-title{
  color:white;
  background-color: rgba(5, 0, 0, 0.10);
}

</style>
