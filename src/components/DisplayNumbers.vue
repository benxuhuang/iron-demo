<template>
  <div>
    <h2>{{ storeState }}</h2>
  </div>
</template>

<script>
import { EventBus } from '../EventBus.js'
import { store } from '../store.js'

export default {
  data() {
    return {
      numbers: [1,2,3,5,7],
      storeState: store.state.numbers
    }
  },
  methods: {
    handleAddNumber() {
      EventBus.$on('addNumber',(payload)=>{
        this.numbers.push(payload)
      })
    }
  },
  created() {
    this.handleAddNumber()
  }
}
</script>