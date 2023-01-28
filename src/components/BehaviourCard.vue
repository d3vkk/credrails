<template>
  <div>
    <CustomerCard :cardTitle="'Behavioural'" :cardList="behaviourArr" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerCard from "../layouts/CustomerCard.vue";
import customerBehaviour from "../utils/customerBehaviour";
import CustomerCardDetails from "../types/CustomerCardDetails";

export default defineComponent({
  components: {
    CustomerCard,
  },
  setup() {
    const behaviourArr: Array<CustomerCardDetails> = [
      {
        title: "Multiple sources of income",
        body: customerBehaviour.incomeSources
          ? `Yes (${customerBehaviour.incomeSources})`
          : "No",
      },
      {
        title: "Other Loans",
        body: customerBehaviour.otherLoans
          ? `Yes (₦${customerBehaviour.otherLoans.toLocaleString()})`
          : "No",
      },
      {
        title: "Mobile Money Loans",
        body: `₦${customerBehaviour.mobileMoneyLoans.amount.toLocaleString()} (${customerBehaviour.mobileMoneyLoans.percentage}%)`,
      },
      {
        title: "Sport betting",
        body: `₦${customerBehaviour.sportBetting.amount.toLocaleString()} (${customerBehaviour.sportBetting.percentage}%)`,
      },
      {
        title: "School fees",
        body: `₦${customerBehaviour.schoolFees.toLocaleString()}`,
      },
    ];

    return {
      behaviourArr,
    };
  },
});
</script>

<style scoped></style>
