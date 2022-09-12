import { TextField, FormControl, Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import * as _ from "lodash";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const QuillFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const QuillModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const FormBuilder = ({ fields, data, onChange }) => {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    setFormData({ ...data });
  }, [data]);

  const onDataChanged = (key, value) => {
    formData[key] = value;
    setFormData({ ...formData });
    if (onChange) {
      onChange(formData);
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case "input":
        return (
          <TextField
            id={field.id}
            label={field.plaeholder}
            value={formData[field.datafields]}
            size="small"
            className="w-full"
            {...field}
            onChange={(e) => {
              onDataChanged(field.datafield, e.target.value);
            }}
          />
        );
      case "select":
        return (
          <Autocomplete
            id={field.datafield}
            size="small"
            options={field.options || []}
            getOptionLabel={(option) =>
              option.name || option[field.fieldName] || option
            }
            filterSelectedOptions
            multiple={field.multiple}
            freeSolo={field.freeSolo}
            onChange={(e, newValue) => {
              let updatedval = newValue;
              if (field.multiple) {
                updatedval = [];
                newValue.forEach((v) => {
                  if (_.isObject(v)) {
                    updatedval.push(v);
                  } else {
                    updatedval.push({
                      [field.fieldName || "name"]: v,
                      [field.fieldValue || "value"]: "",
                    });
                  }
                });
              }
              onDataChanged(field.datafield, updatedval);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                placeholder={field.placeholder}
              />
            )}
          />
        );
      case "userlist":
        return (
          <Autocomplete
            id={field.datafield}
            size="small"
            options={field.options || []}
            getOptionLabel={(option) =>
              option.name || option[field.fieldName] || option
            }
            filterSelectedOptions
            multiple={field.multiple}
            freeSolo={field.freeSolo}
            onChange={(e, newValue) => {
              let updatedval = newValue;
              if (field.multiple) {
                updatedval = [];
                newValue.forEach((v) => {
                  if (_.isObject(v)) {
                    updatedval.push(v);
                  } else {
                    updatedval.push({
                      [field.fieldName || "name"]: v,
                      [field.fieldValue || "value"]: "",
                    });
                  }
                });
              }
              onDataChanged(field.datafield, updatedval);
            }}
            renderInput={(params) => (
              <>
                <img src={params} />
                <TextField
                  {...params}
                  size="small"
                  placeholder={field.placeholder}
                />
              </>
            )}
          />
        );
      case "rich":
        return (
          <div className="h-80 py-2">
            <QuillNoSSRWrapper
              placeholder={field.placeholder}
              modules={QuillModules}
              formats={QuillFormats}
              theme="snow"
              className="h-full"
            />
          </div>
        );
      default:
        return <></>;
    }
  };

  const renderForm = () => {
    return (
      <>
        <FormControl className="w-full">
          {fields.map((field, field_key) => {
            return (
              <div className="flex p-2 flex-col" key={field_key}>
                <div>
                  {field.display}
                  {field.required ? "*" : ""}
                </div>
                <div>{renderField(field)}</div>
              </div>
            );
          })}
        </FormControl>{" "}
      </>
    );
  };

  return <>{renderForm()}</>;
};

export default FormBuilder;
