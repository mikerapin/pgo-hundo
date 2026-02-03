import { hydrate, LocationProvider, prerender as ssr, Route, Router } from 'preact-iso';
import { CurrentEventProvider } from './context/EventContext';
import { NotFound } from './pages/_404.jsx';

import { Home } from './pages/Home/index.jsx';
import './style.css';

export function App() {
  return (
    <LocationProvider>
      <CurrentEventProvider>
        <main class="container">
          <Router>
            <Route path="/" component={Home} />
            <Route default component={NotFound} />
          </Router>
        </main>
      </CurrentEventProvider>
    </LocationProvider>
  );
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
