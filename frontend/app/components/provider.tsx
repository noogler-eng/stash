import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <div>
    {children}
  </div>;
}