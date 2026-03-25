import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

/**
 * APP ROUTER
 * 
 * Main application router with theme provider and error boundary
 */
function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * APP ROOT
 * 
 * Theme: Light mode with sophisticated color palette
 * - Indigo primary color with emerald accents
 * - Premium typography with Playfair Display for headings
 * - Smooth animations and transitions
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // Uncomment to make theme switchable:
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
