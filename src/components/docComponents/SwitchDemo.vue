<template>
  <Demo :component="SwitchCase1"/>
  <Demo :component="SwitchCase2"/>
</template>

<script lang="ts">
  import SwitchCase1 from "./case/SwitchCase1.vue";
  import SwitchCase2 from "./case/SwitchCase2.vue";
  import Demo from "./Demo.vue";
  export default {
    components: {
      Demo
    },
    setup(){
      return {SwitchCase1,SwitchCase2}
    }
  }
</script>