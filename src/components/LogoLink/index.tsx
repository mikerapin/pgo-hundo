import logo from '../../assets/logo-med.png';

export const LogoLink = () => (
  <a href={import.meta.env.BASE_URL}>
    <img src={logo} style={{ maxHeight: '100px' }} alt="PGO Hundo!" />
  </a>
);