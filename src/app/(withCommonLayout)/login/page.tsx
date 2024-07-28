import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInputHTML";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import React from "react";
import { LoginWithEmail } from "./LoginWithEmail";


const LoginPage = () => {
  interface FormValues {
    input: string;
  }

  const handleSubmit = (data: FormValues, reset: () => void) => {
    console.log("Form Data:", data);
    reset(); // Reset the form if needed
  };

  return (
    <div>
      <LoginWithEmail />
    </div>
  );
};

export default LoginPage;
