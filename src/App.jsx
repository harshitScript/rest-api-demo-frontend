import PostsPage from "./Pages/PostsPage";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import ViewPostPage from "./Pages/ViewPostPage";
import EditPostPage from "./Pages/EditPost";
import PostProvider from "./Pages/EditPost/PostProvider";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/view-post/:id" element={<ViewPostPage />} />
        <Route
          path="/edit-post/:id"
          element={
            <PostProvider>
              <EditPostPage />
            </PostProvider>
          }
        />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
