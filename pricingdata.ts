interface Price {
  id: number;
  name: string;
  price: string;
  details: string;
  more: string;
}

export const price: Price[] = [
  {
    id: 1,
    name: "For Starter",
    price: "$59",
    details:
      "Feedback Categorization\nFeatures prioritization\nReal-time collaboration\nFeedback loop notifications\nEssential dev tools integrations",
    more: "Request Demo",
  },
  {
    id: 2,
    name: "For Teams",
    price: "$99",
    details:
      "Feedback Categorization\nFeatures prioritization\nReal-time collaboration\nFeedback loop notifications\nEssential dev tools integrations",
      more: "Request Demo",
    },
  {
    id: 3,
    name: "For Company",
    price: "Custom",
    details:
      "Feedback Categorization\nFeedback loop notifications\nEssential dev tools integrations",
      more: "Request Demo",
    },
];

const extractedBenefits: string[] = price.flatMap((item) =>
  item.details.split("\n")
);

console.log(extractedBenefits);
