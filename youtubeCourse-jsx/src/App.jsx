import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main className="App">
      <h1>Blog</h1>
      <PostsList />
      <AddPostForm />
    </main>
  );
}

export default App;
