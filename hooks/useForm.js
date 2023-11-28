"use client";
import { useState } from "react";

export const useForm = (initialValues = {}, callback) => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = (e) => {
    // if (e) e.preventDefault();
    callback(values);
  };

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  return {
    values,
    handleSubmit,
    handleChange,
  };
};
