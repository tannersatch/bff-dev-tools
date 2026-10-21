<script setup lang="ts">
import OrgHeader from "./components/OrgHeader.vue";
</script>

<template>
  <UApp>
    <UBanner
      icon="i-lucide-construction"
      title="This site is under active development"
      color="warning"
    />

    <OrgHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
