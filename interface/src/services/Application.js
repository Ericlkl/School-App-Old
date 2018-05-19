import Api from './Api'

export default {
    apply(credentials){
        return Api().post('apply',credentials)
    },
    submitQuestion(credentials){
        return Api().post('contact', credentials)
    },
    getTutorsInfo(){
        return Api().get('show_tutors')
    }
}