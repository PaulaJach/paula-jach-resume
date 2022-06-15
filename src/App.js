import AppContainer from "./components/UI/AppContainer";
import CvContainer from "./components/Resume/CvContainer";
import GlobalStyles from "./components/globals/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <CvContainer />
      </AppContainer>
    </>
  );
}

export default App;
