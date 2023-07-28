import { useAuthenticationStatus, useUserData } from "@nhost/nextjs";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import { NHOST } from "@/services/nhost";
import { useEffect, useState } from "react";
import FormBuilder from "@/components/form-builder";
import { FIELD_TEMPLATE } from "@/services/consts/registration-fields";
import { getAllUsers } from "@/services/graphql/auth";
import { assign_member, insert_idea } from "@/services/graphql/ideas";
import {
  PrimaryButton,
  SecondaryOutlinedButtonDark,
} from "@/components/Buttons";
import { useRouter } from "next/router";
import LayoutWrapper from "@/components/LayoutWrapper";
import { update_ideas_status } from "@/services/graphql/status";
import { Config } from "@/services/metadata/hackrplay22";
import { cleanHTMLInput } from "@/components/common/FormatDesc";
export default function Home() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [storedIdeaData, setStoredIdeaData] = useState({});
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const userData = useUserData();

  const Deadline = new Date("July 29, 2023 5:00:00");

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

  const isDeadlinePassed = (deadlineTimeStamp) => {
    const targetDate = new Date(deadlineTimeStamp);

    const currentDate = new Date();

    return currentDate > targetDate;
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
  function processInput(inputStr) {
    // Step 1: Remove all special characters except for "\n"
    const allowedCharacters = /[a-zA-Z0-9\n]/g;
    const cleanedStr = inputStr.replace(allowedCharacters, "");

    // Step 2: Replace "\n" sequences with actual newlines
    const processedStr = cleanedStr.replace(/\\n/g, "\n");

    return processedStr;
  }
  const onSubmit = () => {
    setIsSubmitting(true);
    let idea_id = storedIdeaData.id;
    let selected_users = storedIdeaData.users;
    let updated_desc = cleanHTMLInput(storedIdeaData.description);

    const idea_object = {
      title: storedIdeaData?.title,
      description: cleanHTMLInput(storedIdeaData.description),
    };

    console.log("descp", idea_object, updated_desc);

    idea_object.owner = userData.id;
    if (!idea_id)
      return insert_idea(idea_object).then((res) => {
        idea_id = res.id;
        if (selected_users && selected_users.length) {
          const promises = [];
          console.log(storedIdeaData);
          if (storedIdeaData.users) {
            promises.push(assign_member(idea_id, storedIdeaData.users));
          }
          formData.status = "63c47cd7-f9c4-41e1-87b6-7ebe7b59f00e";
          formData.id = idea_id;
          promises.push(update_ideas_status(formData));
          return Promise.all(promises).then((res) => {
            router.push("/ideas");
            setIsSubmitting(false);
          });
        } else {
          router.push("/ideas");
          setIsSubmitting(false);
        }
      });
  };

  return (
    <LayoutWrapper title="HACK-R-PLAY | Idea Registration" metainfo={Config}>
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
            {isDeadlinePassed(Deadline) ? (
              <div className="  flex justify-center w-full">
                <div className=" p-5 bg-white rounded-md py-20 text-center font-primary tracking-wide w-[85%]">
                  <h2 className="text-5xl mb-10">Sorry!!</h2>
                  <h3 className="text-3xl">Registrations are closed!</h3>
                  <h3 className="text-3xl mt-6">
                    See you in{" "}
                    <span className="text-cyan-500">Hack-R-Play 3.0</span> :)
                  </h3>
                </div>
              </div>
            ) : (
              <div className="flex flex-col flex-1 bg-white">
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
                        handleOnClick={() => onSubmit()}
                      >
                        {`Register Now`}
                        <FiCheckCircle className="ml-2 my-auto" size={20} />
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
