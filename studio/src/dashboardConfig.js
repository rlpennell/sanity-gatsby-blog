export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "631134e6bac025087cde584a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uo5rqs2g",
                  apiId: "31603a44-7bab-49a9-aaf4-d4e51634685c",
                },
                {
                  buildHookId: "631134e70d6d560513ac6898",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-j3ft95f6",
                  apiId: "c27be243-66a0-4717-8fe2-e2a47b2bdbbf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rlpennell/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-j3ft95f6.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
