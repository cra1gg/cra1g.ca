import { Parallax } from "react-parallax";

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
  return (
    <div className="test" style={styles}>
    <Parallax
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(30, 33, 33, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 1000,
              height: percentage * 1000 
            }}
          />
        </div>
      )}
    >
      <div style={{ height: "100vh" }}>
        <div style={insideStyles}>
          <h1 class="main-text">Education</h1>
          <h1 class="secondary-text">Honors Bachelor of Science, University of Toronto</h1>
        </div>
      </div>
    </Parallax>
  </div>
  );
}

export default Interests;
