import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooPost from "./components/TattooPost";
import TattooItem from "./components/TattooItem";
import tattoos from "./data/tattoos";
import { useState } from "react";
import AppSearch from "./components/AppSearch";

function App() {
  const [selectedTatoo, setSelectedTatoo] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onTattooOpenClick(theTattoo) {
    setSelectedTatoo(theTattoo);
  }

  function onTattooCloseClick() {
    setSelectedTatoo(null);
  }
  const filteredTattoos = tattoos.filter((tatoo) => {
    return tatoo.title.includes(searchText);
  });
  const tattooElements = filteredTattoos.map((tattoo, index) => {
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
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{tattooElements}</div>
        </div>
      </section>
      {tattooPost}
    </div>
  );
}

export default App;
