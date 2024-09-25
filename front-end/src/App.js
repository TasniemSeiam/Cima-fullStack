// import NavBar from "./Components/NavBar";
// import MoviePage from "./pages/Movie";
import { RouterProvider } from "react-router-dom"
import router from "./routes/MovieRoutes";
function App() {
  return (
    <>
      {/*<NavBar />*/}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
