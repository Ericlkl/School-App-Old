<template>
    <section>
        <div class="content">
        <h1>Any Question?</h1>
        <p>We value your comments and feedback to help us improve and be better at what we do</p>
        <!-- Full name input field -->
        <div class="field">
        <label class="label">Full Name*</label>
        <div class="control">
            <input class="input" type="text" placeholder="E.g Burce Wayne" v-model="fullname">
        </div>
        </div>

        <!-- Email input field -->
        <div class="field">
        <label class="label">Email*</label>
        <div class="control">
            <input class="input" type="text" placeholder="Abc@email.com" v-model="email">
        </div>
        </div>

        <!-- Phone number text field -->
        <div class="field">
        <label class="label">Phone Number*</label>
        <div class="control has-icons-left">
            <input class="input" type="text" v-model="phonenumber">
            <span class="icon is-small is-left">
            <label class="label">+61</label>
            </span>
        </div>
        </div>

        <div class="field">
        <div class="control">
            <textarea class="textarea is-success" type="text" v-model="message" placeholder="Success textarea"></textarea>
        </div>
        </div>

        <button @click="submitQuestion" class='button is-info is-rounded fix'>Send</button>
        </div>
        </section>
</template>

<script>

import Connection from '../services/Connection'

    export default {
        data() {
            return {
                fullname: '',
                phonenumber: '',
                email: '',
                message: '',
            }
        },
        methods : {
            resetInputField(){
                this.fullname = ''
                this.phonenumber =  ''
                this.email =  ''
                this.message =  ''
            },
            showAlertMsg(msg){
                this.$toast.open({
                    message: msg,
                    type: 'is-danger'
                })
            },
            submitQuestion(){

                var alertMsg = (this.message.length === 0) ? "Please insert Your Message!" : null
                alertMsg = (this.phonenumber.length != 9) ? "There must be 9 digit for the phone number!" : alertMsg
                alertMsg = (this.phonenumber.length === 0) ? "Please Insert Your Phone Number !" : alertMsg
                alertMsg = (this.email.length === 0) ? "Please insert Your Email Address!" : alertMsg
                alertMsg = (this.fullname.length === 0) ? "Please insert Your Name!" : alertMsg

                if (alertMsg != null){
                    this.showAlertMsg(alertMsg)
                    return
                }

                // If it is correct, pass it into Database!
                this.uploadQuestion()
            },
            async uploadQuestion() {
                try {
                    // Pass information to port 8081, then update database
                    const response = await Connection.submitQuestion({
                        FullName : this.fullname,
                        Email: this.email,
                        PhoneNumber: parseInt(this.phonenumber),
                        Message: this.message
                    })
                    // show information box if it is success!
                    this.$toast.open({
                        message: 'The contact form has been sent',
                        type: 'is-success'
                    })
                    // At the end, clear the data in input field
                    this.resetInputField()
                } catch (error){
                    // show Alert box when it is Failed insert data to database!
                    this.showAlertMsg(error.response.data.error)
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