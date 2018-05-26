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
            <textarea class="textarea is-success" type="text" v-model="message" placeholder="Enter your message here"></textarea>
        </div>
        </div>

        <button @click="uploadQuestion" class='button is-info is-rounded fix'>Send</button>
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
                isValid: false
            }
        },
        methods : {
            resetInputField(){
                this.fullname = ''
                this.phonenumber =  ''
                this.email =  ''
                this.message =  ''
                this.isValid = false
            },
            showAlertMsg(msg){
                this.$toast.open({
                    message: msg,
                    type: 'is-danger'
                })
            },
            checkValid(){
                // Regular Express for Email format
                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                /*
                    Initialise the alertMsg variable, it is used to pass the text string to alret the user
                    their information in incorrect
                */

                //  Testing for Message Box
                var alertMsg = (this.message.length === 0) ? "Please insert Your Message!" : null

                // Testing for phone number input field, only accept number and must be 9 digit long
                alertMsg = (!/^[0-9]*$/.test(this.phonenumber)) ? "Invalid phone number detected! Please correct it!" : alertMsg
                alertMsg = (this.phonenumber.length != 9) ? "There must be 9 digit for the phone number!" : alertMsg
                alertMsg = (this.phonenumber.length === 0) ? "Please Insert Your Phone Number !" : alertMsg

                // Testing for email input field, using Regular expression to check the email format
                alertMsg = (!emailRegex.test(this.email)) ? "Invalid emaill format detected! Please Correct it!" : alertMsg
                alertMsg = (this.email.length === 0) ? "Please insert Your Email Address!" : alertMsg

                // Testing for name input field, only accept english letter a-z, A-Z and space _ 
                alertMsg = (!/^[a-zA-Z_ ]*$/.test(this.fullname)) ? "Invaild name detected! Only accept english letter!" : alertMsg
                alertMsg = (this.fullname.length === 0) ? "Please insert Your Name!" : alertMsg

                if (alertMsg != null){
                    this.showAlertMsg(alertMsg)
                    return false
                }
                // return true for isValid attribute
                return true

            },

            async uploadQuestion() {
                this.isValid = this.checkValid()
                // If the information is not in valid format , stop the function 
                if (!this.isValid){ return }

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
                    this.isValid = false
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