<template>
    <div>
      <Navbar class="nav"/>
        <div class="main-content">
            <InstrumentCard/>
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
