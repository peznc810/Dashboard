import { createI18n } from 'vue-i18n'
import zh from './locales/zh'
import en from './locales/en'

const messages = {
  zh,
  en
}

const i18n = createI18n({
  legacy: false, // 官方說如果要用composition API的話，必須要關掉legacy的狀態
  locale: 'zh', // 預設語言
  fallbackLocale: 'en', // 替代語言
  messages
})

export default i18n