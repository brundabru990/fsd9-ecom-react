import { Outlet, useNavigation } from "react-router-dom";
import './App.css';
import Navbar from "./app/pages/Navbar/Navbar";

function App() {
  const { state } = useNavigation();
  return (
    <>
    <Navbar></Navbar>
     <Outlet />
    {/* <main style={{ marginBlock: "60px", flexGrow: 1, position: "relative" }}>
                    {state === "loading"}
                   
      </main> */}
    </>
  );
}

export default App;
