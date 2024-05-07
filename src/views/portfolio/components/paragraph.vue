<script lang="ts">
export default {
  name: 'ParagraphView',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="text content">{{ text }}</div>
</template>
