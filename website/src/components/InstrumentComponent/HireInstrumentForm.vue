<template>
    <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-10">
            <h2 class="has-text-centered subtitle is-2 fix">Hire Instrument</h2>
                <!--  Student ID and Student Name field -->
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
                <!-- End of Student ID and Student Name field -->

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
                studentID: '',
                studentName: '',
                startDate: null,
                endDate:null
            }
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
                this.showAlertMsg(alertMsg)
                // stop the function, because the data is invalid
                return 
            }
            // show success msg box to tell user, their request is success!
            this.$toast.open({
                message: 'Your Request has been submited! Please come to Instrument room to get your instrument when you are free!',
                type: 'is-success'
            })
            // then reset the input data
            this.resetValues()
            // After one second, go back to the home page
            setTimeout( () => this.$router.push('/'),1000)
        },
        showAlertMsg(msg){
            this.$toast.open({
                message: msg,
                type: 'is-danger'
            })
        },
        resetValues(){
            this.dataPackage.studentID = ''
            this.dataPackage.studentName = ''
            this.dataPackage.startDate = null
            this.dataPackage.endDate = null
        }
    }
}
</script>
<style scoped>
.fix{
    margin-top:40px;
}
</style>
