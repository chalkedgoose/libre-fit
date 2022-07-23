import { Route, Router } from "wouter";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
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
