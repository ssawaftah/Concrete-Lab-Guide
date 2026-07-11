import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import Layout from './components/Layout';
import Home from './pages/Home';
import Standards from './pages/Standards';
import TestsGuide from './pages/TestsGuide';
import Calculations from './pages/Calculations';
import Classes from './pages/Classes';
import Equipment from './pages/Equipment';
import Dictionary from './pages/Dictionary';
import Troubleshooting from './pages/Troubleshooting';
import Safety from './pages/Safety';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/standards" component={Standards} />
        <Route path="/tests" component={TestsGuide} />
        <Route path="/calculations" component={Calculations} />
        <Route path="/classes" component={Classes} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/dictionary" component={Dictionary} />
        <Route path="/troubleshooting" component={Troubleshooting} />
        <Route path="/safety" component={Safety} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
