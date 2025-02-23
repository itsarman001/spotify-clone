<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  type: { type: String, default: 'button' },
  variant: { type: String, default: '' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  rounded: { type: String, default: 'md' },
  class: { type: String, default: '' },
})

const emit = defineEmits(['click'])

const handleClick = () => {
  if (props.disabled || props.loading) return
  emit('click')
}

const buttonClass = computed(() => [
  'flex items-center justify-center font-medium transition duration-200',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
  props.class,
  {
    'bg-accent text-white hover:bg-accent-hover focus:ring-accent': props.variant === 'primary',
    'bg-secondary text-white hover:bg-secondary-hover focus:ring-gray-500':
      props.variant === 'secondary',
    'border border-gray-500 bg-transparent text-white hover:bg-gray-800 focus:ring-gray-500':
      props.variant === 'outlined',
    'border-none bg-white text-primary hover:bg-gray-100 focus:ring-primary':
      props.variant === 'flat',
    'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500': props.variant === 'danger',

    'text-sm px-3 py-1': props.size === 'sm' && props.rounded !== 'full',
    'text-base px-4 py-2': props.size === 'md' && props.rounded !== 'full',
    'text-lg px-5 py-3': props.size === 'lg' && props.rounded !== 'full',

    'w-full': props.block,

    'rounded-sm': props.rounded === 'sm',
    'rounded-md': props.rounded === 'md',
    'rounded-lg': props.rounded === 'lg',

    'rounded-full w-8 h-8': props.rounded === 'full' && !props.label,
    'rounded-full w-10 h-10': props.rounded === 'full' && props.size === 'md' && !props.label,
    'rounded-full w-12 h-12': props.rounded === 'full' && props.size === 'lg' && !props.label,
    'rounded-full px-4 py-2': props.rounded === 'full' && props.label,

    'opacity-50 cursor-not-allowed': props.disabled || props.loading,
  },
])
</script>

<template>
  <button
    v-bind="$attrs"
    @click="handleClick"
    :type="type"
    :class="buttonClass"
    :disabled="disabled"
  >
    <span v-if="loading" class="animate-spin mr-2">⏳</span>

    <slot name="prepend"></slot>
    <span v-if="label">{{ label }}</span>
    <slot></slot>
    <slot name="append"></slot>
  </button>
</template>
