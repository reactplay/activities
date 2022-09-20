import { submit } from "@/services/request";
import * as _ from "lodash";

export const list_statuses = () => {
  const input_obj = {
    display: "List Ideas",
    name: "Hackathon_Status",
    function: "hackathon_status",
    return: ["label", "id"],
  };
  return submit(input_obj);
};

export const update_ideas_status = (idea_object) => {
  let insert_obj = {};
  if (!idea_object.idea_status_map) {
    insert_obj = {
      display: "Update Idea Member",
      name: "Insert_Hackathon_Idea_Status_one",
      function: "insert_hackathon_idea_status_one",
      write: true,
      object: {
        idea_id: idea_object.id,
        status_id: idea_object.status,
      },
      return: ["id"],
    };
  } else {
    insert_obj = {
      display: "Update Idea Member",
      name: "Update_Hackathon_Idea_Status",
      function: "update_hackathon_idea_status",
      write: true,
      value: {
        idea_id: idea_object.id,
        status_id: idea_object.status,
      },
      where: {
        clause: {
          operator: "and",
          conditions: [
            {
              field: "id",
              operator: "eq",
              value: idea_object.idea_status_map.id,
            },
          ],
        },
      },
      return: ["affected_rows"],
    };
  }

  return submit(insert_obj);
};
