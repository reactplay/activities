import { useAuthenticationStatus, useUserData } from "@nhost/nextjs";
import styles from "@/styles/Home.module.css";

import { FiCheckCircle } from "react-icons/fi";
import { NHOST } from "@/services/nhost";
import { useEffect, useState, forwardRef } from "react";
import FormBuilder from "@/components/form-builder";
import { FIELD_TEMPLATE } from "@/services/consts/submission-fields";
import { getAllUsers } from "@/services/graphql/auth";
import { get_idea, insert_idea_submission } from "@/services/graphql/ideas";
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
  insert_ideas_status,
  list_statuses,
  update_ideas_status,
  get_latest_status,
} from "@/services/graphql/status";
import { escape_new_line } from "@/services/util/string";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SubmitIdea() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const [userId, setUserId] = useState("");
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ideaObject, setIdeaObject] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);
  const [pageDisabled, setPageDisabled] = useState(false);

  const userData = useUserData();
  const router = useRouter();
  const { id } = router.query;

  const initializeData = () => {
    setIsDataLoading(true);
    get_idea(id).then((r) => {
      const status = get_latest_status(r);
      if (userData.id !== r.idea_owner_map.id) {
        setAlertOpen(true);
        setPageDisabled(true);
      }
      if (
        status &&
        status.id === process.env.NEXT_PUBLIC_HACKATHON_SUBMIT_STATUS_ID
      ) {
        router.push("../../ideas");
      } else {
        setIdeaObject(r);
        setIsDataLoading(false);
      }
    });
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
            `${protocol}://${host}${port}/hackrplay/2022/submit/${id}`
          );
          window.location = external_path;
        }
      } else {
        initializeData();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      if (tmpl.required && (!ideaObject || !ideaObject[tmpl.datafield])) {
        res = true;
      }
    });
    return res;
  };

  const onIdeaDataChanged = (data) => {
    setIdeaObject({ ...data });
  };

  const onSubmit = () => {
    setIsSubmitting(true);
    ideaObject.status = process.env.NEXT_PUBLIC_HACKATHON_SUBMIT_STATUS_ID;
    ideaObject.comment = escape_new_line(ideaObject.comment);
    console.log(ideaObject);
    Promise.all([
      insert_idea_submission(ideaObject),
      insert_ideas_status(ideaObject),
    ]).then((res) => {
      router.push("..");
    });
  };
  const onCancelClicked = () => {
    router.push("..");
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
                Idea Submission
              </h2>
            </div>
            <div className={`flex flex-col flex-1 bg-white`}>
              {alertOpen ? (
                <Alert severity="error">
                  You cannot submit this idea. Only author can edit an idea.
                </Alert>
              ) : (
                <div className="p-4">
                  Congratulations <strong>{userData.displayName}</strong> for
                  completing your idea for HACK-R-PLAY
                </div>
              )}

              <div className="flex flex-col flex-1 px-10 py-4 overflow-auto">
                <div className="flex px-2">
                  <div className="2xl">
                    <strong>Idea Title</strong> :{" "}
                  </div>
                  <div> {ideaObject.title}</div>
                </div>
                <form>
                  <FormBuilder
                    disabled={pageDisabled}
                    data={ideaObject}
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
                    >
                      Submit
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
