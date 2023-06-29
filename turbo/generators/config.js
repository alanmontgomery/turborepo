module.exports = function generator(plop) {
  plop.setGenerator("component", {
    description:
      "This will create a new React component for you in the /ui package",
    prompts: [
      {
        type: "input",
        name: "file",
        message: "What is the name of the new component to create?",
        validate: (input) => {
          if (input.includes(".")) {
            return "file name cannot include an extension";
          }
          if (input.includes(" ")) {
            return "file name cannot include spaces";
          }
          if (!input) {
            return "file name is required";
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/{{ pascalCase file }}.js",
        templateFile: "templates/component.hbs",
      },
      {
        type: 'modify',
        path: '{{ turbo.paths.root }}/packages/ui/index.js',
        pattern: /(\/\/ COMPONENT EXPORTS)/g,
        template: 'export * from \'./{{file}}\';\n$1',
    },
    ],
  });
};
