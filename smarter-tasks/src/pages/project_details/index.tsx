import React from "react";
import ProjectDetails from "./ProjectDetails";
import { Outlet } from "react-router-dom";
import { TaskProvider } from "../../context/task/context";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <>
    <TaskProvider>
      <ProjectDetails />
      <Outlet />
    </TaskProvider>
    </>
  );
};

export default ProjectDetailsIndex;