import logoBlanco from "../images/Taxbusines-logo-fondoblanco.png";

export default function Footer() {
  return (
    <footer className="bg-white text-center p-4 mt-8">
      <img src={logoBlanco} alt="TaxBusiness Logo" className="h-20 mx-auto" />
      <p>© {new Date().getFullYear()} TaxBusiness</p>
      <p>Tel: 8181484384 | contacto@taxbusiness.com.mx</p>
    </footer>
  );
}
