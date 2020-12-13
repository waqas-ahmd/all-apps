import links from "./links";
import "./App.css";

function App() {
  return (
    <div className="App">
      {links.map((link) => (
        <div key={link.Id} className="Link">
          <a href={link.URL}>{link.Title}</a>
        </div>
      ))}
    </div>
  );
}

export default App;
