import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
// import BlogPage, { loader as postsLoader } from './pages/Blog';
// import PostPage, { loader as postLoader } from "./pages/Post";

const BlogPage = lazy(() => import("./pages/Blog"));
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          // { index: true, element: <BlogPage />, loader: postsLoader },
          // { path: ':id', element: <PostPage />, loader: postLoader },
          {
            index: true,
            element: (
              <Suspense
                fallback={
                  <p style={{ textAlign: "center" }}>blogs are loading...</p>
                }
              >
                <BlogPage />
              </Suspense>
            ),
            loader: () =>
              import("./pages/Blog").then((module) => module.loader()),
          },
          {
            path: ":id",
            element: (
              <Suspense
                fallback={
                  <p style={{ textAlign: "center" }}>post is loading ...</p>
                }
              >
                <PostPage />
              </Suspense>
            ),
            // loader: ({ params }) =>
            //   import("./pages/Post").then((module) =>
            //     module.loader({ params })
            //   ),
            loader: (meta) =>
              import("./pages/Post").then((module) => module.loader(meta)),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
