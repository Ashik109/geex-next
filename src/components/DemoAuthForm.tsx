"use client";

import { useState, type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"form"> & { preview: string };

export default function DemoAuthForm({ children, preview, ...attributes }: Props) {
  const [message, setMessage] = useState("");
  return (
    <form {...attributes} method="post" onSubmit={event => {
      event.preventDefault();
      setMessage(preview === "forgot-password"
        ? "Reset form validated. The demo does not send email."
        : "Form validated. This is an account UI preview.");
    }}>
      {children}
      {message && <p role="status" className="mt-3">{message}</p>}
    </form>
  );
}
