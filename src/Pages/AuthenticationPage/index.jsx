import { Route, Routes } from "react-router-dom";
import { Card1 } from "../../Components/UI/Card";
import PageLayout1 from "../../Layouts/PageLayout1";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

const AuthenticationPage = () => {
  return (
    <PageLayout1>
      <Card1 className="mt-10 w-3/6 mx-auto mt-10 max-h-100 overflow-y-auto">
        <Routes>
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
        </Routes>
      </Card1>
    </PageLayout1>
  );
};
export default AuthenticationPage;
