<template>
  <div
    id="sidebar"
    class="py-4 shadow-md flex-col lg:flex items-between justify-between hidden md:hidden"
  >
    <div>
      <div class="sidebar-img rounded-full px-6 mx-4">
        <img src="/img/credrails-logo.webp" alt="Credrails Logo" />
      </div>
      <ul class="py-4">
        <li>
          <div v-html="iconGridView"></div>
          <div>Dashboard</div>
        </li>
        <li class="highlight">
          <div v-html="iconGroups"></div>
          <div>Customers</div>
        </li>
        <li>
          <div v-html="iconReport"></div>
          <div>Reports</div>
        </li>
        <li>
          <div v-html="iconSettings"></div>
          <div>Settings</div>
        </li>
      </ul>
    </div>
    <div>
      <div class="px-6"><hr /></div>
      <div class="px-6">
        <div
          class="btn-logout mt-6 justify-center px-2 py-2 bg-red-100 text-red-700 shadow-md rounded-md"
        >
          <div>Logout</div>
          <span v-html="iconLogout"></span>
        </div>
      </div>
      <div class="text-center px-6 pt-3">
        <a href="http://github.com/d3vkk/credrails">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  iconGridView,
  iconGroups,
  iconReport,
  iconSettings,
  iconLogout,
} from "../data/icons";

export default defineComponent({
  setup() {
    return {
      iconGridView,
      iconGroups,
      iconReport,
      iconSettings,
      iconLogout,
    };
  },
});
</script>

<style scoped>
#sidebar {
  background-color: var(--primary);
  color: var(--white);
  font-size: var(--font-medium);
  height: 100%;
}

.highlight {
  background-color: var(--secondary);
}
.sidebar-img {
  background-color: var(--white);
}

li,
.btn-logout {
  @apply flex flex-row;
  cursor: pointer;
}

li {
  @apply py-4 px-6;
}
li div:first-child,
.btn-logout div:first-child {
  @apply mr-2;
}

a {
  text-decoration: underline;
}
a:hover {
  text-decoration: none;
  color: var(--secondary);
}

img {
  height: 45px;
  width: 145px;
}
</style>
