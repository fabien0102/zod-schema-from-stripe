import { generateSchemaTypes } from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  stripe: {
    from: {
      source: "url",
      url: "https://api.apis.guru/v2/specs/stripe.com/2020-08-27/openapi.json",
    },
    outputDir: "src/stripe",
    to: async (context) => {
      await generateSchemaTypes(context, {
        filenamePrefix: "stripe",
      });
    },
  },
});
