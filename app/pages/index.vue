<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import Testimonials from "~/components/Testimonials.vue";

const links = ref<ButtonProps[]>([
  {
    label: "Get started",
    to: "/docs/getting-started",
    icon: "i-lucide-square-play",
  },
  {
    label: "Learn more",
    to: "/docs/getting-started/theme/design-system",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>

<template>
  <UPageHero
    title="One Site to Rule Them All"
    description="Tanner's portfolio, Big Foot Forward LLC, Dev Tools, what more could you ask for?"
    class="hero"
    :links="links"
  />
  <UPage class="page">
    <Testimonials />
  </UPage>
</template>

<style scoped>
.hero {
  background-color: var(--ui-bg);
  background-image:
    radial-gradient(at 75% 75%, light-dark(#ff007b, #950048), transparent 70%),
    radial-gradient(at 15% 59%, light-dark(#00ff77, #007e3b), transparent 70%),
    radial-gradient(at 59% 15%, light-dark(#6e9cf0, #4f70ad), transparent 70%);
}
.page {
  max-width: var(--breakpoint-lg);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
</style>
