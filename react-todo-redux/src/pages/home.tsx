import Container from "../components/ui/container";
import Index from "@/components/todo-useContext/index";

const HomePage = () => {
  return (
    <>
      <Container>
        <h1>HOME Page Router</h1>
      </Container>

      <div className={"bg-gray-100 py-10 sm:py-14"}>
        <Container></Container>
      </div>

      <div className={"bg-zinc-100 py-10 sm:py-14"}>
        <Container>
          <Index />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
