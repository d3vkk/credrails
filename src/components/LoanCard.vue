<template>
  <div class="w-1/2">
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
import loanAffordability from "../utils/loanAffordability";
import CustomerCardDetails from "../types/CustomerCardDetails";
import RangeList from "../types/RangeList";

export default defineComponent({
  components: {
    CustomerCard,
  },
  setup() {
    const loanArr: Array<CustomerCardDetails> = [
      {
        title: "Qualifies For Loan",
        body: loanAffordability.loanQualification ? "Yes" : "No",
      },
      {
        title: "Recommended Loan Amount",
        body: `₦${loanAffordability.loanAmount.toLocaleString()}`,
      },
      {
        title: "Loan Repayment Probability",
        body: `${loanAffordability.repaymentProbability}%`,
      },
    ];

    const rangeList: RangeList = {
      max: loanAffordability.loanAmountRange.max,
      min: loanAffordability.loanAmountRange.min,
    };
    return {
      loanAffordability,
      loanArr,
      rangeList,
    };
  },
});
</script>

<style scoped></style>
