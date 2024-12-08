import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main className="App">
      <h1>Blog</h1>
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
