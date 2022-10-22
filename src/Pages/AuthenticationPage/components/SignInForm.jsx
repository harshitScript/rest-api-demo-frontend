import styled from "styled-components";
import { Button3 } from "../../../Components/UI/Button";
import { InputError1 } from "../../../Components/UI/Errors";
import { FaCircleNotch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useSignInUserMutation } from "../../../store/userApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [triggerSignInUser, { isLoading }] = useSignInUserMutation();

  const submitHandler = (validatedData) => {
    const { email, password } = validatedData;

    triggerSignInUser({ body: { email, password } }).then((res) => {
      if (res?.error) {
        toast.error("Error occurred while signing in up user.", {
          position: "top-center",
          style: {
            backgroundColor: "#ffb7",
          },
        });
      } else {
        localStorage.setItem("authToken", res?.data?.authToken);
        localStorage.setItem("expiry", res?.data?.expiry);

        navigate("/posts/1");
      }
    });
  };

  return (
    <>
      <Title className="text-center">Sign-in</Title>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="py-2">
          <input
            type="email"
            placeholder="email"
            name="email"
            className="w-full p-2 rounded-lg bg-inherit border-solid border-2 border-white"
            {...register("email", {
              required: {
                value: true,
                message: "This field is required.",
              },
            })}
          />

          {errors?.email?.message ? (
            <InputError1>{errors?.email?.message}</InputError1>
          ) : (
            <></>
          )}
        </div>
        <div className="py-2">
          <input
            type="password"
            placeholder="password"
            name="password"
            className="w-full p-2 rounded-lg bg-inherit border-solid border-2 border-white"
            {...register("password", {
              required: {
                value: true,
                message: "This field is required.",
              },
              max: {
                value: 15,
                message: "password must be less than 15 characters.",
              },
              min: {
                value: 5,
                message: "password must have more than 5 characters.",
              },
            })}
          />

          {errors?.password?.message ? (
            <InputError1>{errors?.password?.message}</InputError1>
          ) : (
            <></>
          )}
        </div>

        <div className="flex items-center justify-end">
          <Button3 type="submit">
            {isLoading ? (
              <FaCircleNotch color="#fff" className="animate-spin" />
            ) : (
              "Sign-in"
            )}
          </Button3>
        </div>
      </form>
    </>
  );
};

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: left;
  border-bottom: 1px solid #ffb7;
  padding-bottom: 1rem;
`;

export default SignInForm;
