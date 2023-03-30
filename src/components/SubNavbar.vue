<template>
  <div class="flex flex-row justify-around lg:w-1/2">
    <ul v-for="title in subNavbarTitles" :key="title.id">
      <li class="p-2" :class="{ highlight: title.id === 'BB900' }">
        {{ title.value }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import subNavbarTitles from "../data/subNavbarTitles";

export default defineComponent({
  setup() {
    const isSelected: boolean = false;

    return {
      subNavbarTitles,
      isSelected,
    };
  },
});
</script>

<style scoped>
.highlight {
  color: var(--secondary);
  border-bottom: 2px solid var(--secondary);
}
</style>
