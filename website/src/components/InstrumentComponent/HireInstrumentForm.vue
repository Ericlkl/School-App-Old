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
                                <input class="input" v-model="studentID" type="text" placeholder="Student ID">
                            </p>
                        </div>

                    <div class="field-label is-normal">
                        <label class="label">Student Name</label>
                    </div>
                        <div class="field">
                            <p class="control is-expanded">
                                <input class="input" v-model="studentName" type="text" placeholder="e.g John Snow" value="">
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
                                <input class="input" v-model="startDate" type="date" min="01-01-2018" max="31-12-2018">
                            </p>
                        </div>

                    <div class="field-label is-normal">
                        <label class="label">To ... </label>
                    </div>
                        <div class="field">
                            <p class="control is-expanded">
                                <input class="input" v-model="endDate" type="date" min="01-01-2018" max="31-12-2018">
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
export default {
    data() {
        return {
            studentID: '',
            studentName: '',
            startDate: null,
            endDate:null,
            isValid: false
        }
    },
    methods: {
        checkValid(){
            // Create Date Object for comparing start and end date
            const start = new Date(this.startDate)
            const end = new Date(this.endDate)

            // Testing for start date and end date
            // only accept start date < end date
            var alertMsg = (start.getTime() === end.getTime()) ? "Start Data and End date Cannot be same !" : null
            alertMsg = (start > end) ? "The Start Date cannot earlier than end date! " : alertMsg
            alertMsg = (this.endDate === null) ? "Please Select the end date !" : alertMsg
            alertMsg = (this.startDate === null) ? "Please Select the start date !" : alertMsg

            // Testing for student name input field, only accept english letter a-z, A-Z and space _ 
            alertMsg = (!/^[a-zA-Z_ ]*$/.test(this.studentName)) ? "Invaild name detected! Only accept english letter!" : alertMsg
            alertMsg = (this.studentName.length === 0) ? "Please insert Your Name!" : alertMsg

            // Testing for student id input field, only accept numbers
            alertMsg = (!/^[0-9]*$/.test(this.studentID)) ? "Student Number is inValid! It onlt accept numbers!" : alertMsg
            alertMsg = (this.studentID.length === 0) ? "Please Insert Your Student Number !" : alertMsg

            if (alertMsg != null){
                this.showAlertMsg(alertMsg)
                return false
            }
            // return true for isValid attribute
            return true

        },
        success() {
            this.isValid = this.checkValid()
            if (!this.isValid){ return }

            this.$toast.open({
                message: 'Your Request has been submited! Please come to Instrument room to get your instrument when you are free!',
                type: 'is-success'
            })
            this.resetValues()
        },
        showAlertMsg(msg){
            this.$toast.open({
                message: msg,
                type: 'is-danger'
            })
        },
        resetValues(){
            this.studentID = ''
            this.studentName = ''
            this.startDate = null
            this.endDate = null
            this.isValid = false
        }
    }
}
</script>
<style scoped>
.fix{
    margin-top:40px;
}
</style>
