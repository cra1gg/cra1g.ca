
import './main.css';
import { CogOutline, CodeSlashOutline, HardwareChipOutline, RocketOutline } from 'react-ionicons'
import { Row, Col } from 'antd';
import Fade from 'react-reveal/Fade';
import { Parallax, Background } from "react-parallax";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

function Interests() {
  const style = {padding: '8px 0' };
  return (
    <div style={styles}>
    <Parallax
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * "750",
              height: percentage * "750"
            }}
          />
        </div>
      )}
    >
      <div style={{ height: "100vh" }}>
        <div style={insideStyles}>
          <h1>Education</h1>
          <p>Test</p>
        </div>
      </div>
    </Parallax>
  </div>
  );
}

export default Interests;
