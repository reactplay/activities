import { useAuthenticationStatus, useUserData } from "@nhost/nextjs";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { NHOST } from "../services/nhost";
import { useEffect, useState } from "react";
import FormBuilder from "@/components/form-builder";
import { FIELD_TEMPLATE } from "@/services/consts/registration-fields";
import { Button } from "@mui/material";
import { getAllUsers } from "@/services/graphql/auth";

export default function Home() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [storedData, setStoredData] = useState({});
  const [formData, setFormData] = useState({});

  const userData = useUserData();

  const initializeData = () => {
    if (Object.keys(storedData).length === 0) {
      setIsDataLoading(true);
      const all_apis = [{ name: "user", method: getAllUsers }];
      const promises = [];
      all_apis.forEach((api) => {
        promises.push(api.method());
      });

      Promise.all(promises)
        .then((res) => {
          res.forEach((rApi, rApi_ind) => {
            const api_obj = all_apis[rApi_ind];
            storedData[api_obj.name] = rApi;
            const anyField = FIELD_TEMPLATE.filter((field) => {
              return field.datafield === api_obj.name;
            });
            if (anyField.length) {
              anyField[0].options = rApi;
            }
          });
          setStoredData({ ...storedData });
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

  const onChange = (data) => {
    setFormData({ ...data });
  };

  const onSubmit = () => {};

  return (
    <div className="w-full h-full flex flex-col justify-center items-center create-plays-wrapper">
      <div>
        <span className="title-primary">
          Register your <strong>idea</strong>
        </span>
      </div>
      <div className="w-full h-full max-w-6xl flex bg-white shadow-md rounded mb-6">
        <div className="flex flex-col flex-1">
          <div className="h-14 p-8">
            Welcome <strong>{userData.displayName}</strong>, log your idea
          </div>

          <div className="flex-1 px-10 py-8 overflow-auto">
            <form>
              <FormBuilder
                fields={FIELD_TEMPLATE}
                onChange={(data) => onChange(data)}
              />
            </form>
          </div>
          <div className="h-14">
            <hr />
            <div className="p-8 h-full flex items-center">
              <Button
                size="small"
                variant="contained"
                disabled={isFieldsAreInValid()}
                onClick={() => onSubmit()}
              >
                Create the awesome
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return null;
}
