import SiteLayout from './SiteLayout.js'
import MainIntro from './components/Home/MainIntro/MainIntro.js'
import Interests from './components/Home/Interests/Interests.js'
import Skills from './components/Home/Skills/Skills.js'
import Work from './components/Home/Work/Work.js'
import Education from './components/Home/Education/Education.js'
function App() {
  return (
    <SiteLayout>
    <div className="App">
      <MainIntro></MainIntro>
      <Interests></Interests>
      <Education></Education>
      <Skills></Skills>
      <Work></Work>
    </div>
    </SiteLayout>
  );
}

export default App;
