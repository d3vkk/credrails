<template>
  <div id="dashboard" class="flex flex-row">
    <div class="w-1/6">
      <Sidebar />
    </div>
    <ul class="w-5/6 px-6">
      <li><Navbar /></li>
      <li><ProfileCard /></li>
      <li><SubNavbar /></li>
      <li><LoanCard /></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import ProfileCard from "../components/ProfileCard.vue";
import SubNavbar from "../components/SubNavbar.vue";
import LoanCard from "../components/LoanCard.vue";

export default defineComponent({
  components: {
    Navbar,
    Sidebar,
    ProfileCard,
    SubNavbar,
    LoanCard,
  },
});
</script>

<style scoped>
#dashboard {
  background-color: #f9fbfc;
}

li {
  @apply my-6;
}
</style>
