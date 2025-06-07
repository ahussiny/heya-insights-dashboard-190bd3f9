
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LoginPage } from "./components/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
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
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/projects" element={
            <ProtectedRoute>
              <Layout>
                <ProjectsPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/execution" element={
            <ProtectedRoute>
              <Layout>
                <ExecutionPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/real-estate" element={
            <ProtectedRoute>
              <Layout>
                <RealEstatePage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/finance" element={
            <ProtectedRoute>
              <Layout>
                <FinancePage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Layout>
                <AdminPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/legal" element={
            <ProtectedRoute>
              <Layout>
                <LegalPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/cooperation" element={
            <ProtectedRoute>
              <Layout>
                <CooperationPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
