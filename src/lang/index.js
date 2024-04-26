import VueI18n from 'vue-i18n'
import Vue from 'vue'
import zh from '@/lang/zh.js'
import en from '@/lang/en.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'en',
    messages: {
        "zh": zh,
        "en": en
    }
})

export default i18n
