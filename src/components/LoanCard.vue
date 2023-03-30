<template>
  <div>
    <CustomerCard
      :cardTitle="'Loan affordability'"
      :cardList="loanArr"
      :rangeList="rangeList"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerCard from "../layouts/CustomerCard.vue";
import loanAffordability from "../data/loanAffordability";
import RangeList from "../types/RangeList";
import { loanArr } from "../data/customerCardData";

export default defineComponent({
  components: {
    CustomerCard,
  },
  setup() {
    const rangeList: RangeList = {
      max: loanAffordability.loanAmountRange.max,
      min: loanAffordability.loanAmountRange.min,
    };
    return {
      loanArr,
      rangeList,
    };
  },
});
</script>

<style scoped></style>
