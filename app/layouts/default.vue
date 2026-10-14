<script setup lang="ts">
import OrgSidebar from "~/components/OrgSidebar.vue";

const changeTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
};
</script>

<template>
  <UDashboardGroup>
    <OrgSidebar />
    <div class="layout-content">
      <UHeader class="layout-header">
        <slot name="header" />
        <template #right>
          <UTooltip text="Expand or collapse sidebar">
            <UDashboardSidebarCollapse />
          </UTooltip>
          <UDashboardSidebarToggle />
        </template>
      </UHeader>
      <UMain class="main-content">
        <slot />
      </UMain>
      <UFooter class="layout-footer">
        <slot name="footer" />
      </UFooter>
    </div>
  </UDashboardGroup>
</template>

<style scoped>
.layout-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
}

.layout-header,
.layout-footer {
  flex-shrink: 0;
}

.main-content {
  flex: 1 1 0%;
  min-height: 0;
  overflow-y: auto;
  padding: 1rem;
}
</style>
