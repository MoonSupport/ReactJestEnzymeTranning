import { useDispatch, useSelector } from "react-redux";
import ShareButton from "../components/button";
import { getPostsAction } from "../reducers/post/reducer";
import ListItem from "../components/listitem";

const Index = () => {
  const posts = useSelector(state => {
    return state.posts.posts;
  });

  const configButton = {
    buttonText: "Get posts"
  };
  return (
    <div>
      <ShareButton {...configButton} />
      {posts.length &&
        posts.map((post, index) => {
          const { title, body } = post;
          const configListItem = {
            title,
            description: body
          };
          return <ListItem key={index} {...configListItem} />;
        })}
    </div>
  );
};

export default Index;
