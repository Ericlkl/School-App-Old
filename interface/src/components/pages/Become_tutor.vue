<template>
<div>
    <Navbar></Navbar>
    <div class="main-content">
        <div class="flexbox">
            <h1 class="subtitle is-4" style="text-align:center;"> Complete the details below and start selling your courses with us</h1>
            <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>
         <b-field label="Lastname">
            <b-input v-model="name"></b-input>
        </b-field>
             <b-dropdown>
            <button class="button is-primary" slot="trigger">
                <span>Select your gender</span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item>Female</b-dropdown-item>
            <b-dropdown-item>Male</b-dropdown-item>
            <b-dropdown-item>Other</b-dropdown-item>
        </b-dropdown>
        <div class="each">
        <p>Select your DOB</p>
        <b-datepicker v-model="date" 
        inline 
        :unselectable-days-of-week="[0, 6]">
    </b-datepicker>
    </div>
    <div class="each">
     <b-dropdown>
            <button class="button is-primary" slot="trigger">
                <span>Qualifications</span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item>DIploma</b-dropdown-item>
            <b-dropdown-item>Bachelor</b-dropdown-item>
            <b-dropdown-item>PhD</b-dropdown-item>
        </b-dropdown>
        </div>
        <div class="each">
     <b-dropdown>
            <button class="button is-primary" slot="trigger">
                <span>Interested in</span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item>Piano</b-dropdown-item>
            <b-dropdown-item>Violin</b-dropdown-item>
            <b-dropdown-item>Other</b-dropdown-item>
        </b-dropdown>
        <div class="each">
         <b-field label="Email"
            type=""
            message="">
            <b-input type="email"
                value=""
                maxlength="30">
            </b-input>
        </b-field>
        </div>

        <a class="button is-info">Submit</a>
        </div>
        </div>
    
    </div>
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
    },
     data() {
            return {
                date: new Date()
            }
        }
  
}
</script>
<style scoped>
.button{
    width:100%;
}
.each{
    margin-top: 20px;
}
.flexbox{
    display: flex;
    flex-direction: column;
    max-width:60%;
    margin: 0 auto;

}
.main-content{
    max-width: 1024px;
    margin: 0 auto;
    
}
*{
  font-weight:300 !important;
}
p{
    font-weight:600 !important;
    color:#363636;
}
</style>
