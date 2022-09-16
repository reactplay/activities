import { submit } from "@/services/request";
import * as _ from "lodash";

export const createIdeaQuery = {
  display: "Insert Idea",
  name: "Insert_Hackathon_Ideas_One",
  function: "insert_hackathon_ideas_one",
  write: true,
  object: {},
  return: ["id"],
};

export const assignIdeaMembers = {
  display: "Insert Idea",
  name: "Insert_Hackathon_Ideas_Members",
  function: "insert_hackathon_ideas_members_one",
  write: true,
  object: {},
  return: ["id"],
};

export const insert_idea = (idea_object) => {
  const input_obj = { ...createIdeaQuery, ...{ object: idea_object } };
  input_obj.object.hackathon_id = process.env.NEXT_PUBLIC_HACKATHON_ID;
  return submit(input_obj);
};

export const assign_member = (idea_id, user_id) => {
  const input_obj = {
    ...assignIdeaMembers,
    ...{
      object: {
        idea_id: idea_id,
        user_id: user_id,
      },
    },
  };
  return submit(input_obj);
};
