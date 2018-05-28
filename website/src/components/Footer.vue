<template>
  <div>

    <footer class="foot">
      <div class="containers">
        <div class="contents has-text-centered">
          <p class="log">Get the best music lessons today</p>
          <div class="flex-row">

            <div class="flex col-1">
              <h1 class="subtitle is-6"> Music school</h1>
              <ul>
                <li> Benefits</li>
                <li> How it works

                </li>
                
                <li >Pricing</li>

              </ul>
            </div>
            <div class="flex col-2">
              <h1 class="subtitle is-6"> Community</h1>
              <ul>
                <li>Blog</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div class="flex col-3">
              <h1 class="subtitle is-6"> Company</h1>
              <ul>
                <li @click="isOops = true">About us</li>
                <li @click="isOops = true">Contact us</li>
                <li >Privacy policy</li>

                <li >Terms of service</li>
              </ul>
            </div>

          </div>
          <p class="cop"> © 2018 Music school Inc. </p>
        </div>
      </div>
      
    </footer>
 <b-modal :active.sync="isOops" has-modal-card>
            <Oops class="form"></Oops>
</b-modal>

   
  </div>
</template>
<script>
import Oops from './Oops'
  export default {
    data(){
      return{
        isOops:false
      }
    },
    component:{
        Oops
    }

  }

</script>
<style lang="css" scoped>
  .foot {
    margin-top: 4rem;
    background-color: #272727;
    padding: 1rem;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 200px;
    justify-content: space-around;
    margin: 0 auto;
    width: 80%;
    margin-top: 4rem;
  }

  .flex-row ul li {
    list-style: none;
    margin: 0;
    padding: 10px;
    font-weight: 200 !important;
    cursor: pointer;
  }

  .flex {
    display: flex;
    margin-top: 2rem;
    margin-left: 5%;
    margin-right: 5%;
    flex-direction: column;
  }

  .flex-row h1 {
    color: #fff;
    font-weight: 200 !important;
  }

  .cop {
    margin-top: 4rem;
    font-weight: 200;
    font-size: 1rem;
  }

  .content ul {
    margin: 0px;
  }

  .log {
    color: #fff;
    font-weight: 200;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
ul li{
    transition: 1s ease-in-out;
}
ul li:hover{
    color:#fff;
}

</style>
