import { useAuthenticationStatus, useUserData } from "@nhost/nextjs";
import styles from "@/styles/Home.module.css";

import { FiCheckCircle } from "react-icons/fi";
import { NHOST } from "@/services/nhost";
import { useEffect, useState, forwardRef } from "react";
import FormBuilder from "@/components/form-builder";
import { FIELD_TEMPLATE } from "@/services/consts/registration-update-fields";
import { getAllUsers } from "@/services/graphql/auth";
import {
  assign_member,
  get_idea,
  insert_idea,
  update_ideas_demographic,
  update_ideas_member,
} from "@/services/graphql/ideas";
import {
  PrimaryButton,
  SecondaryOutlinedButtonDark,
} from "@/components/Buttons";
import { useRouter } from "next/router";
import LayoutWrapper from "@/components/LayoutWrapper";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { submit } from "json-graphql-parser/v2";
import {
  get_latest_status,
  insert_ideas_status,
  list_statuses,
  update_ideas_status,
} from "@/services/graphql/status";
import { escape_new_line, unescape_new_line } from "@/services/util/string";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RegistrationEdit() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [storedIdeaData, setStoredIdeaData] = useState({});
  const [formData, setFormData] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);
  const [pageDisabled, setPageDisabled] = useState(false);

  const userData = useUserData();
  const router = useRouter();
  const { id } = router.query;

  const initializeData = () => {
    if (Object.keys(storedIdeaData).length === 0) {
      setIsDataLoading(true);
      const all_apis = [
        { name: "users", method: getAllUsers },
        {
          name: "status",
          method: list_statuses,
          post_method: remove_submitted_status,
        },
      ];
      const promises = [];

      all_apis.forEach((api) => {
        promises.push(api.method());
      });

      promises.push(
        get_idea(id).then((r) => {
          const status = get_latest_status(r);
          r.description = unescape_new_line(r.description);
          if (
            status &&
            status.id === process.env.NEXT_PUBLIC_HACKATHON_SUBMIT_STATUS_ID
          ) {
            router.push("../ideas");
          } else {
            prepare_idea_object(r);
          }
        })
      );
      Promise.all(promises)
        .then((res) => {
          res.forEach((rApi, rApi_ind) => {
            try {
              const api_obj = all_apis[rApi_ind];
              storedIdeaData[api_obj.name] = rApi;
              const anyField = FIELD_TEMPLATE.filter((field) => {
                return field.datafield === api_obj.name;
              });
              if (anyField.length) {
                anyField[0].options = api_obj.post_method
                  ? api_obj.post_method(rApi)
                  : rApi;
              }
            } catch (err) {
              // IGNORE
            }
          });

          setStoredIdeaData({ ...storedIdeaData });
        })
        .finally(() => {
          setIsDataLoading(false);
        });
    }
  };

  const remove_submitted_status = (all_statuses) => {
    return all_statuses.filter(
      (s) => s.id !== process.env.NEXT_PUBLIC_HACKATHON_SUBMIT_STATUS_ID
    );
  };

  const prepare_idea_object = (idea) => {
    if (idea.idea_members_map) {
      idea.users = idea.idea_members_map.user_id_map.id;
    }
    if (idea.idea_idea_status_map) {
      idea.status = get_latest_status(idea);
      const all_statuses = [];

      idea.idea_idea_status_map.forEach((st) => {
        all_statuses.push(st.idea_status_status_map);
      });
      const last_status = all_statuses[all_statuses.length - 1];
      idea.status = last_status?.id;
    }
    if (userData.id !== idea.idea_owner_map.id) {
      setAlertOpen(true);
      setPageDisabled(true);
    }
    setFormData({ ...idea });
    setStoredIdeaData({ ...idea });
  };

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        if (typeof window !== "undefined") {
          const protocol = process.env.NEXT_PUBLIC_PROTOCOL
            ? process.env.NEXT_PUBLIC_PROTOCOL
            : "https";
          const host = window.location.hostname;
          const port = process.env.NEXT_PUBLIC_DEV_PORT
            ? `:${process.env.NEXT_PUBLIC_DEV_PORT}`
            : "";
          const external_path = NHOST.AUTH_URL(
            `${protocol}://${host}${port}/registration`
          );
          window.location = external_path;
        }
      } else {
        initializeData();
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h5 className={styles.title}>
            Loading authentication information. Please wait.
          </h5>
        </main>
      </div>
    );
  }

  if (isDataLoading) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h5 className={styles.title}>
            Checking authentication status. Please wait.
          </h5>
        </main>
      </div>
    );
  }

  const isFieldsAreInValid = () => {
    let res = false;
    FIELD_TEMPLATE.forEach((tmpl) => {
      if (tmpl.required && (!formData || !formData[tmpl.datafield])) {
        res = true;
      }
    });
    return res;
  };

  const onIdeaDataChanged = (data) => {
    setFormData({ ...data });
    setStoredIdeaData({ ...data });
  };

  const onSubmit = () => {
    setIsSubmitting(true);

    const idea_object = (({ title, description }) => ({
      title,
      description,
    }))(storedIdeaData);
    idea_object.owner = userData.id;
    formData.description = idea_object.description = escape_new_line(
      idea_object.description
    );
    const promises = [];

    promises.push(update_ideas_demographic(formData));
    promises.push(update_ideas_member(formData));
    if (formData.status) {
      promises.push(insert_ideas_status(formData));
    }

    Promise.all(promises).then((res) => {
      router.push("../ideas");
    });
  };

  const onCancelClicked = () => {
    router.push("../ideas");
  };

  return (
    <LayoutWrapper title="HACK-R-PLAY | Idea Registration">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-full max-w-6xl flex shadow-md rounded mb-6 z-[9]">
          <div className="flex flex-col flex-1">
            <div className="h-14 p-16 flex  items-center justify-center">
              <h2
                className={`font-primary text-5xl uppercase text-white tracking-wide ${styles["page-title"]}`}
              >
                Registration
              </h2>
            </div>
            <div className={`flex flex-col flex-1 bg-white`}>
              <div className="flex-1 px-10 py-8 overflow-auto">
                {" "}
                {alertOpen ? (
                  <Alert severity="error">
                    You cannot edit this idea. Only author can edit an idea.
                  </Alert>
                ) : null}
                <form>
                  <FormBuilder
                    disabled={pageDisabled}
                    data={formData}
                    fields={FIELD_TEMPLATE}
                    onChange={(data) => onIdeaDataChanged(data)}
                  />
                </form>
              </div>
              <div>
                <hr />
                <div className="py-4 px-10 h-full flex justify-end">
                  <div className="p-2">
                    <div>
                      <SecondaryOutlinedButtonDark
                        handleOnClick={() => onCancelClicked()}
                      >
                        Cancel
                      </SecondaryOutlinedButtonDark>
                    </div>
                  </div>
                  <div className="p-2">
                    <PrimaryButton
                      disabled={isFieldsAreInValid() || pageDisabled}
                      handleOnClick={() => onSubmit()}
                      onClick={() => os()}
                    >
                      Update Idea
                      <FiCheckCircle className="ml-2 my-auto" size={20} />
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
