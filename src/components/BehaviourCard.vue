<template>
  <div>
    <CustomerCard :cardTitle="'Behavioural'" :cardList="behaviourArr" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerCard from "../layouts/CustomerCard.vue";
import { behaviourArr } from "../data/customerCardData";

export default defineComponent({
  components: {
    CustomerCard,
  },
  setup() {
    return {
      behaviourArr,
    };
  },
});
</script>

<style scoped></style>
