export type Question = {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
};

export const questions: Question[] = [
  {
    id: 1,
    text: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink", "Neigh"],
    correctIndex: 1,
  },
  {
  id: 2,
  text: "Which country is known as the Land of the Rising Sun?",
  options: ["China", "Japan", "South Korea", "Thailand"],
  correctIndex: 1
},

  {
  id: 3,
  text: "Which is the largest ocean on Earth?",
  options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
  correctIndex: 1
},

  {
    id: 4,
    text: "Which animal is the King of the Jungle?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    correctIndex: 0,
  },
];
