<template>
  <div id="dashboard" class="flex flex-row">
    <div class="w-1/6">
      <Sidebar />
    </div>
    <ul class="w-5/6 px-6">
      <li><Navbar /></li>
      <li><ProfileCard /></li>
      <li><SubNavbar /></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import ProfileCard from "../components/ProfileCard.vue";
import SubNavbar from "../components/SubNavbar.vue";

export default defineComponent({
  components: {
    Navbar,
    Sidebar,
    ProfileCard,
    SubNavbar,
  },
});
</script>

<style scoped>
#dashboard{
  background-color: #F9FBFC;
}

li {
  @apply my-6;
}
</style>
