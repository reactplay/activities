/* eslint-disable @next/next/no-img-element */
import { TextField, FormControl, Autocomplete, Box } from "@mui/material";
import { useEffect, useState } from "react";
import * as _ from "lodash";
import { useUserData } from "@nhost/nextjs";

const FormBuilder = ({ fields, data, onChange, disabled }) => {
  const userData = useUserData();
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

  const getSelectedItem = (options, value) => {
    const item = options.find((opt) => {
      if (opt.id === value) return opt;
    });
    return item || "";
  };

  const renderField = (field) => {
    switch (field.type) {
      case "input":
        return (
          <TextField
            id={field.id}
            label={field.plaeholder}
            value={formData[field.datafield]}
            size="small"
            className="w-full"
            disabled={disabled}
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
            value={getSelectedItem(field.options, formData[field.datafield])}
            disabled={disabled}
            filterSelectedOptions
            multiple={field.multiple}
            freeSolo={field.freeSolo}
            onChange={(e, newValue) => {
              let updatedval = newValue;
              onDataChanged(field.datafield, updatedval.id);
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
          <div>
            <Autocomplete
              id={field.datafield}
              size="small"
              options={
                field.options
                  ? field.options.filter((u) => u.id !== userData.id)
                  : []
              }
              disabled={disabled}
              getOptionLabel={(option) =>
                option.name || option[field.fieldName] || option
              }
              filterSelectedOptions
              value={getSelectedItem(field.options, formData[field.datafield])}
              multiple={field.multiple}
              freeSolo={field.freeSolo}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="40"
                    src={option.avatarUrl}
                    alt=""
                    className="rounded-full"
                  />
                  {option.displayName}
                </Box>
              )}
              onChange={(e, newValue) => {
                let updatedval = newValue;
                onDataChanged(field.datafield, updatedval?.id);
              }}
              renderInput={(params) => (
                <div>
                  <TextField
                    {...params}
                    size="small"
                    placeholder={field.placeholder}
                  />
                </div>
              )}
            />
            <div className="text-slate-400 text-xs	">
              You are already a member, select another person [optional] as your
              partner
            </div>
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
