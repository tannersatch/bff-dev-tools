<template>
  <UHeader>
    <slot name="header">
      <nav>
        <UButton @click="navigateTo('/')">Home</UButton>
        <UButton @click="navigateTo('/about')">About</UButton>
      </nav>
    </slot>
    <template #right>
      <UTooltip text="Expand or collapse sidebar">
        <UDashboardSidebarCollapse />
      </UTooltip>
      <UDashboardSidebarToggle />
    </template>
  </UHeader>
</template>
