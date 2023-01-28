<template>
  <div class="bg-white shadow rounded-md">
    <div class="card-title font-bold px-6 py-4">{{ cardTitle }}</div>
    <ul class="card-body px-6 pt-2 pb-12">
      <li
        class="py-3 flex flex-row justify-between"
        v-for="body in cardList"
        :key="body.title"
      >
        <div class="card-details-title">{{ body.title }}</div>
        <div class="font-bold">{{ body.body }}</div>
      </li>
      <Rangebar :maxNum="rangeList!.max" :minNum="rangeList!.min" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerCardDetails from "../types/CustomerCardDetails";
import Rangebar from "./Rangebar.vue";

export default defineComponent({
  props: {
    cardTitle: { type: String, required: true },
    cardList: { type: Array<CustomerCardDetails>, required: true },
    rangeList: { type: Object, required: false },
  },
  components: {
    Rangebar,
  },
  setup(props) {
    return {
      cardTitle: props.cardTitle,
      cardList: props.cardList,
      rangeList: props.rangeList,
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
