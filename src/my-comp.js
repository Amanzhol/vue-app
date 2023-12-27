import { ref } from 'vue'
export default {
    setup() {
        const count = ref(12312)
        const test = ref("Value")
        return { count, test }
    },
    template: `<div>count is {{ count }} - {{ test }}</div>`
}