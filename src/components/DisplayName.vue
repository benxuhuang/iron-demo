<template>
    <div>
    <h2>{{name2}}</h2>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
    data() {
        return {
            name2: name
        };
    },
    computed:{
        ...mapState([name])
    }
}
</script>