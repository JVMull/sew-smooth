import {Link} from 'react-router-dom'
import '../css/AboutUs.css'
import Headshot from '../Components/Headshot.jsx'
function AboutUs() {

  return (
    <div className="about-us-container">
        <h1>Our Team</h1>
        <h4 className="text-muted">Custom, High-Quality Product Solutions</h4>

        <div className="row justify-content-center mt-4">
            <div className="team-photo-container">
                <img src="Images/team.jpeg" className="team-photo" alt="Our Team"/>
            </div>
        </div>

        <div className="headshots-container">
            <Headshot name='Ryan Aparcio' photo='Images/ryan.jpeg' linkname='ryan'/>
            <Headshot name='Eli Gulley' photo='Images/eli.jpg' linkname='eli' text="I am an undergraduate Computer Science student working to get my Bachelor's in Science at St. Edward's University in Austin, Texas. I have experience in Web Development, Mobile Programming, Database Management, and Computer Hardware. However, I have not had any experience managing any full-stack applications, such as the one we will be developing for this project. Over the course of the project, I hope to gain more database experiecne, develop a more confident knowledge base in frontent development, as well as project management. I am also looking forward to the experience I will gain in server management, as deploying full-stack applications on a remote server is something I am unfamiliar with. Overall, I am looking forward to the ways this projcet will both hone my existing skills, as well as allow me to learn and understand new tools and applications."/>
            <Headshot name='Wilson Flores' photo='Images/wilson.jpeg' linkname='wilson' text="Hi, I'm a junior studying computer science at St. Edward's University. My intrests in computer science includes Software devolopment and Machine Learning. In this class, I hope to improve my frontend development skills."/>
            <Headshot name='John Vazquez-Grimaldi' photo='Images/john.jpeg' linkname='john' text="I'm a Senior Computer Science student at St. Edward's University. I am interested in learning more about the field of computer science and the tech field. I am experienced in multiple programming languages and with the agile methodology. I hope to learn more about the development process and documentation through the course of this project."/>
            <Headshot name='William Burgess' photo='Images/william.jpeg' linkname='william' text="I'm a student at St. Edward's university studying computer science! I aspire to be a software developer who specializes in audio software. I love creating music with digital audio workstations. I have experienve with Python, Java, JS, and am learning C and various frameworks. Through this project I aim to sharpen my in-industry software development skills."/>
        </div>
        <Link></Link>
    </div>
  )
}

export default AboutUs