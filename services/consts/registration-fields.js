export const FIELD_TEMPLATE = [
  {
    datafield: "title",
    type: "input",
    display: "Title",
    placeholder: "Idea title",
    required: true,
  },
  {
    datafield: "description",
    type: "rich",
    display: "Description",
    placeholder: "Describe your idea",
    required: true,
  },
  {
    datafield: "user",
    type: "userlist",
    display: "Members",
    placeholder: "Select team members",
    multiple: true,
    max: 2,
    options: [],
    fieldName: "displayName",
  },
];
