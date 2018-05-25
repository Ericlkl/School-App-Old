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
            endDate:null
        }
    },
    methods: {
        success() {
            console.log(this.studentID)
            console.log(this.studentName)
            console.log(this.startDate)
            console.log(this.endDate)
            this.$toast.open({
                message: 'Your Request has been submited! Please come to Instrument room to get your instrument when you are free!',
                type: 'is-success'
            })
        }
    }
}
</script>
<style scoped>
.fix{
    margin-top:40px;
}
</style>
