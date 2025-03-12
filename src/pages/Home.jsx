import Posts from "../components/Posts";
import { withDataFetching } from "../hocs/withDataFetching";

const PostsWithFetching = withDataFetching(
  Posts,
  "https://jsonplaceholder.typicode.com/posts"
);

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Home Page.</p>
    <PostsWithFetching />
  </div>
);

export default Home;
