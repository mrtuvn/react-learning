import logoSrc from "@/assets/react.svg";
import Container from "@/components/ui/container";

const Header = () => {
  return (
    <div className="flex bg-slate-400">
      <Container>
        <div className="flex w-full flex-1 gap-2">
          <div>
            <img src={logoSrc} alt="logo" />
            <p>HEADER</p>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            quaerat. Veritatis temporibus corporis error magni minus in laborum,
            veniam odio culpa, voluptatem sed dolorum laudantium quisquam
            facilis earum enim molestiae?
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
