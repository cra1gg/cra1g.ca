import SiteLayout from './SiteLayout.js'
import MainIntro from './components/Home/MainIntro/MainIntro.js'
import Interests from './components/Home/Interests/Interests.js'
import Skills from './components/Home/Skills/Skills.js'
import Work from './components/Home/Work/Work.js'
function App() {
  return (
    <SiteLayout>
    <div className="App">
      <MainIntro></MainIntro>
      <Interests></Interests>
      <Skills></Skills>
      <Work></Work>
    </div>
    </SiteLayout>
  );
}

export default App;
