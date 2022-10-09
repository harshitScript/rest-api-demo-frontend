import { memo, useState } from "react";
import { Button2, Button3 } from "./UI/Button";
import { useForm } from "react-hook-form";
import { InputError1 } from "./UI/Errors";
import axios from "axios";
import { FaCircleNotch } from "react-icons/fa";
import styled from "styled-components";
import { fileObjectToLocalURL } from "../utils";

const CreatePostForm = ({ onCancel = () => {} }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      title: "I'm Feeling Good !",
      description: "I m on my first solo trip to the mountains. 🌄",
    },
  });

  const submitHandler = ({ title, description, image }) => {
    // ? Validated form data here

    setLoading(true);

    axios
      .post("http://localhost:4000/feed/add-post", {
        title,
        description,
        /* image: image[0], */
      })
      .then((res) => {
        reset();
        setLoading(false);
        console.log("The response =>", res);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="py-2">
        <input
          type="text"
          placeholder="title"
          name="title"
          className="w-full p-2 rounded-lg bg-inherit border-solid border-2 border-white"
          {...register("title", {
            minLength: {
              value: 10,
              message: "Title must have 10 Characters",
            },
            maxLength: {
              value: 25,
              message: "Title must have less than 25 Characters",
            },
            required: {
              value: true,
              message: "Field is Required.",
            },
            pattern: {
              value: /^[a-zA-Z\s0-9#!']{10,}$/,
              message: "Enter a valid title.",
            },
          })}
        />
        {errors?.title?.message ? (
          <InputError1>{errors?.title?.message}</InputError1>
        ) : (
          <></>
        )}
      </div>
      <div className="py-2 ">
        <input
          type="file"
          placeholder="Upload files"
          name="image"
          accepts="image/*"
          className="w-full p-2 rounded-lg bg-inherit border-solid border-2 border-white"
          {...register("image", {
            required: {
              value: true,
              message: "Field is Required.",
            },
          })}
        />
        {errors?.image?.message ? (
          <InputError1>{errors?.image?.message}</InputError1>
        ) : (
          <></>
        )}
      </div>
      {fileObjectToLocalURL(watch("image") ? watch("image")[0] : "") ? (
        <div className="py-2">
          <PreviewImg
            src={fileObjectToLocalURL(watch("image") ? watch("image")[0] : "")}
            alt="preview"
          />
        </div>
      ) : (
        <></>
      )}
      <div className="py-2">
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 rounded-lg bg-inherit border-solid border-2 border-white"
          rows="6"
          {...register("description", {
            required: {
              value: true,
              message: "Field is Required.",
            },
            minLength: {
              value: 15,
              message: "Description must have 15 Characters",
            },
          })}
        />
        {errors?.description?.message ? (
          <InputError1>{errors?.description?.message}</InputError1>
        ) : (
          <></>
        )}
      </div>
      <div className="flex items-center justify-end">
        <Button2 onClick={onCancel}>Cancel</Button2>
        <Button3 type="submit">
          Continue
          {loading ? (
            <FaCircleNotch color="#fff" className="animate-spin" />
          ) : (
            <></>
          )}
        </Button3>
      </div>
    </form>
  );
};

const PreviewImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export default memo(CreatePostForm);
