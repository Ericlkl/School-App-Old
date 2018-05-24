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
                                <input class="input" type="text" placeholder="Student ID">
                            </p>
                        </div>

                    <div class="field-label is-normal">
                        <label class="label">Student Name</label>
                    </div>
                        <div class="field">
                            <p class="control is-expanded">
                                <input class="input" type="text" placeholder="e.g John Snow" value="">
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
                                <input class="input" type="date" min="01-01-2018" max="31-12-2018">
                            </p>
                        </div>

                    <div class="field-label is-normal">
                        <label class="label">To ... </label>
                    </div>
                        <div class="field">
                            <p class="control is-expanded">
                                <input class="input" type="date" min="01-01-2018" max="31-12-2018">
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
            methods: {
            success() {
                this.$toast.open({
                    message: 'The form has been submited',
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
