import { useState, cloneElement, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api";
import toast from "react-hot-toast";

const PostProvider = ({ children }) => {
  const [post, setPost] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/feed/post/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch(() => {
        toast.error("Error Occurred while fetching post.", {
          position: "top-center",
        });
      });
  }, []);

  if (post) {
    return cloneElement(children, { post });
  }
  return <></>;
};

export default PostProvider;
