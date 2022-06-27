import { Parallax } from "react-parallax";
import { Image } from 'antd';
import degree from '../../../media/degree.png';
import cka from '../../../media/cka.png';

const styles = {
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
  return (
    <div className="outer-container" style={styles}>
      <Parallax
        strength={200}
        renderLayer={(percentage) => (
          <div style={{background: `rgba(30, 33, 33)`}}>
            <div
              style={{
                position: "absolute",
                background: `rgba(30, 33, 33)`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: (percentage + 0.6) * 1000,
                height: (percentage + 0.6) * 1000 
              }}
            />
          </div>
        )}
      >
        <div style={{ 
          height: "100vh" 
          
          }}>
          <div style={insideStyles}>
            <h1 class="main-text">Education</h1>
            <h1 class="secondary-text">HBSc. Computer Science - University of Toronto</h1>
            <h1 class="icon-text">2017-2021</h1>
            <h1 class="icon-text">High Distinction</h1>
            <h1 class="icon-text">cGPA: 3.54</h1>
            <Image
              width="20rem"
              src={degree}
            />
            {/* <h1 class="main-text">Certifications</h1>
            <h1 class="secondary-text">Certified Kubernetes Administrator - Linux Foundation</h1>
            <h1 class="icon-text">April 2022, 94%</h1>
            <Image
              width="10rem"
              src={cka}
            /> */}
          </div>
        </div>
      </Parallax>
  </div>
  );
}

export default Interests;
