import logo from './logo.svg';
import './App.css';
import { FullPage, Slide } from 'react-full-page';
import { Card } from 'antd';
import Typing from 'react-typing-animation';

function App() {
  return (
    <div className="App">
      <FullPage>
        <Slide>
          <div class="main-container">
            <div class="center">
            <Typing>
              <h1 class="main-text">
                Heyo,
                <Typing.Delay ms={500} />
                &nbsp;I'm Craig.
              </h1>
              <Typing.Delay ms={2000} />
              <Typing.Backspace count={17} />
              <h1 class="main-text">
                Scroll down to learn about me.
              </h1>
            </Typing>

            </div>
          </div>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
