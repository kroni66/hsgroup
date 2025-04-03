import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import LegalServices from "@/pages/LegalServices";
import AccountingServices from "@/pages/AccountingServices";
import TaxServices from "@/pages/TaxServices";
import LiquidationServices from "@/pages/LiquidationServices";
import RealEstateServices from "@/pages/RealEstateServices";
import ConstructionServices from "@/pages/ConstructionServices";
import Contact from "@/pages/Contact";
import { ParallaxProvider } from "react-scroll-parallax";
import { Preloader } from "@/components/Preloader";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pravni-sluzby" component={LegalServices} />
      <Route path="/sprava-ucetnictvi" component={AccountingServices} />
      <Route path="/danove-poradenstvi" component={TaxServices} />
      <Route path="/likvidace-firem" component={LiquidationServices} />
      <Route path="/realitni-agentura" component={RealEstateServices} />
      <Route path="/stavebni-cinnost" component={ConstructionServices} />
      <Route path="/kontakt" component={Contact} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ParallaxProvider>
        <Preloader />
        <Router />
        <Toaster />
      </ParallaxProvider>
    </QueryClientProvider>
  );
}

export default App;
