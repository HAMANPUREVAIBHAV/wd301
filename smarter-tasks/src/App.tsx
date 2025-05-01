import { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import { CommentProvider } from "./context/comment/context";
const App = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Apply the dark class to the <html> element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="h-screen w-full mx-auto py-2">
      <ProjectsProvider>
        <MembersProvider>
          <CommentProvider>
          <RouterProvider router={router} />
          </CommentProvider>
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
};

export default App;