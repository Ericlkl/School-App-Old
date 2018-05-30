<template>
    <!-- Can not submit yet. The input field is not complete -->
    <div class="box">
        <h1 class="title is-3 has-text-centered">Your Register information</h1>
        <!-- Given Name -->
        <div class="field is-grouped">
        <label class="label">Family Name* </label>
        <div class="control">
            <input class="input" v-model="dataPackage.lastName" type="text" placeholder="Burce">
        </div>
        </div>
        <!-- Family Name -->
        <div class="field is-grouped">
        <label class="label">Given Name* </label>
        <div class="control">
        <input class="input" v-model="dataPackage.firstName" type="text" placeholder="Wayne">
        </div>
        </div>
        <!-- Address -->
        <div class="field is-grouped">
        <label class="label">Address* </label>
        <div class="control">
        <input class="input" v-model="dataPackage.address" type="text" placeholder="10 Mary Street South Brisbane Brisbane QLD Australia ">
        </div>
        </div>
        <!-- Gender -->
        <div class="field is-grouped">
        <label class="label">Gender* </label>
        <div class="control">
            <label class="radio">
            <input type="radio" value="Male" v-model="dataPackage.gender" name="question">
            Male
            </label>
            <label class="radio">
            <input type="radio" value="Female" v-model="dataPackage.gender" name="question">
            Female
            </label>
        </div>
        </div>
        <!-- Email-->
        <div class="field is-grouped">
        <label class="label">Email* </label>
        <div class="control">
        <input class="input" v-model="dataPackage.email" type="text" placeholder="abc@gmail.com">
        </div>
        </div>

        <!-- FaceBook ID-->
        <div class="field is-grouped">
        <label class="label">FaceBook </label>
        <div class="control">
        <input class="input" v-model="dataPackage.facebook" type="text" placeholder="Facebook ID">
        </div>
        </div>
        <!-- Phone Number-->
        <div class="field is-grouped">
        <label class="label">Phone Number* </label>
        <div class="control">
        <input class="input" v-model="dataPackage.phoneNumber" type="text" placeholder="phone number">
        </div>
        </div>
        <!-- Parent Name-->
        <div class="field is-grouped">
        <label class="label">Parent Name*</label>
        <div class="control">
        <input class="input" v-model="dataPackage.parentName" type="text" placeholder="e.g. John Snow">
        </div>
        </div>
        <!-- Parent Phone Number-->
        <div class="field is-grouped">
        <label class="label">Parent Phone Number*</label>
        <div class="control">
        <input class="input" v-model="dataPackage.parentPhoneNumber" type="text" placeholder="phone number">
        </div>
        </div>

        <!-- checkbox for terms and conditions -->
        <div class="field">
        <div class="control">
            <label class="checkbox">
            <input type="checkbox" v-model="dataPackage.termsChecked">
            I have read and agree to the <router-link :to = "{name: 'terms'}">terms and conditions</router-link>
            </label>
        </div>
        </div>

        <!-- Submit Button -->
        <div class="field is-grouped">
        <div class="control">
            <button class="button is-info" @click="submit_to_DB">Submit</button>
            <button class="button is-text">Cancel</button>
        </div>
        </div>

    </div>
</template>

<script>
import Connection from '../../services/Connection'
import ValidationController from '../../../checkValidation/ValidationController'
export default {
    data(){
        return {
            dataPackage: {
                firstName: '',
                lastName: '',
                address: '',
                gender: '',
                email: '',
                phoneNumber: '',
                parentName: '',
                parentPhoneNumber: '',
                facebook: '',
                termsChecked: false,
            },
            inBrowser: true
        }
    },
    methods: {
        async submit_to_DB() {
            const alertMsg = ValidationController.checkEnrolForm(this.dataPackage)

            if (alertMsg != null){
                if(this.inBrowser){
                    this.$toast.open({
                    message: alertMsg,
                    type: 'is-danger'
                    })
                }
                return "Data is not appropriate"
            }
            try {
                // Pass information to port 8081, then update database
                const response = await Connection.submitRegisterInfo({
                    FirstName : this.dataPackage.firstName,
                    LastName : this.dataPackage.lastName,
                    Gender : this.dataPackage.gender,
                    Address : this.dataPackage.address,
                    PhoneNumber: parseInt(this.dataPackage.phoneNumber),
                    Email: this.dataPackage.email,
                    Facebook_ID: this.dataPackage.facebook,
                    Parent_Name : this.dataPackage.parentName,
                    Parent_Phone_Number: parseInt(this.dataPackage.parentPhoneNumber),
                })

                // Show success Msg
                if(this.inBrowser){
                    this.$toast.open({
                        message: 'The request has been sumbited',
                        type: 'is-success'
                    })
                }
                // After one second, go back to the home page
                // setTimeout( () => this.$router.push('/'),1000)
                return "Send Data Successfully"

            } catch (error){
                // show Alert box when it is Failed insert data to database!
                if(this.inBrowser){
                    this.$toast.open({
                    message: "Connection fail",
                    type: 'is-danger'
                    })
                }
                return "Connection Fail"
            }  
        }
    }
}
</script>
<style scoped>
.field{
    display:flex;
    flex-direction:column;
}

</style>
