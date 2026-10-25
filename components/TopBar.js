import Image from "next/image";
import NavIcons from "@/components/NavIcons";
import ThemeToggle from "@/components/ThemeToggle";
import Pill from "@/components/Pill";
import { imageUrl } from "@/data/mock";
export default function TopBar({ loading = false }) {
  return ( 
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Fomi home">
          F
        </a>
        <NavIcons loading={loading}/><div className="top-actions">
          <Pill>Gallery</Pill>
          <Pill>Support</Pill>
          <ThemeToggle />
          <Image
            className="avatar"
            src={imageUrl("photo-1534528741775-53994a69daeb", 80)}
            alt="User profile"
            width={17}
            height={17}
          />
        </div>
      </header>
      <NavIcons mobile />
    </>
  );
}
