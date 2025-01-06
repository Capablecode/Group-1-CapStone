import Header from "./Components/Header";
import Highlight from "./Components/Highlight.jsx";
import TabsComponent from "./Components/TabsComponent.jsx";
import Footer from "./Components/Footer";
import ProfilePage from "./Components/ProfileMobile.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <ProfilePage />
      <Highlight />
      <TabsComponent />
      <Footer />
    </div>
  );
}

export default App;
