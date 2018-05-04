<template>

    <section>
        <b-field label="Name*">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Email*"
            message="">
            <b-input type="email"
                value=""
                maxlength="30">
            </b-input>
        </b-field>
        
        <b-field label="Phone"
            type=""
            message="">
            <b-input value="+61 " maxlength="30"></b-input>
        </b-field>

        <b-field label="Message*">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field>

        <button class='button is-warning is-rounded'>Send</button>
        </section>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>
