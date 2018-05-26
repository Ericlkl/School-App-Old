<template>
    <!-- Can not submit yet. The input field is not complete -->
    <div class="box">
        <h1 class="title is-3 has-text-centered">Your Register information</h1>
        <!-- Given Name -->
        <div class="field is-grouped">
        <label class="label">Family Name </label>
        <div class="control">
            <input class="input" v-model="lastName" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Family Name -->
        <div class="field is-grouped">
        <label class="label">Given Name </label>
        <div class="control">
        <input class="input" v-model="firstName" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Address -->
        <div class="field is-grouped">
        <label class="label">Address </label>
        <div class="control">
        <input class="input" v-model="address" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Gender -->
        <div class="field is-grouped">
        <label class="label">Gender </label>
        <div class="control">
            <label class="radio">
            <input type="radio" value="Male" v-model="gender" name="question">
            Male
            </label>
            <label class="radio">
            <input type="radio" value="Female" v-model="gender" name="question">
            Female
            </label>
        </div>
        </div>
        <!-- Email-->
        <div class="field is-grouped">
        <label class="label">Email </label>
        <div class="control">
        <input class="input" v-model="email" type="text" placeholder="Text input">
        </div>
        </div>

        <!-- FaceBook ID-->
        <div class="field is-grouped">
        <label class="label">FaceBook </label>
        <div class="control">
        <input class="input" v-model="facebook" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Phone Number-->
        <div class="field is-grouped">
        <label class="label">Phone Number </label>
        <div class="control">
        <input class="input" v-model="phoneNumber" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Parent Name-->
        <div class="field is-grouped">
        <label class="label">Parent Name</label>
        <div class="control">
        <input class="input" v-model="parentName" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Parent Phone Number-->
        <div class="field is-grouped">
        <label class="label">Parent Phone Number</label>
        <div class="control">
        <input class="input" v-model="parentPhoneNumber" type="text" placeholder="Text input">
        </div>
        </div>

        <!-- checkbox for terms and conditions -->
        <div class="field">
        <div class="control">
            <label class="checkbox">
            <input type="checkbox" v-model="termsChecked">
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
export default {
    data(){
        return {
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
            isValid: false
        }
    },
    methods: {
        checkValid(){
            var alertMsg = (this.termsChecked === false) ? "Please checked the terms of Condition check box" : null
            alertMsg = (this.parentPhoneNumber.length != 9) ? "There must be 9 digit for the parent phone number!" : alertMsg
            alertMsg = (this.parentPhoneNumber.length === 0) ? "Please Insert Your parent phone Number !" : alertMsg
            alertMsg = (this.parentName.length === 0) ? "Please insert Your Parent full Name!" : alertMsg
            alertMsg = (this.phoneNumber.length != 9) ? "There must be 9 digit for the phone number!" : alertMsg
            alertMsg = (this.phoneNumber.length === 0) ? "Please Insert Your Phone Number !" : alertMsg
            alertMsg = (this.email.length === 0) ? "Please insert Your Email Address!" : alertMsg
            alertMsg = (this.gender === '') ? "Please Select your gender!" : alertMsg
            alertMsg = (this.address.length === 0) ? "Please insert Your Address!" : alertMsg
            alertMsg = (this.lastName.length === 0) ? "Please insert Your Given Name!" : alertMsg
            alertMsg = (this.firstName.length === 0) ? "Please insert Your Family Name!" : alertMsg

            if (alertMsg != null){
                this.showAlertMsg(alertMsg)
                return false
            }
            return true
        },
        async submit_to_DB() {
            this.isValid = this.checkValid()
            if (this.isValid === false){ return }
            try {
                // Pass information to port 8081, then update database
                const response = await Connection.submitRegisterInfo({
                    FirstName : this.firstName,
                    LastName : this.lastName,
                    Gender : this.gender,
                    Address : this.address,
                    PhoneNumber: parseInt(this.phoneNumber),
                    Email: this.email,
                    Facebook_ID: this.facebook,
                    Parent_Name : this.parentName,
                    Parent_Phone_Number: parseInt(this.parentPhoneNumber),
                })

                // Show success Msg
                this.$toast.open({
                    message: 'The request has been sumbited',
                    type: 'is-success'
                })

            } catch (error){
                // show Alert box when it is Failed insert data to database!
                this.showAlertMsg(error.response.data.error)
            }  
        },
        showAlertMsg(msg){
            this.$toast.open({
                message: msg,
                type: 'is-danger'
            })
        } // end of showAlertMsg function
    }
}
</script>
<style scoped>
.field{
    display:flex;
    flex-direction:column;
}

</style>
