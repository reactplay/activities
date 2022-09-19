import { useAuthenticationStatus, useUserData } from "@nhost/nextjs";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { NHOST } from "../services/nhost";
import { useEffect, useState } from "react";
import FormBuilder from "@/components/form-builder";
import { FIELD_TEMPLATE } from "@/services/consts/registration-fields";
import { Button } from "@mui/material";
import { getAllUsers } from "@/services/graphql/auth";
import { assign_member, insert_idea } from "@/services/graphql/ideas";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Home() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [storedIdeaData, setStoredIdeaData] = useState({});
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const userData = useUserData();

  const initializeData = () => {
    if (Object.keys(storedIdeaData).length === 0) {
      setIsDataLoading(true);
      const all_apis = [{ name: "users", method: getAllUsers }];
      const promises = [];
      all_apis.forEach((api) => {
        promises.push(api.method());
      });

      Promise.all(promises)
        .then((res) => {
          res.forEach((rApi, rApi_ind) => {
            const api_obj = all_apis[rApi_ind];
            storedIdeaData[api_obj.name] = rApi;
            const anyField = FIELD_TEMPLATE.filter((field) => {
              return field.datafield === api_obj.name;
            });
            if (anyField.length) {
              anyField[0].options = rApi;
            }
          });
          setStoredIdeaData({ ...storedIdeaData });
        })
        .finally(() => {
          setIsDataLoading(false);
        });
    }
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

  const onSubmit = () => {
    setIsSubmitting(true);
    let idea_id = storedIdeaData.id;
    let selected_users = storedIdeaData.users;
    const idea_object = (({ title, description }) => ({ title, description }))(
      storedIdeaData
    );
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
    <Layout
      title="HACK-R-PLAY - Registration"
      description="A hackathon hosted by ReactPlay"
    >
      <div className="w-full h-full flex flex-col justify-center items-center create-plays-wrapper">
        <div className="w-full h-full max-w-6xl flex shadow-md rounded mb-6">
          <div className="flex flex-col flex-1 bg-white">
            <div className="h-14 p-8">
              Welcome <strong>{userData.displayName}</strong>, log your idea
            </div>

            <div className="flex-1 px-10 py-8 overflow-auto">
              <form>
                <FormBuilder
                  fields={FIELD_TEMPLATE}
                  onChange={(data) => onIdeaDataChanged(data)}
                />
              </form>
            </div>
            <div>
              <hr />
              <div className="p-8 h-full flex items-center">
                <PrimaryButton
                  disabled={isFieldsAreInValid()}
                  onClick={() => onSubmit()}
                >
                  Log your idea{" "}
                </PrimaryButton>
                <div className="p-2">
                  <Link href={"/"}>
                    <a className="uppercase mr-16 text-lg tracking-widest">
                      Cancel
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
