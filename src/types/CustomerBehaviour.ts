interface CustomerBehaviour {
  incomeSources: number;
  otherLoans: number;
  mobileMoneyLoans: {
    amount: number;
    percentage: number;
  };
  sportBetting: {
    amount: number;
    percentage: number;
  };
  schoolFees: number;
}

export default CustomerBehaviour;
