import Safety from "./components/safety";
import Pharmacy from "./pages/pharmacy";
import { pharmacy_props } from "./pages/pharmacy/info";

function App() {
  return (
    <div className="App">
      <Safety />
      <Pharmacy {...pharmacy_props} />
    </div>
  );
}

export default App;
