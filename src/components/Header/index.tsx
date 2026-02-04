import { SelectEvent } from '../SelectEvent';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">
              <img src="/logo-med.png" style={{ maxHeight: '100px' }} alt="PGO Hundo!" />
            </a>
          </li>
        </ul>
        <ul>
          <li><SelectEvent /></li>
        </ul>
      </nav>
    </header>
  );
};