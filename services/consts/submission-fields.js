export const FIELD_TEMPLATE = [
  {
    datafield: "repository",
    type: "input",
    display: "Repository",
    placeholder: "Must be public repository url",
    required: true,
  },
  {
    datafield: "blog",
    type: "input",
    display: "Blog",
    placeholder: "Blog URL",
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
