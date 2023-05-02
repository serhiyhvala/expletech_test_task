import {Route, Routes} from "react-router-dom";
import Layout from "@components/Layout";

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          Home
        </Route>
      </Routes>
  );
};

export default App;
