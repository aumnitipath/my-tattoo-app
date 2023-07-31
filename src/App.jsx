import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooPost from "./components/TattooPost";
import TattooItem from "./components/TattooItem";
import tattoos from "./data/tattoos";
import { useState } from "react";

function App() {
  const [selectedTatoo, setSelectedTatoo] = useState(null);

  function onTattooOpenClick(theTattoo) {
    setSelectedTatoo(theTattoo);
  }

  function onTattooCloseClick() {
    setSelectedTatoo(null);
  }

  const tattooElements = tattoos.map((tattoo, index) => {
    return (
      <TattooItem
        key={index}
        tattoo={tattoo}
        onTattooClick={onTattooOpenClick}
      />
    );
  });

  let tattooPost = null;

  if (!!selectedTatoo) {
    tattooPost = (
      <TattooPost tattoo={selectedTatoo} onBgClick={onTattooCloseClick} />
    );
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
