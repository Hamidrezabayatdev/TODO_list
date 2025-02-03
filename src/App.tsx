import { Menu } from "./components/menu/Menu";
import { Tasks } from "./components/Tasks/Tasks";
function App() {
  return (
    <div className="container mx-auto py-5 px-4 md:px-0 h-screen flex md:gap-12 lg:gap-24 xl:gap-32 2xl:gap-48">
      <div className="hidden md:block my-auto w-80 h-[90vh]">
        <Menu />
      </div>
      <Tasks />
    </div>
  );
}

export default App;
