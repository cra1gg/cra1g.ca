import MainIntro from './MainIntro/MainIntro.js'
import Interests from './Interests/Interests.js'
import Skills from './Skills/Skills.js'
import Work from './Work/Work.js'
import Education from './Education/Education.js'


function Home() {
  return (
    <div className="App">
      <MainIntro></MainIntro>
      <Interests></Interests>
      <Skills></Skills>
      <Education></Education>
      <Work></Work>
    </div>
  );
}

export default Home;
