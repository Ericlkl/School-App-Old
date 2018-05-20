<template>
  <div>
      <Navbar class="nav"/>
      <div class="main-content">
        <div class="container">
          
        <div v-for = "n in num_of_Events" >
            <div v-if = "n === 1 || (n - 1) % 4 === 0" class="columns">
                <div v-if="num_of_Events - n >= 0" class="column is-3"> <EventCard :event="received.eventList[n - 1]"/></div>
                <div v-if="num_of_Events - n - 1 >= 0 " class="column is-3"> <EventCard :event="received.eventList[n]"/></div>
                <div v-if="num_of_Events - n - 2 >= 0 " class="column is-3"> <EventCard :event="received.eventList[n + 1]"/></div>
                <div v-if="num_of_Events - n - 3 >= 0 " class="column is-3"> <EventCard :event="received.eventList[n + 2]"/></div>
            </div>
        </div>

        </div>
      </div>
      <Footer/>
  </div>
</template>
<script>
import Footer from '../Footer'
import Navbar from '../Navbar'
import EventCard from '../EventComponent/EventCard'
import Connection from '../../services/Connection'

export default {
    components:{
        Footer,
        Navbar,
        EventCard
    },
    data() {
      return {
        received: {},
        num_of_Events: 0
      }
    },
    methods: {
      async getInfo() {
          try {
            this.received.eventList = (await Connection.getEventsInfo() ).data
            this.num_of_Events = this.received.eventList.length
            console.log(this.received.eventList)
          } catch(error){
            console.log(error)
          }
      }
    },
    watch : {
      received: function(val){
        this.received = val
      }
    },
    mounted() {
      this.getInfo()
    }
  
}
</script>
<style scoped>

</style>
