<template>
  <div>
      <Navbar class="nav"></Navbar>
      <div class="main-content">
          <div class="flex-img-txt">
                  <img src="http://cdn.playbuzz.com/cdn/7aa950b4-eaa0-417d-93af-3bd332dc8086/dec8c31c-3c84-4ae3-b8e1-ba6f1da345d1_560_420.jpg">
                <div class="text"><h1 class="title is-4"> Music school</h1>
                   <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
*{
  font-weight:300 !important;
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
