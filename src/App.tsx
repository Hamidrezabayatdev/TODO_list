import { useState } from "react";
import { Menu } from "./components/menu/Menu";
import { Tasks } from "./components/Tasks/Tasks";
function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div className="relative container mx-auto py-5 px-4 md:px-0 h-screen">
      <div className="fixed top-0 bottom-0 hidden md:block my-auto w-80 h-[90vh]">
        <Menu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="md:pr-92 lg:pr-[416px] xl:pr-[448px] 2xl:pr-[512px]">
        <Tasks selectedCategory={selectedCategory}/>
      </div>
    </div>
  );
}

export default App;
