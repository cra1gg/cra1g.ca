
import './main.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaIdBadge, FaHammer, FaChartBar, FaChartLine, FaCode } from "react-icons/fa";

function Work() {

  return (
    <div class="fourth-container">
        <h1 class="work-history-text">
        Work History
        </h1> 
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2021 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentStyle={{ background: '#1E333C', color: '#fff' }}
            icon={<FaCode />}
        >
            <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Riskfuel Analytics - Toronto, ON</h4>
            
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May - August 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaChartLine />}
            contentStyle={{ background: '#1E333C', color: '#fff' }}
            
        >
            <h3 className="vertical-timeline-element-title">Smart Technology Associate - Corporate Real Estate</h3>
            <h4 className="vertical-timeline-element-subtitle">Royal Bank of Canada - Toronto, ON</h4>
            <br></br>
            <ul class="job-desc">
                <li>Collaborated with Agile SCRUM development team to produce deliverables for stakeholders across RBC’s global enterprise.</li>
                <li>Built Tableau portfolio and finance dashboards providing an overview of RBC’s real estate portfolio and associated expenditure.</li>
                <li>Automated data ingestion from third-party vendors using Python and RBC APIs for analysis by RBC CRE.</li>
                <li>Performed data analysis and forecasting for retail location fiscal expenditure and assisted with COVID-19 return to premises predictive modelling.</li>
                <li>Performed quality assurance on data ingested to SQL server and wrote Python scripts to automate repetitive Excel procedures.</li>
                <li>Elicited requirements for dashboards, data ingestion, and other deliverables from executives across RBC CRE.</li>
            </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May - August 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaChartBar />}
            contentStyle={{ background: '#1E333C', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Business Intelligence Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">RSA Insurance - Mississauga, ON</h4>
            <br></br>
            <ul class="job-desc">
                <li>Created procedures using SQL Server Integration Services for the automated ingestion and aggregation of data to RSA SQL databases.</li>
                <li>Used data visualization tools such as Tableau and Qlik Sense to build dashboards utilized by vendors accross RSA's extensive network of repair shops and brokers to monitor performance and billing.</li>
                <li>Crafted Visual Basic scripts to automate aggregation and division of data for various vendors for case distribution and reconciliation.</li>
                <li>Used SQL stored procedures to manipulate large data sets already ingested to centralized SQL databases.</li>
                <li>Analyzed discrepancies in invoices issued by vendors and recovered over $263,000 double-billed by vendors.</li>
            </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June - September 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaIdBadge />}
            contentStyle={{ background: '#1E333C', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Security Officer</h3>
            <h4 className="vertical-timeline-element-subtitle">Paragon Security - Mississauga, ON</h4>
            <br></br>
            <ul class="job-desc">
                <li>Worked in residential condominium as concierge.</li>
                <li>Conducted hourly patrols of premises and responded to fire alarms and emergency situations, operated fire panel accordingly.</li>
                <li>Worked in commercial setting guarding high value assets at the Samsung warehouse.</li>
            </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May - June 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaHammer />}
            contentStyle={{ background: '#1E333C', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Press Shop Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">Magna Karmax - Milton, ON</h4>
            <br></br>
            <ul class="job-desc">
            <li>Assisted in the assembly process of body panels and parts for major automobile manufacturers such as Chrysler, Ford, and GM.</li>
            <li>Monitored product line and performed quality assurance checks</li>
            </ul>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>  
  );
}

export default Work;
