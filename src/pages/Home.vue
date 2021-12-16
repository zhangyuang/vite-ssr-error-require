
<template>
  <div>
    <popup />
    这段文字不渲染 Teleport Hydration node mismatch:
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import popup from '../components/popup'

export default defineComponent({
  components: {
    popup
  },
  data () {
    return {
      showPopover: false,
      actions: [
        { text: '选项一' },
        { text: '选项二' },
        { text: '选项三' }
      ]
    }
  },
  created () {
  }
})
</script>

<style>
</style>
