import { LogoLink } from '../LogoLink';
import { SelectEvent } from '../SelectEvent';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <LogoLink />
          </li>
        </ul>
        <ul>
          <li><SelectEvent /></li>
        </ul>
      </nav>
    </header>
  );
};