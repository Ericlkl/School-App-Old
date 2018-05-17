<template>
  <div>
      <Navbar></Navbar>
      
      <div class="main-content">
         <h1 class="subtitle is-1">Choose the courses you like</h1>
          <div class="flex-cards">
        
          <div class = "card">
            <router-link :to = "{name: 'specific'}">
                <img src="https://cdn.shopify.com/s/files/1/1710/1447/products/Violin9.jpeg?v=1521557750">
                <div class="text">
                    <h4>Learn how to play on Violin</h4>
                    <p>By John Smith</p>
                    
                </div>
            </router-link>
          </div>


          <div class = "card">
            <router-link :to = "{name: 'specific'}">
                <img src="https://cdn.shopify.com/s/files/1/1710/1447/products/Violin9.jpeg?v=1521557750">
                <div class="text">
                    <h4>Learn how to play on Violin</h4>
                    <p>By John Smith</p>    
                </div>
            </router-link>
          </div>
        
        <div class = "card">
            <router-link :to = "{name: 'specific'}">
                <img src="https://cdn.shopify.com/s/files/1/1710/1447/products/Violin9.jpeg?v=1521557750">
                <div class="text">
                    <h4>Learn how to play on Violin</h4>
                    <p>By John Smith</p>
                </div>
            </router-link>
          </div>

        <div class = "card">
            <router-link :to = "{name: 'specific'}">
                <img src="https://cdn.shopify.com/s/files/1/1710/1447/products/Violin9.jpeg?v=1521557750">
                <div class="text">
                    <h4>Learn how to play on Violin</h4>
                    <p>By John Smith</p>
                </div>
            </router-link>
          </div>

        <div class = "card">
            <router-link :to = "{name: 'specific'}">
                <img src="https://cdn.shopify.com/s/files/1/1710/1447/products/Violin9.jpeg?v=1521557750">
                <div class="text">
                    <h4>Learn how to play on Violin</h4>
                    <p>By John Smith</p>
                    
                </div>
            </router-link>
          </div>

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
*{
  font-weight:300 !important;
}
h1{
    text-align: center;
}
.main-content{
    max-width: 1024px;
    margin: 0 auto;
    
}

.flex-cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}
.card{
    flex-basis: 200px;
    cursor: pointer;

    margin:20px;
    margin-top:40px;
    transition: 0.5s ease-in-out;
}
.text{
    border-top:1px solid #dfe6e9;
    padding-top:20px;

    display:flex;
    flex-direction: column;
    justify-content: space-around;
    padding:20px;
    opacity:0.9;
    overflow: hidden;
}
.text p{
    
    margin-top:10px;
}
.card:hover{
   opacity:0.9;
   box-shadow:         1px 1px 3px 5px #ccc;  
}

</style>
