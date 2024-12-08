import { Button } from "@/components/ui/button";
import { ButtonLoading } from "./components/ButtonDemo/BtnLoading";
import { CarouselDemo } from "./components/CarouselDemo";
import { ChevronRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Header from "./components/ui/Header";
import CardsSection from "./components/ui/CardsSection";
import Footer from "./components/ui/Footer";
import DarkMode from "./components/DarkMode";


const App = () => {
  return (
   <>
   <Navbar />
   <Header/>
   <CardsSection />
   <Footer />
   </>
  );
};

export default App;
