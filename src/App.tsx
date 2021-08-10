import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./components";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Container />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
