import { Route, Routes } from "react-router-dom";

import { ErrorsList } from "./features/errors/pages/ErrorsList";
import { ErrorNew } from "./features/errors/pages/ErrorNew";
import { ErrorDetail } from "./features/errors/pages/ErrorDetail";
import { ErrorEdit } from "./features/errors/pages/ErrorEdit";
import { Toaster } from "./components/ui/toaster";
import { LoginPage } from "./features/auth/login/LoginPage";
import { RegisterPage } from "./features/auth/register/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/" element={<ErrorsList />} />
        <Route path="/errors/new" element={<ErrorNew />} />
        <Route path="/errors/:id" element={<ErrorDetail />} />
        <Route path="/errors/:id/edit" element={<ErrorEdit />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
