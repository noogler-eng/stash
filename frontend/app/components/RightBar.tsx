'use client'
import { GoogleLogin } from "@react-oauth/google";

export default function RightBar() {
  return (
    <div>
      <div>
        <GoogleLogin
            onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            }}
            onError={() => {
            console.log("Login Failed");
            }}
        />
      </div>
    </div>
  );
}
