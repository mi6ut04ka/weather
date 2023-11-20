import ViewWeather from "../viewWeather/ViewWeather";
import SidePanel from "../sidePanel/SidePanel";
import ChartTemperature from "../chartTemperature/ChartTemperature";
function App() {
  return (
    <div className="container">
      <div className="main__wrapper">
        <ViewWeather/>
        <SidePanel/>
        <ChartTemperature/>
      </div>
    </div>
  );
}

export default App;
