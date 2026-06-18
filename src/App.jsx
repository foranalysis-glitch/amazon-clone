import { useState } from "react";
import Home from "./Pages/Home";

const App = () => {
 const [searchTerm, setSearchTerm] = useState("");

  return (
  <Home
   searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
     />);
};

export default App;