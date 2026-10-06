<template>
  <label
    class="toggle-button"
    :class="{ checked: modelValue, disabled: disabled }"
    :style="{ width: width + 'px', backgroundColor: modelValue ? color.checked : color.unchecked }"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.checked)"
    >
    <span class="toggle-button-label">{{ modelValue ? labels.checked : labels.unchecked }}</span>
    <span class="toggle-button-knob" />
  </label>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 50
    },
    color: {
      type: Object,
      default: () => ({ checked: '#75C791', unchecked: '#BFCBD9' })
    },
    labels: {
      type: Object,
      default: () => ({ checked: 'on', unchecked: 'off' })
    }
  },
  emits: ['update:modelValue']
}
</script>

<style>
.toggle-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 22px;
  margin-right: 4px;
  border-radius: 11px;
  color: #FFFFFF;
  font-size: 10px;
  font-weight: 600;
  line-height: 22px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  transition: background-color 300ms;
}
.toggle-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.toggle-button input {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: inherit;
}
.toggle-button:has(input:focus-visible) {
  outline: 2px solid #2c3e50;
  outline-offset: 2px;
}
.toggle-button-label {
  display: block;
  padding: 0 10px 0 25px;
  text-align: right;
}
.toggle-button.checked .toggle-button-label {
  padding: 0 25px 0 10px;
  text-align: left;
}
.toggle-button-knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #FFFFFF;
  transition: left 300ms;
}
.toggle-button.checked .toggle-button-knob {
  left: calc(100% - 19px);
}
</style>
