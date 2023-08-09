import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./libs/fetchProducts";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";

function App() {
  const route = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/product/:id", element: <DetailPage /> },
    { path: "/product/edit/:id", element: <EditPage /> },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={route} />
    </QueryClientProvider>
  );
}

export default App;
