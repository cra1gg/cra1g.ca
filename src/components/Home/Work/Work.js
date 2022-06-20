
import './main.css';
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { FaIdBadge, FaHammer, FaChartBar, FaChartLine, FaCode } from "react-icons/fa";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function Work() {

  return (
    <div class="fourth-container">
        <div class="work-container">
        <h1 class="work-history-text">
        Work History
        </h1> 
        {/* <VerticalTimeline>
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
        </VerticalTimeline> */}
        <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key="001"
                dateText="April 2021 – Present"
                dateStyle={{
                    padding: "0px",
                    borderRadius: '4px',
                    height: "30px",
                    top: "-0px"
                }}
                dateInnerStyle={{ 
                    background: '#fff', 
                    color: '#1E333C',
                    padding: "0px",
                    lineHeight: "30px",
                    height: "30px",
                    fontWeight: "500"
                }}
                bodyContainerStyle={{
                    background: '#1E333C',
                    padding: '20px',
                    borderRadius: '4px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Riskfuel Analytics - Toronto, ON</h4>
                <br></br>
                <ul class="job-desc">
                    <li>Provisioned and managed a bare-metal Kubernetes cluster comprised of over 120 nodes.</li>
                    <li>Ensured continued operation and high-performance of cutting-edge machine learning tools including Nvidia DGX A100s.</li>
                    <li>Transitioned infrastructure deployment from manual to automated with Metal as a Service.</li>
                    <li>Managed CI/CD pipelines using ArgoCD and GitHub Actions</li>
                    <li>Developed custom Kubernetes operators using Golang</li>
                    <li>Managed over 100 TiB of high-throughput nvme distributed file storage using Ceph</li>
                    <li>Worked with AWS, Azure, and IBM Cloud, to build out hybrid cloud. </li>
                    <li>Migrated client-facing demos from Azure to On-Premises DMZ</li>
                    <li>Consulted with and developed internal tools for data scientists</li>
                </ul>
            </TimelineItem>
            <TimelineItem
                key="002"
                dateText="May – August 2020"
                dateStyle={{
                    padding: "0px",
                    borderRadius: '4px',
                    height: "30px",
                    top: "-0px"
                }}
                dateInnerStyle={{ 
                    background: '#fff', 
                    color: '#1E333C',
                    padding: "0px",
                    lineHeight: "30px",
                    height: "30px",
                    fontWeight: "500"
                }}
                bodyContainerStyle={{
                    background: '#1E333C',
                    padding: '20px',
                    borderRadius: '4px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
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
            </TimelineItem>
            <TimelineItem
                key="003"
                dateText="May - August 2019"
                dateStyle={{
                    padding: "0px",
                    borderRadius: '4px',
                    height: "30px",
                    top: "-0px"
                }}
                dateInnerStyle={{ 
                    background: '#fff', 
                    color: '#1E333C',
                    padding: "0px",
                    lineHeight: "30px",
                    height: "30px",
                    fontWeight: "500"
                }}
                bodyContainerStyle={{
                    background: '#1E333C',
                    padding: '20px',
                    borderRadius: '4px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
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
            </TimelineItem>
            <TimelineItem
                key="004"
                dateText="June - September 2018"
                dateStyle={{
                    padding: "0px",
                    borderRadius: '4px',
                    height: "30px",
                    top: "-0px"
                }}
                dateInnerStyle={{ 
                    background: '#fff', 
                    color: '#1E333C',
                    padding: "0px",
                    lineHeight: "30px",
                    height: "30px",
                    fontWeight: "500"
                }}
                bodyContainerStyle={{
                    background: '#1E333C',
                    padding: '20px',
                    borderRadius: '4px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 className="vertical-timeline-element-title">Security Officer</h3>
                <h4 className="vertical-timeline-element-subtitle">Paragon Security - Mississauga, ON</h4>
                <br></br>
                <ul class="job-desc">
                    <li>Worked in residential condominium as concierge.</li>
                    <li>Conducted hourly patrols of premises and responded to fire alarms and emergency situations, operated fire panel accordingly.</li>
                    <li>Worked in commercial setting guarding high value assets at the Samsung warehouse.</li>
                </ul>
            </TimelineItem>
            <TimelineItem
                key="005"
                dateText="May - June 2018"
                dateStyle={{
                    padding: "0px",
                    borderRadius: '4px',
                    height: "30px",
                    top: "-0px"
                }}
                dateInnerStyle={{ 
                    background: '#fff', 
                    color: '#1E333C',
                    padding: "0px",
                    lineHeight: "30px",
                    height: "30px",
                    fontWeight: "500"
                }}
                bodyContainerStyle={{
                    background: '#1E333C',
                    padding: '20px',
                    borderRadius: '4px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 className="vertical-timeline-element-title">Press Shop Technician</h3>
                <h4 className="vertical-timeline-element-subtitle">Magna Karmax - Milton, ON</h4>
                <br></br>
                <ul class="job-desc">
                <li>Assisted in the assembly process of body panels and parts for major automobile manufacturers such as Chrysler, Ford, and GM.</li>
                <li>Monitored product line and performed quality assurance checks</li>
                </ul>
            </TimelineItem>
            </Timeline>
        </div>
    </div>  
  );
}

export default Work;
