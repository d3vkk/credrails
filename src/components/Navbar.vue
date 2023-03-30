<template>
  <div class="flex flex-row justify-between items-center">
    <div class="rounded-full shadow-md p-2 bg-white">
      <span v-html="iconArrowBack"></span>
    </div>
    <div
      class="btn-primary px-2 py-2 bg-red-100 text-red-700 shadow-md rounded-md"
    >
      Upload Statement
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { iconArrowBack } from "../data/icons";

export default defineComponent({
  setup() {
    return {
      iconArrowBack,
    };
  },
});
</script>

<style scoped>
.btn-primary {
  color: var(--white);
  background-color: var(--secondary);
}
</style>
