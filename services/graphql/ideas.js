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

export const idea_count = () => {
  const input_obj = {
    display: "Count Ideas",
    name: "Hackathon_Ideas_Aggregate",
    function: "hackathon_ideas_aggregate",
    return: [{ aggregate: ["count"] }],
  };

  return submit(input_obj).then((res) => {
    return res && res.aggregate ? res.aggregate.count : 0;
  });
};

export const list_ideas = (
  page_no,
  sort_by = "created_at",
  sort_key = "asc",
  page_size = 12
) => {
  const input_obj = {
    display: "List Ideas",
    name: "hackathon_ideas",
    function: "hackathon_ideas",
    offset: (page_no - 1) * page_size,
    limit: page_size,
    orders: [
      {
        field: sort_by,
        value: sort_key,
      },
    ],
    return: [
      "description",
      "title",
      "created_at",
      "id",
      {
        idea_status_map: {
          status_id_map: ["label"],
        },
      },
      {
        "idea_members_map ": [
          "id",
          {
            user_id_map: ["avatarUrl", "displayName"],
          },
        ],
      },
      {
        idea_owner_map: ["avatarUrl", "displayName"],
      },
    ],
    distinct: "id",
  };
  return submit(input_obj).then((res) => {
    const sorted = _.orderBy(
      res,
      [(element) => element[sort_by].toLowerCase()],
      [sort_key]
    );
    return sorted;
  });
};

export const get_idea = (id) => {
  const input_obj = {
    display: "List Ideas",
    name: "hackathon_ideas",
    function: "hackathon_ideas",
    where: {
      clause: {
        operator: "and",
        conditions: [
          {
            field: "id",
            operator: "eq",
            value: id,
          },
        ],
      },
    },

    return: [
      "description",
      "title",
      "id",
      {
        idea_status_map: ["id", { status_id_map: ["label", "id"] }],
      },
      {
        "idea_members_map ": [
          "id",
          {
            user_id_map: ["avatarUrl", "displayName", "id"],
          },
        ],
      },
      {
        idea_owner_map: ["avatarUrl", "displayName", "id"],
      },
    ],
  };
  return submit(input_obj).then((res) => {
    return res[0];
  });
};

export const update_ideas_demographic = (idea_object) => {
  const insert_obj = {
    display: "Update Idea",
    name: "Update_Hackathon_Ideas",
    function: "update_hackathon_ideas",
    write: true,
    value: {
      title: idea_object.title,
      description: idea_object.description,
    },
    where: {
      clause: {
        operator: "and",
        conditions: [
          {
            field: "id",
            operator: "eq",
            value: idea_object.id,
          },
        ],
      },
    },
    return: ["affected_rows"],
  };

  return submit(insert_obj);
};

export const update_ideas_member = (idea_object) => {
  let insert_obj = {};

  if (!idea_object.idea_members_map) {
    insert_obj = {
      display: "Insert Idea Member",
      name: "Insert_Hackathon_Ideas_Members_One",
      function: "insert_hackathon_ideas_members_one",
      write: true,
      object: {
        idea_id: idea_object.id,
        user_id: idea_object.users,
      },
      return: ["id"],
    };
  } else {
    insert_obj = {
      display: "Update Idea Member",
      name: "Update_Hackathon_Ideas_Members",
      function: "update_hackathon_ideas_members",
      write: true,
      value: {
        idea_id: idea_object.id,
        user_id: idea_object.users,
      },
      where: {
        clause: {
          operator: "and",
          conditions: [
            {
              field: "id",
              operator: "eq",
              value: idea_object.idea_members_map.id,
            },
          ],
        },
      },
      return: ["affected_rows"],
    };
  }

  return submit(insert_obj);
};
