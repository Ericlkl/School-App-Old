<template>
  <div>
      <Navbar class="nav"/>

      <Footer/>
  </div>
</template>
<script>
import Footer from '../Footer'
import Navbar from '../Navbar'

export default {
    components:{
        Footer,
        Navbar
    }
  
}
</script>
<style scoped>

.tutor{
    background-size: 100%;
}

</style>
