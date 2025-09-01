import React from "react";
import Dashboard from "./components/Dashboard";
import RepoSearch from "./components/RepoSearch";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">AI GitHub Analyzer</h1>
      <RepoSearch />
      <Dashboard />
    </div>
  );
}
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.getElementById("installBtn");
  if (installBtn) installBtn.style.display = "block";

  installBtn.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
    });
  });
});

export default App;
