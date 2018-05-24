<template>
    <section>
        <div class="content">
        <h1>Any Question?</h1>
        <p>We value your comments and feedback to help us improve and be better at what we do</p>
        <!-- Full name input field -->
        <div class="field">
        <label class="label">Full Name*</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="E.g Burce Wayne" v-model="fullname">
            <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </div>
        </div>

        <!-- Email input field -->
        <div class="field">
        <label class="label">Email*</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Abc@email.com" v-model="email">
            <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </div>
        </div>

        <!-- Phone number text field -->
        <div class="field">
        <label class="label">Phone Number*</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" v-model="phonenumber">
        </div>
        </div>

        <div class="field">
        <div class="control">
            <textarea class="textarea is-success" type="text" v-model="message" placeholder="Success textarea"></textarea>
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
                phonenumber: 61,
                email: '',
                message: '',
                error: null
            }
        },
        methods : {
            async uploadQuestion() {
                try {
                    const response = await Connection.submitQuestion({
                        FullName : this.fullname,
                        Email: this.email,
                        PhoneNumber: this.phonenumber,
                        Message: this.message
                    })
                     this.$toast.open({
                        message: 'The contact form has been sent',
                        type: 'is-success'
                    })
                    
                } catch (error){
                    this.error = error.response.data.error
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