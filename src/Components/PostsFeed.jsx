import { Card1 } from "./UI/Card";
import { GiAmericanFootballBall } from "react-icons/gi";
import { useEffect, useState } from "react";
import axios from "axios";

const PostsFeed = () => {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/feed/posts")
      .then((res) => {
        setLoading(false);
        console.log("The response =>", res);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  return loading ? (
    <Card1 className="w-3/6 mx-auto mt-10 h-40 grid place-items-center">
      <GiAmericanFootballBall
        size={40}
        color={"#ffb7"}
        className="animate-bounce"
      />
    </Card1>
  ) : (
    <Card1 className="w-3/6 mx-auto mt-10 max-h-80 overflow-y-auto"></Card1>
  );
};

export default PostsFeed;
