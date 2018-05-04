<template>
  <div>
      <Navbar class="nav"></Navbar>



      <div class="main-content">
          <div class="content">
              <h1>Any Question?</h1>
              <p>We value your comments and feedback to help us 
                  improve and be better at what we do</p>
          <ContactForm></ContactForm>
          <br>
          <h1>Head Office</h1> 
          <h3>Address: 62 Pinelands Rd, Sunnybank Hills QLD 4109</h3>
          <h3>Phone Number :  (07) 3344 1880</h3>
          <h3>Email Address: Pineland_music@gmail.com</h3>
          </div>
      </div>
      <Footer></Footer>


  </div>
</template>
<script>

import Footer from '../Footer'
import Navbar from '../Navbar'
import ContactForm from '../ContactForm'
export default {
    components:{
        Footer,
        Navbar,
        ContactForm
    }
  
}
</script>
<style scoped>

</style>
