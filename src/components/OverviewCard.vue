<template>
 <div class="flex flex-row justify-center ">
    <div class="bg-white shadow rounded-md">
      <div class="card-title font-bold px-6 py-4">Overview</div>
      <div class="px-6 pt-2 pb-12">
        <ul class="card-body grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-4 gap-x-20 md:gap-x-36 lg:gap-x-36 lg:px-4">
          <li
            class="py-3 flex flex-col"
            v-for="body in overviewArr"
            :key="body.title"
          >
            <div class="card-details-title">{{ body.title }}</div>
            <div class="font-bold">{{ body.body }}</div>
          </li>
        </ul>
      </div>
    </div>
 </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import { overviewArr } from "../utils/customerCardData";

export default defineComponent({
  setup() {
    return {
      overviewArr,
    };
  },
});
</script>

<style scoped>
.card-title {
  color: var(--primary);
  border-bottom: 2px solid var(--gray-100);
}

.card-details-title {
  font-weight: 300;
}

</style>
