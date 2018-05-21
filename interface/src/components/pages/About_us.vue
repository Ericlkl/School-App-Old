<template>
  <div>
      <Navbar class="nav"></Navbar>
      <div class="main-content">
          <div class="flex-img-txt">
                  <img src="http://www.collegedegreesearch.net/wp-content/uploads/2015/03/southflorida.jpg">
                <div class="text"><h1 class="title is-4"> Music school</h1>
                   
                   <p> 
                   Pinelands Music School has been providing music lessons to children of all ages within the metropolitan Brisbane area. First established in 2014, the school has been slowly expanding and broadening, allowing prospective and current musicians alike to further learn and enhance their musical ability. From the guitar to the flute, drums to the double bass, trombones and even vocals, Pinelands Music School has lessons for everyone, regardless of skill level!
                   </p>
              </div>
          </div>
          <div class="flex-img">
        </div>

      </div>
      <Footer></Footer>
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
.nav{
    margin-top:00px;
}

.main-content{
    max-width: 1024px;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    
}

.flex-img-txt{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
    
}
.text{
    padding:30px;
   flex: 1 1 300px;
   text-align: center;
}
.flex-img-txt img{
  width:60%;
   
}

</style>
