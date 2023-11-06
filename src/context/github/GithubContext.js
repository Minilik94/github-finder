import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

// This is how you do it with useState the above is using reducer

// import { createContext, useState } from "react";

// const GithubContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// export const GithubProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchUsers = async () => {
//     const response = await fetch(`${GITHUB_URL}/users`, {
//       headers: {
//         Authorization: `token ${GITHUB_TOKEN}`,
//       },
//     });
//     const data = await response.json();
//     setUsers(data);
//     setLoading(false);
//   };

//   return (
//     <GithubContext.Provider value={{ users, loading, fetchUsers }}>
//       {children}
//     </GithubContext.Provider>
//   );
// };

// export default GithubContext
