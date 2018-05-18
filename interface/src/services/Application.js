import Api from './Api'

export default {
    apply(credentials){
        return Api().post('apply',credentials)
    },
    submitQuestion(credentials){
        return Api().post('contact', credentials)
    }
}