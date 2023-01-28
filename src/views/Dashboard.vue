<template>
    <div>
      <div class="w-1/6">
        <Sidebar />
      </div>
      <div class="w-5/6">
        <Navbar />
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

export default defineComponent({
  components: {
    Navbar,
    Sidebar,
  },
});
</script>

<style scoped></style>
