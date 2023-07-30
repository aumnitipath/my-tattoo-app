import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooPost from "./components/TattoPost";
import TattooItem from "./components/TattooItem";

const tattoos = [
  {
    title: "Arm OldSchool Tattoo",
    thumbnailUrl: "/images/tattoo-01-small.jpg",
  },
  {
    title: "Hand OldSchool Tattoo",
    thumbnailUrl: "/images/tattoo-02-small.jpg",
  },
  {
    title: "Neck NewSchool Tattoo",
    thumbnailUrl: "/images/tattoo-03-small.jpg",
  },
  {
    title: "Back OldSchool Tattoo",
    thumbnailUrl: "/images/tattoo-04-small.jpg",
  },
];
function App() {
  const tattooElements = tattoos.map((tattoo, index) => {
    return <TattooItem key={index} tattoo={tattoo} />;
  });
  return (
    <>
      <div className="App">
        <AppHeader />
        <div className="app-grid">{tattooElements}</div>
      </div>
    </>
  );
}

export default App;
