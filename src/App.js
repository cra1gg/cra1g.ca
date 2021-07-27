
import './App.css';
import Typing from 'react-typing-animation';
import ReactPageScroller from 'react-page-scroller';
import Navbar from './Navbar.js'
function App() {
  return (
    <div>
    <Navbar></Navbar>
    <div className="App">
      <ReactPageScroller>
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
                Scroll down to learn about me.
              </h2>
            </Typing>
            </div>
          </div>
          <h1>Another slide content</h1>
        </ReactPageScroller>
    </div>
    </div>
  );
}

export default App;
