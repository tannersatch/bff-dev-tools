<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import OrgIcon from "./OrgIcon.vue";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    active: route.path === "/",
  },
  {
    label: "About",
    to: "/about",
    active: route.path === "/about",
  },
  {
    label: "Dev Tools",
    to: "/tools",
    active: route.path === "/tools",
  },
]);
</script>

<template>
  <UHeader>
    <template #title>
      <OrgIcon />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UHeader>
</template>
