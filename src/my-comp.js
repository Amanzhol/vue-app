import { ref } from 'vue'
export default {
    setup() {
        const count = ref(12312)
        let test = ref("one time")
        return { count, test }
    },
    template: `<div>count is {{ count }} - <span v-once>{{ test }}</span></div>`
}