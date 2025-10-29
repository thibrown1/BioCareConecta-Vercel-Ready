import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import PatientDashboard from "./pages/PatientDashboard";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import SecurityPrivacy from "./pages/SecurityPrivacy";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Login} />
      <Route path={"/forgot-password"} component={ForgotPassword} />
      <Route path={"/signup"} component={SignUp} />
      <Route path={"/patient-dashboard"} component={PatientDashboard} />
      <Route path={"/professional-dashboard"} component={ProfessionalDashboard} />
      <Route path={"/security-privacy"} component={SecurityPrivacy} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
