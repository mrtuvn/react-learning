import logoSrc from "@/assets/react.svg";
import Container from "../ui/container";

const Header = () => {
  return (
    <div className="flex bg-slate-400">
      <Container>
        <div className="flex w-full flex-1 gap-2 mx-auto text-center">
          <div>
            <img src={logoSrc} alt="logo" />
            HEADER
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Header;
