
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ExecutionPage } from "./pages/ExecutionPage";
import { RealEstatePage } from "./pages/RealEstatePage";
import { FinancePage } from "./pages/FinancePage";
import { AdminPage } from "./pages/AdminPage";
import { LegalPage } from "./pages/LegalPage";
import { CooperationPage } from "./pages/CooperationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/execution" element={<ExecutionPage />} />
            <Route path="/real-estate" element={<RealEstatePage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/cooperation" element={<CooperationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
