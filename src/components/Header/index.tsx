import { SelectEvent } from '../SelectEvent';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><img src="logo-med.png" style={{maxHeight: '120px'}} alt="PGO Hundo!" /></li>
        </ul>
        <ul>
          <li><SelectEvent /></li>
        </ul>
      </nav>
    </header>
  );
};