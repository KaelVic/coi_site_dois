import { Route, Switch } from "wouter";
import Index from "./pages/index";
import { TreatmentPage } from "./pages/TreatmentPage";
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";
import { WhatsAppButton } from "./components/WhatsAppButton";


function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/tratamentos/:slug" component={TreatmentPage} />
      </Switch>
      {import.meta.env.DEV && <AgentFeedback />}
      
      <WhatsAppButton />
    </Provider>
  );
}

export default App;
