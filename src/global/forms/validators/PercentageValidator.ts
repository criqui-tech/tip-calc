const PercentageValidator = (value: number) => {
  return value >= 0 && value <= 100;
};

export { PercentageValidator };
