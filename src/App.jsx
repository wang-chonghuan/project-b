import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

export function App() {
  return (
    <main className="shell">
      <p className="eyebrow">SkillHost fixture</p>
      <h1>project-b dashboard</h1>
      <p>A small React placeholder for testing project-level skills.</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
