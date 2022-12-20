import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import FullScreenLayout from "./components/Layouts/FullScreenLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AuthContext, { useProvideAuth } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContext.Provider value={useProvideAuth()}>
      <Routes>
        <Route path="/" element={<DefaultLayout></DefaultLayout>}>
          <Route index element={<HomePage></HomePage>}></Route>
        </Route>
        <Route path="/login" element={<FullScreenLayout></FullScreenLayout>}>
          <Route index element={<LoginPage></LoginPage>}></Route>
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
