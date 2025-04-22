interface Project {
  id: number;
  name: string;
}
export const initialState: ProjectState = {
  projects: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};
export interface ProjectState {
  projects: Project[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type ProjectsActions =
  | { type: "FETCH_PROJECTS_REQUEST" }
  | { type: "FETCH_PROJECTS_SUCCESS"; payload: Project[] }
  | { type: "FETCH_PROJECTS_FAILURE"; payload: string }
  | { type: "ADD_PROJECT_SUCCESS"; payload: Project };

export const reducer = (
  state: ProjectState = initialState,
  action: ProjectsActions
): ProjectState => {
  // >>> Dialogue one: In switch statement, we will check the action type and return corresponsing state, like we were doing in the if-statements.
  switch (action.type) {
    case "FETCH_PROJECTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_PROJECTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        projects: action.payload,
      };
    case "FETCH_PROJECTS_FAILURE":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_PROJECT_SUCCESS":
      return { 
        ...state, 
        projects: [...state.projects, 
        action.payload] 
      };
    default:
      return state;
  }
};
