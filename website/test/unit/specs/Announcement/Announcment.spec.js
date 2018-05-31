// Import Module for testing
import Vue from 'vue'
import Announcment from '@/components/Announc/Announcment'
import {shallowMount} from '@vue/test-utils'

// Create a fake data for testing
const dummy_announcment_data = {
    img: "https://blogmedia.evbstatic.com/wp-content/uploads/bloguk/2018/01/15155312/iStock-667709450.jpg",
    title: "title",
    location: "location",
    time: 'Tuesday',
    entry: 300
}

// Create a Announancement Vue Instance for checking
const wrapper = shallowMount(Announcment, {
    propsData: {
        img: dummy_announcment_data.img,
        title: dummy_announcment_data.title,
        location: dummy_announcment_data.location,
        time: dummy_announcment_data.time,
        entry: dummy_announcment_data.entry
    }
})

// Describe which Module are we testing
describe('Announcment', () => {

    // Write down the msg, what is this function testing
    it('Can read data to pass it in props', () => {

        /*
            Expected the data recieved in the props, should match the dummy data we send it to the Announcment
        */
        expect(wrapper.vm.img).to.equal(dummy_announcment_data.img)
        expect(wrapper.vm.title).to.equal(dummy_announcment_data.title)
        expect(wrapper.vm.location).to.equal(dummy_announcment_data.location)
        expect(wrapper.vm.time).to.equal(dummy_announcment_data.time)
        expect(wrapper.vm.entry).to.equal(dummy_announcment_data.entry)


    }),
    // // Write down the msg, what is this function testing
    it('Can shows the Announcment information on the card Component', () => {

        // The HTML Element should contains the data we Inserted to the page
        expect(wrapper.html()).to.contains(`${wrapper.vm.title}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.location}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.time}`)
        expect(wrapper.html()).to.contains(`${wrapper.vm.entry}`)

    })

})
