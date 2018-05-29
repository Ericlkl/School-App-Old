<template>
<div>
    <Navbar></Navbar>
    <div class="main-content">
        <div class="flexbox">
            <h1 class="subtitle is-4" style="text-align:center;"> Complete the details below and start selling your courses with us</h1>
            <b-field label="FirstName">
            <b-input v-model="data_package.firstName"></b-input>
        </b-field>
         <b-field label="Lastname">
            <b-input v-model="data_package.lastName"></b-input>
        </b-field>
             <b-dropdown v-model="data_package.gender">
            <button class="button is-primary" slot="trigger">
                <span>Select your gender</span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item value="Female">Female</b-dropdown-item>
            <b-dropdown-item value="Male">Male</b-dropdown-item>
        </b-dropdown>
        <div class="each">
        <p>Select your DOB</p>
        <b-datepicker v-model="data_package.date" 
        inline 
        :unselectable-days-of-week="[0, 6]">
    </b-datepicker>
    </div>
    <div class="each">
     <b-dropdown v-model="data_package.qualifications">
            <button class="button is-primary" slot="trigger">
                <span>Qualifications</span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item value="Diploma">Diploma</b-dropdown-item>
            <b-dropdown-item value="Bachelor">Bachelor</b-dropdown-item>
            <b-dropdown-item value="phD">PhD</b-dropdown-item>
        </b-dropdown>
        </div>
        <div class="each">
        
        <b-dropdown v-model="data_package.interested">
            <button class="button is-primary" slot="trigger">
                <span>Interested in</span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item value="Piano">Piano</b-dropdown-item>
            <b-dropdown-item value="Violin">Violin</b-dropdown-item>
            <b-dropdown-item value="Other">Other</b-dropdown-item>
        </b-dropdown>
        <div class="each">
         <b-field label="Email"
            type=""
            message="">
            <b-input type="email"
                value=""
                maxlength="30"
                v-model="data_package.email"
                >
            </b-input>
        </b-field>
        </div>

        <a class="button is-info" @click='success'>Submit</a>
        </div>
        </div>
    
    </div>
    <Footer/>
</div>
  
</template>
<script>
import Footer from '../Footer'
import Navbar from '../Navbar'
import ValidationController from '../../../checkValidation/ValidationController'

export default {
    components:{
        Footer,
        Navbar
    },
     data() {
            return {
                data_package: {
                    date: new Date(),
                    firstName : "",
                    lastName : "",
                    gender : "",
                    qualifications : "",
                    interested: "",
                    email : ""
                },
                message: ""
            }
        },
    methods:{
        success() {

            const alertMsg = ValidationController.checkBecomeTutorForm(this.data_package)

            if (alertMsg != null) {
                // this.$toast.open({
                //     message: alertMsg,
                //     type: 'is-danger'
                // })

                return "Data is not appropriate"
            }

                // this.$toast.open({
                //     message: 'The form has been submited',
                //     type: 'is-success'
                // })
                
                // setTimeout( () => this.$router.push('/'),1000)

                return "Send Data Successfully"
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

p{
    font-weight:600 !important;
    color:#363636;
}
</style>
