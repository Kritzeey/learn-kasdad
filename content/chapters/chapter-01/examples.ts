export type ComputerRecord = {
  age: string;
  income: string;
  student: "yes" | "no";
  credit: string;
  buys: "yes" | "no";
};

// Exact row order and displayed values from lecturer slide 43.
export const computerRecords: ComputerRecord[] = [
  { age: "<= 30", income: "high", student: "no", credit: "fair", buys: "no" },
  {
    age: "<= 30",
    income: "high",
    student: "no",
    credit: "excellent",
    buys: "no",
  },
  {
    age: "31...40",
    income: "high",
    student: "no",
    credit: "fair",
    buys: "yes",
  },
  { age: "> 40", income: "medium", student: "no", credit: "fair", buys: "yes" },
  { age: "> 40", income: "low", student: "yes", credit: "fair", buys: "yes" },
  {
    age: "> 40",
    income: "low",
    student: "yes",
    credit: "excellent",
    buys: "no",
  },
  {
    age: "31...40",
    income: "low",
    student: "yes",
    credit: "excellent",
    buys: "yes",
  },
  { age: "<= 30", income: "medium", student: "no", credit: "fair", buys: "no" },
  { age: "<= 30", income: "low", student: "yes", credit: "fair", buys: "yes" },
  {
    age: "> 40",
    income: "medium",
    student: "yes",
    credit: "fair",
    buys: "yes",
  },
  {
    age: "<= 30",
    income: "medium",
    student: "yes",
    credit: "excellent",
    buys: "yes",
  },
  {
    age: "31...40",
    income: "medium",
    student: "no",
    credit: "excellent",
    buys: "yes",
  },
  {
    age: "31...40",
    income: "high",
    student: "yes",
    credit: "fair",
    buys: "yes",
  },
  {
    age: "> 40",
    income: "medium",
    student: "no",
    credit: "excellent",
    buys: "no",
  },
];
