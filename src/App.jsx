import Header from "./Components/Header";
// import Highlight from "./Components/Highlight";
import TabsComponent from "./Components/TabsComponent";
import Footer from "./Components/Footer";
import ProfilePage from "./Components/ProfileMobile";
import Stories from "./Components/Stories";

function App() {
  return (
    <div className="App">
      <Header />
      <ProfilePage />
      {/* <Highlight /> */}
      <Stories />
      <TabsComponent />
      <Footer />
    </div>
  );
}

export default App;
