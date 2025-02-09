<script setup>
defineProps({
  modelValue: String,
  label: String,
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: 'Enter text...' },
  disabled: { type: Boolean, default: false },
  class: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="flex flex-col space-y-1">
    <label v-if="label" class="text-text-secondary text-sm">{{ label }}</label>
    <div class="relative flex items-center gap-2">
      <slot name="prepend"></slot>
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="class"
        @input="onInput"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
      <slot name="append"></slot>
    </div>
  </div>
</template>
