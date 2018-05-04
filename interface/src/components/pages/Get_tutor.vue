<template>
  <div>
      <Navbar class="nav"></Navbar>
      <div class="main-content">
          
<section class="hero is-large">
  <div class="hero-body tutor" style="background-image: url(https://segundadivisionweb.files.wordpress.com/2017/04/profesor-de-musica.jpg);">
    <div class="container has-text-centered">
      <h1 class="title" style="color:black;">
        Glennys Looker
      </h1>
      <h2 class="subtitle" style='color:black'>
        Piano Master 
      </h2>
        <p style='color:black;'>I am a pianist and composer who has taught people of all ages and levels, including absolute
         beginners, adult students, and taking students through AMEB or VCE exams.</p>
         <br>
      <a class='button is-success is-outlined' href="">Join Lesson</a>
    </div>
  </div>
</section>

<br>

<section class="hero is-large">
  <div class="hero-body tutor" style="background-image: url(http://i.dailymail.co.uk/i/pix/2015/05/13/15/289CDAED00000578-3080044-image-a-58_1431529001990.jpg);">
    <div class="container has-text-centered">
      <h1 class="title" style="color:white;">
       ROGER WILLIAMS
      </h1>
      <h2 class="subtitle" style='color:white'>
        Violin Master
      </h2>
      <p style='color:white;'>I have 20 years of playing experience on the violin, and have been actively teaching violin, viola and piano to students across all ages and levels of experience for the past nine years. I hold my A.MusA Diploma on Violin, a Bachelor of...</p>
      <br>
      <a class='button is-success is-outlined' href="">Join Lesson</a>
    </div>
  </div>
</section>


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

.tutor{
    background-size: 100%;
}

</style>
