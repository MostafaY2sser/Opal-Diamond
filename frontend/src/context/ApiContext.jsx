
// import { createContext, useContext } from "react";
// import useFetch from "../hooks/useFetch";
// import usePost from "../hooks/usePost";
// import useUpdate from "../hooks/useUpdate";
// import useDelete from "../hooks/useDelete";

// const ApiContext = createContext();

// export function ApiProvider({ children }) {
//   const { fetchData } = useFetch();
//   const { postData } = usePost();
//   const { updateData } = useUpdate();
//   const { deleteData } = useDelete();

//   return (
//     <ApiContext.Provider value={{ fetchData, postData, updateData, deleteData }}>
//       {children}
//     </ApiContext.Provider>
//   );
// }

// export const useApi = () => useContext(ApiContext);
