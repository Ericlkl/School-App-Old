<template>
  <div>
      <Navbar class="nav"/>
        <div class="main-content">
            <div class = "columns">
                <div class = "column is-2"></div>
                <div class="column is-8">
                    <ContactForm></ContactForm>
                </div>
            </div>

            <br>
            <div class="columns" >
                <div class="column is-1"></div>
                <div class="column is-4">
                    <h1 class="title">Head Office</h1> 
                    <h3>Address: 62 Pinelands Rd, Sunnybank Hills QLD 4109</h3>
                    <h3>Phone Number :  (07) 3344 1880</h3>
                    <h3>Email Address: Pineland_music@gmail.com</h3>
                </div>
                <div class=" column is-4">
                    <iframe width="600" height="450" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place?q=62%20Pinelands%20Rd%2C%20Sunnybank%20Hills%20QLD%204109&key=AIzaSyDeuLXT7qW8KbZFolJKZPRQzFyobZYmwsA" allowfullscreen></iframe>
                </div>
            </div>
            </div>
      <Footer/>
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
