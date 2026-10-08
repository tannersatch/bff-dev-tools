<script setup lang="ts">
import AtomButton from "~/components/atoms/AtomButton.vue";

const changeTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
};
</script>

<template>
  <header>
    <slot name="header">
      <nav>
        <AtomButton @click="navigateTo('/')">Home</AtomButton>
        <AtomButton @click="navigateTo('/about')">About</AtomButton>
      </nav>
      <div class="theme-switcher">
        <AtomButton @click="changeTheme('light')" class="badge"
        >Light</AtomButton>
        <AtomButton
          variant="secondary"
          @click="changeTheme('dark')"
          class="badge"
        >Dark</AtomButton>
        <AtomButton
          variant="tertiary"
          @click="changeTheme('green')"
          class="badge"
        >Green</AtomButton>
      </div>
    </slot>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <slot name="footer">
      Default footer content
    </slot>
  </footer>
</template>

<style>
header {
  background: var(--color-surface);
  color: var(--color-on-surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 2rem;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.theme-switcher {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

main {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
}

footer {
  background: var(--color-surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 2rem;
  text-align: center;
}
</style>
