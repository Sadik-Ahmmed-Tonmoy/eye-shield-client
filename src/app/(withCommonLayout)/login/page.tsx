import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInputHTML";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import React from "react";
import { LoginWithEmail } from "./LoginWithEmail";
import { BackgroundBeams } from "@/components/ui/background-beams";

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
      <BackgroundBeams />
      <LoginWithEmail />
    </div>
  );
};

export default LoginPage;
