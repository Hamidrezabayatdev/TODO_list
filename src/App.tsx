import { useState } from "react";
import { Menu } from "./components/menu/Menu";
import { Tasks } from "./components/Tasks/Tasks";
function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="container mx-auto px-2">
      <div className={`fixed top-0 bottom-0 ${isMenuOpen ? "left-0 right-0 mx-auto" : "right-[-100%]"} md:right-auto md:left-auto my-auto w-[90vw] md:w-80 h-[90vh] z-50 transition-all`}>
        <Menu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div className="md:pr-92 lg:pr-[416px] xl:pr-[448px] 2xl:pr-[512px]">
        <Tasks selectedCategory={selectedCategory} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
}

export default App;
