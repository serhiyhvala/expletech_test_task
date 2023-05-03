import {Route, Routes} from "react-router-dom";
import Layout from "@components/Layout";
import Home from "@pages/Home";
import PostItem from "@components/PostItem";

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='/post/:id' element={<PostItem/>}/>
        </Route>
      </Routes>
  );
};

export default App;
