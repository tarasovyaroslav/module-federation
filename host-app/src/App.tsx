import { Suspense, useState } from "react";

//@ts-ignore
import App1 from "authApp/App";

const ErrorComponent = () => <div>Компонент недоступен...</div>;

//@ts-ignore
// const App1 = () => import("authApp/App");

// const App1 = lazy(() => loadComponent(import("AuthApp/App")));
// const App2 = lazy(() => loadComponent(import("app2/App")));
// const App3 = lazy(() => loadComponent(import("app3/App")));

const App = () => {
  const [currentApp, setCurrentApp] = useState<string | null>(null);

  return (
    <div>
      <h1>Главное хост-приложение</h1>
      <button onClick={() => setCurrentApp("app1")}>App 1</button>
      <button onClick={() => setCurrentApp("app2")}>App 2</button>
      <button onClick={() => setCurrentApp("app3")}>App 3</button>

      <Suspense fallback={<div>Loading...</div>}>
        {currentApp === "app1" && (App1 ? <App1 /> : <ErrorComponent />)}
        {/* {currentApp === "app2" && <App2 />} */}
        {/* {currentApp === "app3" && <App3 />} */}
      </Suspense>
    </div>
  );
};

export default App;
