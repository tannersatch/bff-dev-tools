<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "tertiary";
    disabled?: boolean;
  }>(),
  {
    type: "button",
    variant: "primary",
    disabled: false,
  },
);
</script>

<template>
  <button
    :class="[props.variant]"
    :type="props.type"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  font-family: var(--font-family-brand);
  font-size: var(--font-body-medium);
  padding: var(--spacing-small) var(--spacing-medium);
  border-radius: var(--radius-large);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}
button.primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
  border: none;
}
button.secondary {
  background: transparent;
  color: var(--color-secondary);
  border: 1px solid var(--color-outline);
}
button.tertiary {
  background: transparent;
  color: var(--color-tertiary);
  border: none;
}
button.primary:hover {
  background: var(--color-primary-container);
  color: var(--color-on-primary-container);
}
button.secondary:hover {
  background: var(--color-secondary-container);
  color: var(--color-on-secondary-container);
}
button.tertiary:hover {
  background: var(--color-tertiary-container);
  color: var(--color-on-tertiary-container);
}
button:active {
  filter: brightness(0.9);
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
