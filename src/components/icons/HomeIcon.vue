<script setup>
defineProps({
  height: {
    type: [String, Number],
    default: '',
  },
  width: {
    type: [String, Number],
    default: '',
  },
  fill: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    :width="width"
    viewBox="0 0 25 25"
    :class="class"
  >
    <path
      d="M23 9.99V22a2.006 2.006 0 0 1-2 2h-6v-8h-5v8H4a2.006 2.006 0 0 1-2-2V9.99a1.999 1.999 0 0 1 .79-1.59L12.5 1l9.71 7.4A1.999 1.999 0 0 1 23 9.99z"
      :fill="fill"
    />
  </svg>
</template>
