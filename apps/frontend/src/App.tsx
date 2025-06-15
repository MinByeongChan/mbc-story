import "gocheok-project/src/tailwind.css";
import { Anchor } from "gocheok-project";

function App() {
  return (
    <div className="w-full h-[calc(100vh)] bg-(--color-bg-100)">
      <div className="p-8">
        <Anchor className="text-white">Hello</Anchor>
      </div>
    </div>
  );
}

export default App;
