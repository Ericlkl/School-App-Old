<template>
    <div>
      <Navbar class="nav"/>
        <div class="main-content">
            <h1 class="title is-1 has-text-centered">Instrument List</h1>
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
                console.log(this.received.instrumentList)
            } catch (error){
                console.log(error)
            }
        }
    },
    watch : {
        received: function(val) {
            this.received = val
        }
    },
    mounted() {
        this.getInfo()
    }
  
}
</script>
<style scoped>

</style>
