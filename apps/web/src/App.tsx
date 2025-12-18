/**
 * @context-engine/web
 * Main App Component
 */

import { hello } from '@context-engine/core';

export function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>🌐 Context Engine Web</h1>
      <p>{hello()}</p>
      <p>Web app is ready! 🎉</p>
    </div>
  );
}

