
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { ProjectsPage } from "./pages/ProjectsPage";
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
            <Route path="/execution" element={<div className="text-center p-8"><h2 className="text-2xl font-bold">قطاع التنفيذ</h2><p>قريباً...</p></div>} />
            <Route path="/real-estate" element={<div className="text-center p-8"><h2 className="text-2xl font-bold">القطاع العقاري</h2><p>قريباً...</p></div>} />
            <Route path="/finance" element={<div className="text-center p-8"><h2 className="text-2xl font-bold">القطاع المالي</h2><p>قريباً...</p></div>} />
            <Route path="/admin" element={<div className="text-center p-8"><h2 className="text-2xl font-bold">الشئون الإدارية</h2><p>قريباً...</p></div>} />
            <Route path="/legal" element={<div className="text-center p-8"><h2 className="text-2xl font-bold">القطاع القانوني</h2><p>قريباً...</p></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
