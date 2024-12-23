import HomePage from "@/pages/home";
import MainLayout from "@/components/layouts/layout.main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "@/components/layouts/layout.error404";
import CategoriesPage from "@/pages/category";
import ArtistsFeature from "@/features/artist";
import ConcertsFeature from "@/features/concerts";
import UsersFeature from "@/features/user"
import VenueFeature from "@/features/venue";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/categories",
            element: <CategoriesPage />
          },
          {
            path: "/artists",
            element: <ArtistsFeature />
          },
          {
            path: "/concerts",
            element: <ConcertsFeature />
          },
          {
            path: "/user",
            element: <UsersFeature />
          },
          {
            path: "/venue",
            element: <VenueFeature />
          },
        ],
    },
    {
        path: "*",
        element: <Error404 />,
    },
])


export default function Router() {
    return <RouterProvider router={router} />;
}