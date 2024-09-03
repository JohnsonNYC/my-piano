import "./App.css";
import React, { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

function App() {
  return (
    <main className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/9J3K5TNzaDjebq7Z/scene.splinecode" />
      </Suspense>
    </main>
  );
}

export default App;
