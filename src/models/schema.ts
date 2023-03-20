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
        category: {
          type: "integer",
          required: true,
        },
        items: {
          type: "array",
          required: true,
          items: {
            type: "productItem",
          },
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
    Category: {
      fields: {
        name: {
          type: "integer",
          required: true,
        },
      },
    },
  },
};
