import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";

import Home from "./Front-End/Home";
import '@/index.css';  // Make sure this resolves properly

const paths = [
  {
    path: '/',
    element: (
      <Home />
    ),
  },
];

const BrowserRouter = createBrowserRouter(paths);

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={BrowserRouter} />
    </MantineProvider>
  );
};

export default App;