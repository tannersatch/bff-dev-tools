<script setup lang="ts">
import BFFHeader from "./components/BFFHeader.vue";
</script>

<template>
  <UApp>
    <UBanner
      icon="i-lucide-construction"
      title="This site is under active development"
      color="warning"
    />

    <BFFHeader />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UFooter />
  </UApp>
</template>
