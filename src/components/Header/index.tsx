import { SelectEvent } from '../SelectEvent';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><h1>PGO Hundo!</h1></li>
        </ul>
        <ul>
          <li><SelectEvent /></li>
        </ul>
      </nav>
    </header>
  );
};