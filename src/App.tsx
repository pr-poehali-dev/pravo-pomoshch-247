import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import UgolovnyeDela from "./pages/UgolovnyeDela";
import Konsultaciya from "./pages/Konsultaciya";
import Ceny from "./pages/Ceny";
import OnlineKonsultaciya from "./pages/OnlineKonsultaciya";
import NotFound from "./pages/NotFound";
import AdminPanel from "./components/AdminPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ugolovnye-dela" element={<UgolovnyeDela />} />
          <Route path="/konsultaciya" element={<Konsultaciya />} />
          <Route path="/ceny" element={<Ceny />} />
          <Route path="/online-konsultaciya" element={<OnlineKonsultaciya />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AdminPanel />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;