import { Route, Routes } from "react-router-dom";
import { ErrorsList } from "./features/errors/pages/ErrorsList";
import { ErrorNew } from "./features/errors/pages/ErrorNew";
import { ErrorDetail } from "./features/errors/pages/ErrorDetail";
import { ErrorEdit } from "./features/errors/pages/ErrorEdit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ErrorsList />} />
      <Route path="/errors/new" element={<ErrorNew />} />
      <Route path="/errors/:id" element={<ErrorDetail />} />
      <Route path="/errors/:id/edit" element={<ErrorEdit />} />
    </Routes>
  );
}

export default App;
