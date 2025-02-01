import { Menu } from "./components/menu/Menu"
import { Tasks } from "./components/Tasks/Tasks";
function App() {

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-100 font-[Yekan]">
      <div className="container mx-auto py-5 h-screen flex gap-48">
        <Menu />
        <Tasks />
      </div>
    </div>
  );
}

export default App
