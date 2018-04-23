<template>
  <div>
      <Navbar></Navbar>
      <div class="main-content">
          
   
    <div class="each img-sup" id="benefits">
      <div class="after_image  row">

        <div class="section">
          <h2 class="subtitle is-1">Get music lessons &mdash; the support that is needed</h2>
          <p class="subtitle is-4">
           Learn how to play varius instruments across the world
          </p>
        </div>

        <div class="vectors">

          <div class="column-flex">
            <div class="img">
              <img src="https://thumbs.dreamstime.com/b/cartoon-penguin-eating-fish-flat-vector-isolated-white-background-illustration-81262287.jpg">
            </div>
            <div class="text-img">
              <h3 class="subtitle is-4 fix-weight">Join community</h3>
              <p class="subtitle is-5">
                Meet like minded people and make friends to help you with your studies. Discuss the topics that need more explanation and
                collaborate with others.
              </p>


            </div>

          </div>












          <div class="column-flex">

            <div class="text-img">
              <h3 class="subtitle is-4 fix-weight">Quick access</h3>
              <p class="subtitle is-5">
                You can quickly access  You can quickly accesst You can quickly accessan help  You can quickly accesst  You can quickly access  You can quickly access
              </p>

            </div>
            <div class="img">
              <img src="https://thumbs.dreamstime.com/b/penguin-vector-silhouette-8109184.jpg">
            </div>

          </div>

          <div class="column-flex">
            <div class="img">
              <img src="https://thumbs.dreamstime.com/b/baby-penguin-vector-cute-illustration-flat-white-background-77507515.jpg">
            </div>
            <div class="text-img">
              <h3 class="subtitle is-4 fix-weight">Personal assistance</h3>
              <p class="subtitle is-5">
                Get your personal tutor Get your personal tutor  you with your Get your personal tutor es. OGet your personal tutor  Get your personal tutor .
              </p>

            </div>


          </div>


          <div class="column-flex mar">

            <div class="text-img">
              <h3 class="subtitle is-4 fix-weight">Get in class</h3>
              <p class="subtitle is-5">
                Create an article and Create an article Create an article and Create an article and Create an article and Create an article and Create an article and.
              </p>

            </div>
            <div class="img">
              <img src="https://cdn.tutsplus.com/vector/uploads/legacy/freebies/vector_illustrations/023_penguin/penguin-600.jpg">
            </div>

          </div>




        </div>

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

.main-content{
    margin-top:-60px;
   
   
}





  .h1_title {
    font-weight: 100
  }


  /* THE FIRST PINGUIN SECTION  */

  .img {
    width: 400px;
    width: 300px;
  }


  .fix-weight {
    font-weight: 400;
    color: rgba(52, 152, 219, 1.0);
  }

  .section {
    margin-bottom: 35px;
  }

  .each {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 80px;
  }

  .vecotrs {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .column-flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .text-img {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
    line-height: 10px;
    padding:30px;
  }
  /* THE FIRST PINGUIN SECTION  FINISHED*/
  /* HOW IT WORKS SECTION  */

  /* HOW IT WORKS SECTION FINISHED*/

  h2::after {
    display: block;
    height: 2px;
    background-color: rgba(52, 152, 219, 1.0);
    ;
    content: " ";
    width: 15rem;
    margin: 0 auto;
    margin-top: 30px;
  }

  .fix::after {
    display: block;
    height: 2px;
    background-color: rgba(52, 152, 219, 1.0);
    ;
    content: " ";
    width: 15rem;
    margin: 0 auto;
    margin-top: 30px;
  }




</style>
