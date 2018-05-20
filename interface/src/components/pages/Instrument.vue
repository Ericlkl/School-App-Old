<template>
    <div>
      <Navbar class="nav"/>
        <div class="main-content">
            <div class="container">
                <div class="columns">
                    <div class="column is-1"></div>
                    <div class="column is-10">
                        <div class="columns">
                            <div class="column is-4"><InstrumentCard/></div>
                            <div class="column is-4"><InstrumentCard/></div>
                            <div class="column is-4"><InstrumentCard/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
</template>
<script>

import Footer from '../Footer'
import Navbar from '../Navbar'
import InstrumentCard from '../InstrumentComponent/InstrumentCard'

export default {
    components:{
        Footer,
        Navbar,
        InstrumentCard
    }
  
}
</script>
<style scoped>

</style>
