
import './main.css';
import Typing from 'react-typing-animation';


function MainIntro() {
  return (
    <div class="main-container">
        <div class="center">
        <Typing>
          <h1 class="main-text">
            Heyo,
            <Typing.Delay ms={500} />
            &nbsp;I'm Craig.
          </h1>
          <Typing.Delay ms={2000} />
          <h2 class="secondary-text">
            Scroll down to learn more.
          </h2>
        </Typing>
        </div>
      </div>
  );
}

export default MainIntro;
