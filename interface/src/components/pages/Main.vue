<template>
  <div>
      <Navbar></Navbar>
      <div class="main-content">
           <div class="main_image">
      <Nav></Nav>
      <div class="text">
        <h1 class="subtitle is-3">Learn more. Achieve more.<br></h1>
        <hr class="line">
        <h3 class="subtitle is-5" style="color:#fff">Get the best music lessons </h3>
      </div>



    </div>
   
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
        <h1 class="subtitle is-1" style="margin-top:20px;">Announcments</h1>
        <div class='flex-an'>
            <Announce title="Group music lesson" location="At Pinelands musicschool"
                      img="https://images.collegexpress.com/blog/college-kids.jpg" 
                      entry="Free" time="6-30pm" ></Announce>
            <Announce title="Support session" location="At Pinelands musicschool"
                      img="https://cdn.hpm.io/wp-content/uploads/2018/05/10230537/HISD-May-10-2018-Meeting-1000x750.jpg" 
                      entry="Free" time="6-00pm"></Announce>
            <Announce title="Guest speaker" location="At Pinelands musicschool"
                      img="http://www.ptcrecruiting.com/wp-content/uploads/2015/07/The-Experion-Group-Luncheon-Guest-Speaker.jpg" 
                      entry="10$" time="8-00pm"></Announce>
            <Announce title="New teachers" location="At Pinelands musicschool"
                      img="https://s-i.huffpost.com/gen/1927275/images/o-TEACHER-COLLABORATION-facebook.jpg" 
                      entry="Free" time="2-00pm"></Announce>

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
import Announce from '../Announc/Announcment'

export default {
    components:{
        Footer,
        Navbar, 
        Announce
    }
  
}
</script>
<style scoped>
.flex-an{
  display:flex;
  justify-content: center;
  flex-wrap:wrap;
}

  .text h1 {
    color: rgba(236, 240, 241, 1.0);
    font-weight: 400 !important;
    font-size: 160%;
  }
    .line {
    width: 30%;
    margin: 0 auto;
    height: 2px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: rgba(236, 240, 241, 1.0);
  }


  .text {
    text-align: center;
    position: relative;
    float: left;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-spacing: 5px;
    
  }

  .main_image {
   background: #00d2ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #00d2ff, #167df0); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #00d2ff, #167df0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* Chrome 10-25, Safari 5.1-6 */
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: cover;
    background-position: center;
    height: 100vh;

    background-attachment: fixed;
    display: grid;
    grid-template-columns: repeat(12);
  }



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
