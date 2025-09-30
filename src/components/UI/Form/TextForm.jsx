"use client"

import React from "react";
import {Form, Input} from "@heroui/react";

const TextForm = ({label, text}) => {
  // const [submitted, setSubmitted] = React.useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  };

  return (
    <Form className="w-full max-w-xs" onSubmit={onSubmit}>
      <Input
        isRequired
        errorMessage={`Please enter a valid ${text}`}
        label={label}
        labelPlacement="outside"
        name={text}
        placeholder={`Enter your ${text}`}
        type={text}
      />
      {/* {submitted && (
        <div className="text-small text-default-500">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )} */}
    </Form>
  );
}

export default TextForm