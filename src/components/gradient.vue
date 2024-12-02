<script lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { isMobile } from '../utils/device'

export default {
  name: 'GradientView',
  setup() {
    const cursorPositionRef = ref({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    })

    const updateCursorPosition = (event: MouseEvent) => {
      if (!isMobile()) {
        cursorPositionRef.value = {
          x: event.clientX,
          y: event.clientY
        }
      }
    }

    onMounted(() => {
      if (!isMobile()) {
        window.addEventListener('mousemove', updateCursorPosition)
      }
    })

    onUnmounted(() => {
      if (!isMobile()) {
        window.removeEventListener('mousemove', updateCursorPosition)
      }
    })

    const gradientPosition = computed(() => {
      return `${cursorPositionRef.value.x}px ${cursorPositionRef.value.y}px`
    })

    return {
      gradientPosition
    }
  },
  data() {
    return {
      isMobileClass: isMobile()
    }
  }
}
</script>

<template>
  <div
    :class="{ 'gradient--desktop': !isMobileClass, gradient: true }"
    :style="{ '--gradient-position': gradientPosition }"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
div {
  .gradient.gradient--desktop {
    background-image: radial-gradient(
      circle at var(--gradient-position, 50% 50%),
      var(--tertiary-color),
      var(--secondary-color) 20%
    );
    width: 100vw;
    height: 100vh;
    overflow: scroll;

    @media (prefers-color-scheme: dark) {
      background-image: radial-gradient(
        circle at var(--gradient-position, 50% 50%),
        var(--tertiary-color),
        var(--primary-color) 20%
      );
    }
  }
}
</style>
