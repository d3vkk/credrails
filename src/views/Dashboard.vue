<template>
  <div class="w-1/6">
    <Sidebar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";

export default defineComponent({
  components: {
    Sidebar,
  },
});
</script>

<style scoped></style>
