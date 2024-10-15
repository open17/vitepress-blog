import Theme from 'vitepress-theme-open17'
import RevealGroup from '../../components/RevealGroup.vue'
import './style.css'
export default{
    extends: Theme,
    enhanceApp({ app }) {
        // 注册自定义全局组件
        app.component('RevealGroup',RevealGroup)
      }
}