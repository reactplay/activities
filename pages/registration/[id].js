import { useAuthenticationStatus, useUserData } from "@nhost/nextjs";
import styles from "@/styles/Home.module.css";

import { FiCheckCircle } from "react-icons/fi";
import { NHOST } from "@/services/nhost";
import { useEffect, useState, forwardRef } from "react";
import FormBuilder from "@/components/form-builder";
import { FIELD_TEMPLATE } from "@/services/consts/registration-fields";
import { getAllUsers } from "@/services/graphql/auth";
import { assign_member, get_idea, insert_idea } from "@/services/graphql/ideas";
import {
  PrimaryButton,
  SecondaryOutlinedButtonDark,
} from "@/components/Buttons";
import { useRouter } from "next/router";
import LayoutWrapper from "@/components/LayoutWrapper";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Home() {
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
      const all_apis = [{ name: "users", method: getAllUsers }];
      const promises = [];

      promises.push(
        get_idea(id).then((r) => {
          prepare_idea_object(r);
        })
      );
      all_apis.forEach((api) => {
        promises.push(api.method());
      });

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
                anyField[0].options = rApi;
              }
            } catch (err) {
              // DO NOTHING
            }
          });

          setStoredIdeaData({ ...storedIdeaData });
        })
        .finally(() => {
          setIsDataLoading(false);
        });
    }
  };

  const prepare_idea_object = (idea) => {
    console.log(">>>>>>>>>>>>>>>>");
    console.log(idea);
    formData.id = idea.id;
    formData.title = idea.title;
    formData.description = idea.description;
    formData.member = idea.idea_members_map;
    if (userData.id !== formData.member.id) {
      setAlertOpen(true);
      setPageDisabled(true);
    }
    setFormData({ ...formData });
    setStoredIdeaData({ ...formData });
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
    return <div>Loading data information. Please wait...</div>;
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

  const os = () => {
    alert("here");
  };

  const onSubmit = () => {
    setIsSubmitting(true);
    let idea_id = storedIdeaData.id;
    let selected_users = storedIdeaData.users;
    const idea_object = (({ title, description }) => ({ title, description }))(
      storedIdeaData
    );
    idea_object.owner = userData.id;
    if (!idea_id)
      return insert_idea(idea_object).then((res) => {
        idea_id = res.id;
        if (selected_users && selected_users.length) {
          const promises = [];
          selected_users.forEach((user) => {
            promises.push(assign_member(idea_id, user.id));
          });
          return Promise.all(promises).then((res) => {
            setIsSubmitting(false);
          });
        } else {
          setIsSubmitting(false);
        }
      });
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
            <div className="flex flex-col flex-1 bg-white">
              {pageDisabled ? (
                <div className="absolute flex justify-center items-center w-full h-full z-[99] opacity-60 bg-slate-500">
                  <Alert severity="error">You cannot edit this idea !</Alert>
                </div>
              ) : null}
              <div className="flex-1 px-10 py-8 overflow-auto">
                <form>
                  <FormBuilder
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
                      <SecondaryOutlinedButtonDark>
                        Cancel
                      </SecondaryOutlinedButtonDark>
                    </div>
                  </div>
                  <div className="p-2">
                    <PrimaryButton
                      disabled={isFieldsAreInValid()}
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
