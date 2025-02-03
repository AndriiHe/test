import React from "react";
import { AntDesignProvider } from "./providers/AntDesignProvider";
import { Router } from "./Router";

const App: React.FC = () => (
  <AntDesignProvider>
    <Router />
  </AntDesignProvider>
);

export default App;
