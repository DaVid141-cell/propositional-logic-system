import { Navbar } from "../components/ui/Navbar";
import {PopUpArrow} from "../components/ui/Pop-up-arrow";
import {BoxFrame} from "../components/ui/box-frame";

export default function MainPage() {
  return (
    <div className="bg-foreground">
        <Navbar/>
        <div className="flex justify-center">
          <PopUpArrow/>
        </div>

        <BoxFrame/>
      <h1>Main Page</h1>
      <p>Welcome to the Main Page!</p>
    </div>
  );
}