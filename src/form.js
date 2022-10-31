import Vue from 'vue'
import VueForm from 'vue-form'


let options = {
    validators: {
        'entre-5-15-caracteres' : function(value) {
            return (value.length() > 5 && value.length() < 15)
        },
        'entre-18-120-anos': function(value) {
            return (value > 18 && value < 120)
        }
    }
}

Vue.use(VueForm, options)