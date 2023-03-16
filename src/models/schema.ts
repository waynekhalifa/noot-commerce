export const schema: any = {
  models: {
    Product: {
      fields: {
        name: {
          type: "array",
          required: false,
          items: {
            type: "translation",
          },
        },
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
    },
    Order: {
      fields: {
        items: {
          type: "array",
          required: true,
          items: {
            type: "orderItem",
          },
        },
      },
    },
  },
};
