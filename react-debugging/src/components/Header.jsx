import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  console.log('Header Component Executing to check StrictMode...');
  return (
    <header id="header">
      <img src={logo} alt="Logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
