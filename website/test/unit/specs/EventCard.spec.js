// Import Module for testing
import Vue from 'vue'
import EventCard from '@/components/EventComponent/EventCard'
import {shallowMount} from '@vue/test-utils'

// Create a fake data for testing
const dummy_event_data = {
  EventName: "Event",
  Tag: "Tag",
  Image_URL: "https://blogmedia.evbstatic.com/wp-content/uploads/bloguk/2018/01/15155312/iStock-667709450.jpg",
  Instrument: "Ins",
  Company: "Company",
  Time: "Tuesday",
  Date: "12 April to 20 April",
  Description: "Description",
  Place: "Place"
}

// Create a EventCard Vue Instance for checking
const wrapper = shallowMount(EventCard, {
    propsData: {
    event: dummy_event_data
    }
})

// Describe which Module are we testing
describe('EventCard', () => {

    // Descibe what is this function testing for
    it('Can read Database data to pass it in props', () => {

        /*
            Expected the data recieved in the props, should match the dummy data we send it to the EventCard
        */
        expect(wrapper.vm.event.EventName).to.equal(dummy_event_data.EventName)
        expect(wrapper.vm.event.Tag).to.equal(dummy_event_data.Tag)
        expect(wrapper.vm.event.Image_URL).to.equal(dummy_event_data.Image_URL)
        expect(wrapper.vm.event.Instrument).to.equal(dummy_event_data.Instrument)
        expect(wrapper.vm.event.Company).to.equal(dummy_event_data.Company)
        expect(wrapper.vm.event.Time).to.equal(dummy_event_data.Time)
        expect(wrapper.vm.event.Date).to.equal(dummy_event_data.Date)
        expect(wrapper.vm.event.Description).to.equal(dummy_event_data.Description)
        expect(wrapper.vm.event.Place).to.equal(dummy_event_data.Place)


    }),
    // Descibe what is this function testing for
    it('Can shows the event information on the card Component', () => {

        // It should shows the event image on the card 
        expect(wrapper.html()).to.contains(`<img data-v-66e16a4e="" src="${wrapper.vm.event.Image_URL}" alt="Placeholder image">`)
        // It should shows the event Name on the card Successfully
        expect(wrapper.html()).to.contains(`<p data-v-66e16a4e="" class="title is-4">${wrapper.vm.event.EventName}</p>`)
        // It should shows the Tag on the card
        expect(wrapper.html()).to.contains(`<p data-v-66e16a4e="" class="subtitle is-6">@${wrapper.vm.event.Tag}</p>`)
        // It should shows the Description on the card
        expect(wrapper.html()).to.contains(`${wrapper.vm.event.Description}`)
        // It should shows the Place on the card
        expect(wrapper.html()).to.contains(`<a data-v-66e16a4e="">@${wrapper.vm.event.Place}</a>`)
        // It should shows the Instrument on the card
        expect(wrapper.html()).to.contains(`<a data-v-66e16a4e="" href="#">#${wrapper.vm.event.Instrument}</a>`)
        // It should shows the Company on the card
        expect(wrapper.html()).to.contains(`<a data-v-66e16a4e="" href="#">#${wrapper.vm.event.Company}</a>`)
        // It should shows Time and Date on the card
        expect(wrapper.html()).to.contains(`<time data-v-66e16a4e="" datetime="2016-1-1">${wrapper.vm.event.Time} - ${wrapper.vm.event.Date}</time>`)
    })

})
