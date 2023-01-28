import loanAffordability from "../utils/loanAffordability";
import customerBehaviour from "../utils/customerBehaviour";
import customerOverview from "../utils/customerOverview";
import CustomerCardDetails from "../types/CustomerCardDetails";

export const loanArr: Array<CustomerCardDetails> = [
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

export const behaviourArr: Array<CustomerCardDetails> = [
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
    body: `₦${customerBehaviour.mobileMoneyLoans.amount.toLocaleString()} (${
      customerBehaviour.mobileMoneyLoans.percentage
    }%)`,
  },
  {
    title: "Sport betting",
    body: `₦${customerBehaviour.sportBetting.amount.toLocaleString()} (${
      customerBehaviour.sportBetting.percentage
    }%)`,
  },
  {
    title: "School fees",
    body: `₦${customerBehaviour.schoolFees.toLocaleString()}`,
  },
];

export const overviewArr: Array<CustomerCardDetails> = [
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
