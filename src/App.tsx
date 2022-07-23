import { Route, Router } from "wouter";
import { Settings, Home } from "./pages";
import { Bespoke } from "./types/types";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Route path={Bespoke.HOME}>
          <Home />
        </Route>
        <Route path={Bespoke.SETTINGS}>
          <Settings />
        </Route>
      </Router>
    </RecoilRoot>
  );
}

export default App;
