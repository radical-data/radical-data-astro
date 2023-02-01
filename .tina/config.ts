import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "src/assets/media",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "src/content/projects",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          { type: "string", name: "extract", label: "Extract", required: true },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: ["preparing", "active", "dormant", "complete"],
            required: true,
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
            required: true,
          },
          {
            type: "string",
            name: "attribution",
            label: "Attribution",
            list: true,
          },
          {
            type: "string",
            name: "collaborators",
            label: "Collaborators",
            list: true,
          },
          {
            type: "string",
            name: "externalLink",
            label: "External Link",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "event",
        label: "Events",
        path: "src/content/events",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.title
                ?.toLowerCase()
                .replace(/ /g, "-")
                .replace("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", "")}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "datetime",
            name: "endDate",
            label: "End Date",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "string",
            name: "link",
            label: "Link",
            list: true,
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
          },
        ],
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "src/content/testimonials",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.title
                ?.toLowerCase()
                .replace(/ /g, "-")
                .replace("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", "")}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: true,
          },
          {
            type: "reference",
            name: "related",
            label: "Related",
            collections: ["event"],
          },
        ],
      },
    ],
  },
});
