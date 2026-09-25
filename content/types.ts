export type Check = {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceSlides: number[];
};
