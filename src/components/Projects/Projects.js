import "./main.css";
import { HoverableCard } from 'react-hoverable-card'
import 'react-hoverable-card/dist/index.css'


function Projects() {
    return (
      <div class="projects-main">
        <div class="project">
        <HoverableCard
            cardTitle="Lorem Ipsum"
            cardDescription="Phasellus tincidunt vestibulum elit vel laoreet. Vivamus tincidunt augue eget lacus blandit tempor."
            cardImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            hoverBgColor="grey"
            style={{height:"100%", width:"100%"}}
        />
      </div>
      </div>
    );
  }
  
  export default Projects;
  