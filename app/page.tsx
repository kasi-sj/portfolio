import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Home from "@/components/Home";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <div className="h-full relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg">
      <Home />
      <About />
      <Skills />
      <Achievements />
    </div>
  );
}
