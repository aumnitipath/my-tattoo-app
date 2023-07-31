import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooPost from "./components/TattooPost";
import TattooItem from "./components/TattooItem";
import tattoos from "./data/tattoos";
import { useState } from "react";

function App() {
  const [selectedTatoo, setSelectedTatoo] = useState(tattoos[1]);
  const tattooElements = tattoos.map((tattoo, index) => {
    return <TattooItem key={index} tattoo={tattoo} />;
  });

  let tattooPost = null;
  if (!!selectedTatoo) {
    return (tattooPost = <TattooPost tattoo={selectedTatoo} />);
  }

  return (
    <div className="App">
      <AppHeader />
      <div className="app-grid">{tattooElements}</div>
      {tattooPost}
    </div>
  );
}

export default App;
