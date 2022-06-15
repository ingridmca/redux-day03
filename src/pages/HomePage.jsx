import { useEffect } from "react";
import moment from "moment";
import { fetchPosts } from "../store/feed/thunk";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedPosts } from "../store/feed/selectors";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector(selectFeedPosts);

  return (
    <div>
      <h2>Posts</h2>
      {posts.length === 0
        ? "Loading"
        : posts.map((post) => {
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <div>
                  {moment(post.createdAt).format("DD-MM-YYYY")} &bull;
                  {post.tags.map((tag) => {
                    return <span key={tag.id}>{tag.tag}</span>;
                  })}
                </div>
              </div>
            );
          })}
    </div>
  );
};
export default HomePage;
