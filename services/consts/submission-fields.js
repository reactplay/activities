export const FIELD_TEMPLATE = [
  {
    datafield: "repository",
    type: "input",
    display: "Source Code Repository",
    placeholder: "Must be public repository url",
    required: true,
  },
  {
    datafield: "application",
    type: "input",
    display: "Application URL",
    placeholder: "URL information where application in hosted",
    required: true,
  },
  {
    datafield: "blog",
    type: "input",
    display: "Article URL",
    placeholder: "Give URL of your application article",
    required: true,
  },

  {
    datafield: "comment",
    type: "input",
    display: "Comment",
    placeholder: "Comment if any",

    rows: 10,
    multiline: true,
  },
];
