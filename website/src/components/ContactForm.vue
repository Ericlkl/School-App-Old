<template>
    <section>
        <div class="content">
        <h1>Any Question?</h1>
        <p>We value your comments and feedback to help us improve and be better at what we do</p>
        <!-- Full name input field -->
        <div class="field">
        <label class="label">Full Name*</label>
        <div class="control">
            <input class="input" type="text" placeholder="E.g Burce Wayne" v-model="dataPackage.fullname">
        </div>
        </div>

        <!-- Email input field -->
        <div class="field">
        <label class="label">Email*</label>
        <div class="control">
            <input class="input" type="text" placeholder="Abc@email.com" v-model="dataPackage.email">
        </div>
        </div>

        <!-- Phone number text field -->
        <div class="field">
        <label class="label">Phone Number*</label>
        <div class="control has-icons-left">
            <input class="input" type="text" v-model="dataPackage.phonenumber">
            <span class="icon is-small is-left">
            <label class="label">+61</label>
            </span>
        </div>
        </div>

        <div class="field">
        <div class="control">
            <textarea class="textarea is-success" type="text" v-model="dataPackage.message" placeholder="Enter your message here"></textarea>
        </div>
        </div>

        <button @click="uploadQuestion" class='button is-info is-rounded fix'>Send</button>
        </div>
        </section>
</template>

<script>
import Connection from '../services/Connection'
import ValidationController from '../../checkValidation/ValidationController'

    export default {
        data() {
            return {
                dataPackage: {
                    fullname: '',
                    phonenumber: '',
                    email: '',
                    message: '',
                }
            }
        },
        methods : {
            resetInputField(){
                this.dataPackage.fullname = ''
                this.dataPackage.phonenumber =  ''
                this.dataPackage.email =  ''
                this.dataPackage.message =  ''
                return "resetSuccessfully"
            },
            async uploadQuestion() {

                const alertMsg = ValidationController.checkContactUsForm(this.dataPackage)

                if (alertMsg != null){
                    //show alert Msg box
                    this.$toast.open({
                        // print the alert message
                        message: alertMsg,
                        type: 'is-danger'
                    })
                    return "text is invalid"
                }

                try {
                    // Pass information to port 8081, then update database
                    const response = await Connection.submitQuestion({
                        FullName : this.dataPackage.fullname,
                        Email: this.dataPackage.email,
                        PhoneNumber: parseInt(this.dataPackage.phonenumber),
                        Message: this.dataPackage.message
                    })
                    // show information box if it is success!
                    this.$toast.open({
                        message: 'The contact form has been sent',
                        type: 'is-success'
                    })
                    // At the end, clear the data in input field
                    this.resetInputField()
                    // after one second, go back to the home page
                    setTimeout( () => this.$router.push('/'),1000)

                } catch (error){
                    // show Alert box when it is Failed insert data to database!
                    console.log("Can not upload the data, Connection Problem")
                    this.$toast.open({
                        message: "Can not upload the data, Connection Problem",
                        type: 'is-danger'
                    })
                    return "Connection Fail"
                }  
            }
        }
    }
</script>
<style scoped>
.fix{
    width:200px !important;
    height:40px;
}
</style>