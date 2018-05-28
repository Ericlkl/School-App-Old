import Api from './Api'

export default {
    submitQuestion(questions){
        return Api().post('contact', questions)
    },
    submitRegisterInfo(credentials) {
        return Api().post('insert_Student', credentials)
    },
    getTutorsInfo(){
        return Api().get('show_tutors')
    },
    getEventsInfo(){
        return Api().get('show_events')
    },
    getCoursesInfo() {
        return Api().get('show_course')
    },
    getInstrumentsInfo() {
          return Api().get('show_instrument')
    }
}