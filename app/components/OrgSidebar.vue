<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[][] = [[{
  label: "Home",
  icon: "i-lucide-house",
  active: true,
}, {
  label: "Inbox",
  icon: "i-lucide-inbox",
  badge: "4",
}, {
  label: "Contacts",
  icon: "i-lucide-users",
}, {
  label: "Settings",
  icon: "i-lucide-settings",
  defaultOpen: true,
  children: [{
    label: "General",
  }, {
    label: "Members",
  }, {
    label: "Notifications",
  }],
}], [{
  label: "Feedback",
  icon: "i-lucide-message-circle",
  to: "https://github.com/nuxt-ui-templates/dashboard",
  target: "_blank",
}, {
  label: "Help & Support",
  icon: "i-lucide-info",
  to: "https://github.com/nuxt/ui",
  target: "_blank",
}]];
</script>

<template>
  <UDashboardSidebar
    class="min-h-0 min-w-0 overflow-hidden"
    resizable
    collapsible
    :min-size="22"
    :default-size="35"
    :max-size="40"
    :collapsed-size="0"
  >
    <template #default="{ collapsed }">
      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[0]"
        orientation="vertical"
      />
    </template>
  </UDashboardSidebar>
</template>
