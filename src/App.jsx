import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div>
      <AppRoutes />
      <Toaster />
    </div>
  );
}
