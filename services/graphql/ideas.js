import { submit } from "@/services/request";
import * as _ from "lodash";
import { FaClosedCaptioning } from "react-icons/fa";
import { insert_ideas_status } from "./status";

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

export const idea_count = (filter, current_user) => {
  const input_obj = {
    display: "Count Ideas",
    name: "Hackathon_Ideas_Aggregate",
    function: "hackathon_ideas_aggregate",
    return: [{ aggregate: ["count"] }],
  };
  if (filter && filter.owner && filter.owner === "me" && current_user) {
    input_obj.where = {
      clause: {
        class: "idea_owner_map",
        operator: "and",
        conditions: [
          {
            field: "id",
            operator: "eq",
            value: current_user,
          },
        ],
      },
    };
  }

  if (filter && filter.status_filter) {
    input_obj.where = {
      clause: {
        class: "idea_idea_status_map",
        operator: "and",
        conditions: [
          {
            field: "status_id",
            operator: "eq",
            value: filter.status_filter,
          },
        ],
      },
    };
  }

  return submit(input_obj).then((res) => {
    return res && res.aggregate ? res.aggregate.count : 0;
  });
};

export const list_ideas = (filter, current_user) => {
  const input_obj = {
    display: "List Ideas",
    name: "hackathon_ideas",
    function: "hackathon_ideas",
    orders: [{ field: "created_at", value: "desc" }],
    return: [
      "description",
      "title",
      "created_at",
      "id",
      {
        idea_idea_status_map: {
          idea_status_status_map: ["label"],
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
      {
        idea_comments_map_aggregate: {
          aggregate: ["count"],
        },
      },
      {
        idea_like_map_aggregate: {
          aggregate: ["count"],
        },
      },
    ],
    distinct: "id",
  };
  if (filter.pagesize) {
    input_obj.limit = filter.pagesize;
  }
  if (filter.page) {
    input_obj.offset = (filter.page - 1) * filter.pagesize;
  }

  if (filter.sort_col) {
    input_obj.orders = [
      {
        field: filter.sort_col,
        value:
          filter.sort_asc === undefined || filter.sort_asc ? "asc" : "desc",
      },
    ];
  }
  if (filter.status_filter) {
    input_obj.where = {
      clause: {
        class: "idea_idea_status_map",
        operator: "and",
        conditions: [
          {
            field: "status_id",
            operator: "eq",
            value: filter.status_filter,
          },
        ],
      },
    };
  }

  if (filter.owner && filter.owner === "me" && current_user) {
    input_obj.where = {
      clause: {
        class: "idea_owner_map",
        operator: "and",
        conditions: [
          {
            field: "id",
            operator: "eq",
            value: current_user,
          },
        ],
      },
    };
  }

  return submit(input_obj).then((res) => {
    const s_col = filter && filter.sort_col ? filter.sort_col : "created_at";
    const s_type = filter && filter.sort_asc ? filter.sort_asc : false;
    let sorted = [];
    // if (sort_col === 'liked') {
    // 	sorted = _.orderBy(
    // 		res,
    // 		[(element) => element.idea_like_map_aggregate.aggregate.count],
    // 		[s_type ? 'asc' : 'desc']
    // 	);
    // } else {
    sorted = _.orderBy(
      res,
      [(element) => element[s_col].toLowerCase()],
      [s_type ? "asc" : "desc"]
    );
    // }
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
        idea_idea_status_map: [
          "date",
          { idea_status_status_map: ["label", "id"] },
        ],
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
      {
        idea_comments_map_aggregate: {
          aggregate: ["count"],
        },
      },
      {
        idea_like_map_aggregate: {
          aggregate: ["count"],
        },
      },
      {
        idea_comments_map: [
          "comment",
          "date",
          { idea_comment_user_map: ["displayName", "avatarUrl"] },
        ],
      },
      {
        idea_like_map: ["user_id"],
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
  let insert_obj = undefined;

  if (idea_object.users) {
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
  }
};

export const insert_idea_submission = (idea_object) => {
  console.log(idea_object);

  idea_object.status = process.env.NEXT_PUBLIC_HACKATHON_SUBMIT_STATUS_ID;
  const insert_submission = {
    display: "Insert Idea Submission",
    name: "Insert_Hackathon_Idea_Submission_One",
    function: "insert_hackathon_idea_submission_one",
    write: true,
    object: {
      idea_id: idea_object.id,
      repository_url: idea_object.repository,
      blog_url: idea_object.blog,
      application: idea_object.application,
      comment: idea_object.comment,
    },
    return: ["id"],
  };

  return submit(insert_submission);
};
