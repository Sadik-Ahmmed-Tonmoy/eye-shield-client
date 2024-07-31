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
    <div className="dark:bg-dot-white/[0.3] bg-dot-black/[0.3] pb-3">
      <LoginWithEmail />
    </div>
  );
};

export default LoginPage;
