import logo from '../../assets/logo-med.png';
import { SelectEvent } from '../SelectEvent';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href={import.meta.env.BASE_URL}>
              <img src={logo} style={{ maxHeight: '100px' }} alt="PGO Hundo!" />
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