import { AppRouter } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRouter></AppRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
