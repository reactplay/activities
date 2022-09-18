export const FIELD_TEMPLATE = [
  {
    datafield: "title",
    type: "input",
    display: "Title",
    placeholder: "Idea title",
    required: true,
  },
  {
    datafield: "users",
    type: "userlist",
    display: "Member",
    placeholder: "Select team members",
    max: 2,
    options: [],
    fieldName: "displayName",
  },
  ,
  {
    datafield: "description",
    type: "rich",
    display: "Description",
    placeholder: "Describe your idea",
    required: true,
  },
];
