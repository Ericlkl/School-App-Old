<template>
  <div>
      <Navbar class="nav"/>
        <!-- Course Information Part -->
        <div class="container">
            <div class="columns is-3">
                <div class="column">
                    <Coursebox/>
                </div>
                <div class="column is-6">
                    <Descriptionbox/>
                    <Tutionbox/>
                </div>
                <div class="column is-3 requirement">
                    <Requirementbox/>
                    <br>
                    <!-- View Terms and Enquire button -->
                    <div class="has-text-centered fix">
                        <router-link :to = "{name: 'terms'}">
                        <button class="button is-light is-filled">View Terms&Con</button>
                        </router-link>
                        <br>
                        <router-link :to = "{name: 'contact'}">
                        <button class="button is-info is-filled">Make an Enquire</button>
                        </router-link>
                        <br>
                        <!-- You can click the button to test showing the form -->
                        <button @click="register()" class="button is-success is-filled">Join Course</button>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <!-- Register Form Part -->
        <div v-if="show" class="container">
            <EnrolForm />
        </div>
      <Footer/>
</div>
</template>
<script>

import Footer from '../Footer'
import Navbar from '../Navbar'
import Requirementbox from '../CourseSpecificComponent/RequirementBox.vue'
import Coursebox from '../CourseSpecificComponent/CourseBox.vue'
import Descriptionbox from '../CourseSpecificComponent/DescriptionBox.vue'
import Tutionbox from '../CourseSpecificComponent/TutionBox.vue'
import EnrolForm from '../CourseSpecificComponent/EnrolForm.vue'

export default {
    components:{
        Footer,
        Navbar,
        Requirementbox,
        Coursebox,
        Descriptionbox,
        Tutionbox,
        EnrolForm
    },
    data: function() {
        return {
            show: false
        }
    },
    methods: {
        register: function(){
            this.show = !this.show
            console.log("Hello Eric")
        }
    }
  
}
</script>
<style scoped>
.fix{
    display:flex;
    flex-direction:column;
}
</style>
