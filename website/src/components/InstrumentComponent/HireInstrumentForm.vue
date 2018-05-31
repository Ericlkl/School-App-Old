<template>
    <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-10">
            <!--  Title -->
            <h2 class="has-text-centered subtitle is-2 fix">Hire Instrument</h2>
                <!--  Student ID -->
                <div class="field is-horizontal"> 
                    <div class="field-label is-normal">
                        <label class="label">Student ID</label>
                    </div>

                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded">
                                <input class="input" v-model="dataPackage.studentID" type="text" placeholder="Student ID">
                            </p>
                        </div>

                <!-- End of Student ID  -->

                <!-- Student Name field  -->
                    <div class="field-label is-normal">
                        <label class="label">Student Name</label>
                    </div>
                        <div class="field">
                            <p class="control is-expanded">
                                <input class="input" v-model="dataPackage.studentName" type="text" placeholder="e.g John Snow" value="">
                            </p>
                        </div>
                    </div>
                </div> 
                <!-- End of Student Name field -->

                <!--  Date field -->
                <div class="field is-horizontal"> 
                    <div class="field-label is-normal">
                        <label class="label">From</label>
                    </div>

                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded">
                                <input class="input" v-model="dataPackage.startDate" type="date" min="01-01-2018" max="31-12-2018">
                            </p>
                        </div>

                    <div class="field-label is-normal">
                        <label class="label">To ... </label>
                    </div>
                        <div class="field">
                            <p class="control is-expanded">
                                <input class="input" v-model="dataPackage.endDate" type="date" min="01-01-2018" max="31-12-2018">
                            </p>
                        </div>
                    </div>
                </div> 
                <!-- End of Date field -->
            
            <div class="has-text-centered">
                <button class="button is-info" @click="success">Send Request</button>
            </div>

        </div>
    </div>
</template>

<script>
import ValidationController from '../../../checkValidation/ValidationController'
export default {
    data() {
        return {
            dataPackage: {
                // The data we need to pass it to Database
                studentID: '',
                studentName: '',
                startDate: null,
                endDate:null
            },
            // For unit testing, determine are we in the browser
            inBrowser: true
        }
    },
    methods: {
        // Show Success msg box
        success() {
            // Checking Validation of the form, it is not valid, the alert msg will come back
            const alertMsg = ValidationController.checkHireInstrumentForm(this.dataPackage)
            // If any data is not valid, alertMsg will generate from ValidationController
            if (alertMsg != null){
                // Show alert MSG box to the user, warning them should fix the input
                if(this.inBrowser){
                    this.$toast.open({
                        // The pops up message for the user
                        message: alertMsg,
                        type: 'is-danger'
                    })
                }
                // stop the function, because the data is invalid
                return "Data is not appropriate"
            }
            // show success msg box to tell user, their request is success!
            if(this.inBrowser){
                this.$toast.open({
                    // The pops up message for the user
                    message: 'Your Request has been submited! Please come to Instrument room to get your instrument when you are free!',
                    type: 'is-success'
                })
            }
            // then reset the input data
            this.resetValues()
            // After one second, go back to the home page
            setTimeout( () => this.$router.push('/'),1000)
            // Return Msg if it is success
            return "Data is Valid"
        },
        resetValues(){
            // Reset All the data 
            this.dataPackage.studentID = ''
            this.dataPackage.studentName = ''
            this.dataPackage.startDate = null
            this.dataPackage.endDate = null
            // Return Msg if it is success
            return "resetSuccessfully"
        }
    }
}
</script>
<style scoped>
.fix{
    margin-top:40px;
}
</style>
