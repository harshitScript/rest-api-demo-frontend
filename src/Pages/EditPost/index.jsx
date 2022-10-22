import PageLayout1 from "../../Layouts/PageLayout1";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { fileObjectToLocalURL } from "../../utils";
import { Button2, Button3 } from "../../Components/UI/Button";

import { PreviewImg } from "../../Components/UI/previewImage";
import { useEditPostMutation } from "../../store/feedApi";

const EditPostPage = ({ post }) => {
  const { id } = useParams();

  const [triggerEditPost, { isLoading }] = useEditPostMutation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      title: post.title,
      description: post.description,
    },
  });

  const cancelHandler = () => {
    navigate("/posts");
  };

  const submitHandler = ({ title, description, image }) => {
    //* Converting JS data to Form generated data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image[0]);

    triggerEditPost({ body: formData, id }).then((res) => {
      setLoading(false);
      if (res?.error) {
        toast.error("Error occurred while updating post.", {
          position: "top-center",
          style: {
            backgroundColor: "#ffb7",
          },
        });
      } else {
        toast.success("Post Update successfully!", {
          position: "top-center",
          style: {
            backgroundColor: "#ffb7",
          },
        });
      }
    });
  };

  return (
    <PageLayout1>
      <section className="w-full mt-20">
        <div className="w-2/5 mx-auto rounded drop-shadow-2xl">
          <Title className="text-center">Edit Form</Title>
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
                  src={fileObjectToLocalURL(
                    watch("image") ? watch("image")[0] : ""
                  )}
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
              <Button2 onClick={cancelHandler}>Cancel</Button2>
              <Button3 type="submit">
                Update
                {isLoading ? (
                  <FaCircleNotch color="#fff" className="animate-spin" />
                ) : (
                  <></>
                )}
              </Button3>
            </div>
          </form>
        </div>
      </section>
    </PageLayout1>
  );
};

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default EditPostPage;
