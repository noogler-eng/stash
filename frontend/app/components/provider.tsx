import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Provider({ children }: { children: React.ReactNode }) {
    const clientId: string = process.env.CLIENT_ID || "";
    console.log('clientId: ',clientId);
    return <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>;
}
