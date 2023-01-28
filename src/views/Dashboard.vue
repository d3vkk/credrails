<template>
  <div id="dashboard" class="flex flex-row">
    <div class="lg:w-1/6">
      <Sidebar />
    </div>
    <ul class="lg:w-5/6 px-6">
      <li><Navbar /></li>
      <li><ProfileCard /></li>
      <li><SubNavbar /></li>
      <li>
        <ul class="customercards flex flex-col md:flex-col items-center lg:flex-row">
          <li class="lg:mr-6"><LoanCard /></li>
          <li><BehaviourCard/></li>
        </ul>
        <div><OverviewCard/></div>
      </li>
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
import BehaviourCard from "../components/BehaviourCard.vue";
import OverviewCard from "../components/OverviewCard.vue";

export default defineComponent({
  components: {
    Navbar,
    Sidebar,
    ProfileCard,
    SubNavbar,
    LoanCard,
    BehaviourCard,
    OverviewCard,
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

.customercards{
  @apply md:my-6
}

.customercards li {
  @apply lg:my-6 md:my-0 my-0 lg:w-1/2 md:w-3/4 w-full lg:mb-0 mb-6 ;

}
.customercards li:first-child {
  @apply lg:mb-0 md:mb-6;
}
</style>
