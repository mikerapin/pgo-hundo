import { hydrate, LocationProvider, prerender as ssr, Route, Router } from 'preact-iso';

import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
  return (
    <LocationProvider>
      <main class="container">
        <Router>
          <Route path="/" component={Home}/>
          <Route default component={NotFound}/>
        </Router>
      </main>
    </LocationProvider>
  );
}

if (typeof window !== 'undefined') {
  hydrate(<App/>, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
