import { HeartPulse } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <HeartPulse size={34} />

        <div>
          <h1>Respirá</h1>
          <p>Cada día sin fumar es una victoria.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;