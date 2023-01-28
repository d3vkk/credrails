<template>
  <div>
    <div class="bg-white shadow rounded-md">
      <div class="card-title font-bold px-6 py-4">Overview</div>
      <div class="px-6 pt-2 pb-12">
        <ul class="card-body grid grid-cols-4 gap-4">
          <li
            class="py-3 flex flex-col "
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
import OverviewSubCard from "../layouts/OverviewSubCard.vue";
import customerOverview from "../utils/customerOverview";
import CustomerCardDetails from "../types/CustomerCardDetails";

export default defineComponent({
  components: {
    OverviewSubCard,
  },
  setup() {
    const overviewArr: Array<CustomerCardDetails> = [
      {
        title: "Total Inflow (Cr)",
        body: `₦${customerOverview.totalInflow.toLocaleString()}`,
      },
      {
        title: "Total Outflow (Dr)",
        body: `₦${customerOverview.totalOutflow.toLocaleString()}`,
      },
      {
        title: "Closing Balance",
        body: `₦${customerOverview.closingBalance.toLocaleString()}`,
      },
      {
        title: "Average Balance",
        body: `₦${customerOverview.averageBalance.toLocaleString()}`,
      },
      {
        title: "Total Income",
        body: `₦${customerOverview.totalIncome.toLocaleString()}`,
      },
      {
        title: "Total Expenses",
        body: `₦${customerOverview.totalExpenses.toLocaleString()}`,
      },
      {
        title: "Net Income",
        body: `₦${customerOverview.netIncome.toLocaleString()}`,
      },
      {
        title: "Recurring Expenses",
        body: `₦${customerOverview.recurringExpenses.toLocaleString()}`,
      },
      {
        title: "Sweep rate",
        body: `₦${customerOverview.sweepRate.toLocaleString()}`,
      },
      {
        title: "Debt/Income Ratio",
        body: `₦${customerOverview.debtIncomeRatio.toLocaleString()}`,
      },
      {
        title: "Gambling Rate",
        body: `₦${customerOverview.gamblingRate.toLocaleString()}`,
      },
      {
        title: "Savings Rate",
        body: `₦${customerOverview.savingsRate.toLocaleString()}`,
      },
    ];

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
