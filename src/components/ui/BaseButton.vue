<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: String,
  type: { type: String, default: "button" },
  variant: { type: String, default: "primary" },
  size: { type: String, default: "md" },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  rounded: { type: String, default: "sm" },
  class: { type: String, default: "" }, 
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  console.log('clicked')
  if (props.disabled || props.loading) return;
  emit("click");
}

const buttonClass = computed(() => [
  "flex items-center justify-center font-medium transition duration-200",
  "focus:outline-none focus:ring-2 focus:ring-offset-2",
  props.class,
  {
    "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500": props.variant === "primary",
    "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-500": props.variant === "secondary",
    "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500": props.variant === "danger",
    "px-3 py-1 text-sm": props.size === "sm",
    "px-4 py-2 text-base": props.size === "md",
    "px-5 py-3 text-lg": props.size === "lg",
    "w-full": props.block,
    "rounded": props.rounded === "sm",
    "rounded-md": props.rounded === "md",
    "rounded-lg": props.rounded === "lg",
    "rounded-full": props.rounded === "full",
    "opacity-50 cursor-not-allowed": props.disabled || props.loading,
  }
]);
</script>

<template>
  <button v-bind="$attrs" @click="handleClick" :type="type" :class="buttonClass" :disabled="disabled">
    <span v-if="loading" class="animate-spin mr-2">⏳</span>
    <slot name="prepend"></slot>
    {{ label }}
    <slot name="append"></slot>
  </button>
</template>
