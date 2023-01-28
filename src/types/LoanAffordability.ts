interface LoanAffordability {
  loanQualification: boolean;
  loanAmount: number;
  repaymentProbability: number;
  loanAmountRange: {
    max: number;
    min: number;
  };
}

export default LoanAffordability;
