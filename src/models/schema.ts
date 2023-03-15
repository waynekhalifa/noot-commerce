export const schema = {
  models: {
    Product: {
      description: {
        type: "array",
        required: false,
        items: {
          type: "translation",
        },
      },
      items: {
        type: "array",
        required: true,
        items: {
          type: "productItem",
        },
      },
      category: {
        type: "integer",
        required: true,
      },
    },
    Order: {
      items: {
        type: "array",
        required: true,
        items: {
          type: "orderItem",
        },
      },
    },
  },
};
