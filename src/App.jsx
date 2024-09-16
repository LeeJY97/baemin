import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Router from "./Router";
import { Suspense } from "react";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<>loading...</>}>
        <Router />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
