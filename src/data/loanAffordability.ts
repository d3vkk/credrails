import LoanAffordability from "../types/LoanAffordability";

const loanAffordability: LoanAffordability = {
  loanQualification: true,
  loanAmount: 300000,
  repaymentProbability: 80,
  loanAmountRange: {
    max: 400000,
    min: 200000,
  },
};

export default loanAffordability;
