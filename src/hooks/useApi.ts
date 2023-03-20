import { useDispatch } from "react-redux";

import useResource from "@/resources/useResource";
import { schema } from "@/models/schema";
import { camelCaseToSpaces, convertToCamelCase } from "@/helpers/utils";
import { IApiVariables, IFormField } from "@/models/app";
import { FieldTypes, InputTypes, Resources } from "@/constants/enums";
import { setListing, setSelected } from "@/store/resourceSlice";

const useApi = (params: IApiVariables) => {
  const { slug, singleName } = params;
  const dispatch = useDispatch();
  const resource = useResource();

  const api: any = {};

  for (let page of Object.values(Resources)) {
    if (slug === page) {
      if (resource[`${convertToCamelCase(page)}Fetch`]) {
        api.fetch = resource[`${convertToCamelCase(page)}Fetch`];
      }

      if (resource[`${convertToCamelCase(page)}Get`]) {
        api.get = resource[`${convertToCamelCase(page)}Get`];
      }

      if (resource[`${convertToCamelCase(page)}Create`]) {
        api.create = resource[`${convertToCamelCase(page)}Create`];
      }

      if (resource[`${convertToCamelCase(page)}Update`]) {
        api.update = resource[`${convertToCamelCase(page)}Update`];
      }

      if (resource[`${convertToCamelCase(page)}Trash`]) {
        api.trash = resource[`${convertToCamelCase(page)}Trash`];
      }

      if (resource[`${convertToCamelCase(page)}BulkTrash`]) {
        api.bulkTrash = resource[`${convertToCamelCase(page)}BulkTrash`];
      }

      if (resource[`${convertToCamelCase(page)}Remove`]) {
        api.remove = resource[`${convertToCamelCase(page)}Remove`];
      }

      if (resource[`${convertToCamelCase(page)}Options`]) {
        api.options = resource[`${convertToCamelCase(page)}Options`];
      }

      if (resource[`${convertToCamelCase(page)}HeadCells`]) {
        api.headCells = resource[`${convertToCamelCase(page)}HeadCells`];
      }

      if (resource[`${convertToCamelCase(page)}DataCells`]) {
        api.dataCells = resource[`${convertToCamelCase(page)}DataCells`];
      }

      if (resource[`${convertToCamelCase(page)}Model`]) {
        api.model = resource[`${convertToCamelCase(page)}Model`];
      }

      // create form field array
      if (singleName) {
        const fields: IFormField[] = [];

        for (let attribute of Object.entries(
          schema.models[singleName].fields
        )) {
          const key = attribute[0];
          const value: any = attribute[1];

          if (value.type === FieldTypes.ARRAY) {
            if (value.items.type === "translation") {
              const field: IFormField = {
                name: key,
                label: camelCaseToSpaces(key),
                type:
                  value.type === "boolean"
                    ? InputTypes.CHECKBOX
                    : InputTypes.TEXT,
              };

              if (fields.length === 0) {
                field.autoFocus = true;
              }

              fields.push(field);
            }

            if (value.items.type === "productItem") {
              fields.push(
                {
                  type: InputTypes.TEXT,
                  name: "quantity",
                  label: "Quantity",
                  autoFocus: fields.length === 0 ? true : false,
                },
                {
                  type: InputTypes.TEXT,
                  name: "price",
                  label: "Price",
                },
                {
                  type: InputTypes.TEXT,
                  name: "discount",
                  label: "Discount",
                },
                {
                  type: InputTypes.TEXT,
                  name: "product",
                  label: "Product",
                }
              );
            }
          }

          if (value.type === FieldTypes.INTEGER) {
            fields.push({
              type: InputTypes.TEXT,
              name: key,
              label: key,
            });
          }
        }

        api.fields = fields;
      }
    }
  }

  console.log("api", api);

  api.changeListing = (listing: Readonly<Record<string, any>>[]) =>
    dispatch(setListing(listing));
  api.changeSelected = (model: any) => dispatch(setSelected(model));

  return api;
};

export default useApi;
