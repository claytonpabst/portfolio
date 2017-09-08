import React, { Component } from 'react';
import axios from 'axios';

import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: {
        userName: '',
        userEmail: '',
        userSubject: '',
        userMessage: ''
      }

    }
    //bind
    this.handleUserEmailInput = this.handleUserEmailInput.bind(this);
    this.handleUserMessageInput = this.handleUserMessageInput.bind(this);
    this.handleUserNameInput = this.handleUserNameInput.bind(this);
    this.handleUserSubjectInput = this.handleUserSubjectInput.bind(this);
    this.sendEmail = this.sendEmail.bind(this);

  }

  handleUserNameInput(e) {
    let newEmail = Object.assign({}, this.state.email, {userName:e.target.value})
    this.setState({
      email:  newEmail
    })
  }

  handleUserEmailInput(e) {
    let newEmail = Object.assign({}, this.state.email, {userEmail:e.target.value})
    this.setState({
      email:  newEmail
    })
  }

  handleUserSubjectInput(e) {
    let newEmail = Object.assign({}, this.state.email, {userSubject:e.target.value})
    this.setState({
      email:  newEmail
    })
  }

  handleUserMessageInput(e) {
    let newEmail = Object.assign({}, this.state.email, {userMessage:e.target.value})
    this.setState({
      email:  newEmail
    })
  }

  sendEmail() {
    alert('Message Sent')
    let email = this.state.email
    axios.post('/api/sendEmail', email)
    .then(function(response) {
      alert('Message Sent')
    })
  }

  render() {
    return (
      <div className="home">
        <header className='staticHeader'>
          <div className='headerRight'>
            <a href='#projects' className='headerRightH1'>Projects</a>
            <a href='#skills' className='headerRightH1'>Skills</a>
            <a href='#about' className='headerRightH1'>About</a>
            <a href='#contactScroll' className='headerRightH1'>Contact</a>
          </div>
          <div className='headerLeft'>CP</div>

        </header>

        <section className='landing'>
          <div className='landingContent'>
            <div className='profilePic'></div>
            <h1 className='landingContent2'>Clayton Pabst</h1>
            <h1 className='landingContent1'>Web Developer</h1>
          </div>
        </section>

        <section className='whiteSpace'></section>

        <section id='projects' className='projects'>
          <header className='projectsTitle'>Projects</header>
          <div className='projectsContainer'>
            <div className='singleProjectBank'>
              <div className='singleProjectInfo'>
                <a href='https://www.youtube.com/watch?v=cL0dP7VKU8Y' className='singleProjectText textDecorationNone'>Video Walkthrough</a>
                <a href='http://www.bank.claytonpabst.com' className='singleProjectText textDecorationNone'>Website</a>
                <a href='https://github.com/claytonpabst/merica-money' className='singleProjectText textDecorationNone'>Github</a>
              </div>
            </div>
            <div className='singleProjectAqcuire'>
              <div className='singleProjectInfo'>
                <a href='https://www.youtube.com/watch?v=Sn-WQfTLs6o' className='singleProjectText textDecorationNone'>Video Walkthrough</a>
                <a href='http://www.acquire.claytonpabst.com' className='singleProjectText textDecorationNone'>Website</a>
                <a href='https://github.com/claytonpabst/acquire-with-react-' className='singleProjectText textDecorationNone'>Github</a>
              </div>
            </div>
            <div className='singleProjectStudio'>
              <div className='singleProjectInfo'>
                <a href='' className='singleProjectText textDecorationNone'>Video Walkthrough</a>
                <a href='http://www.pointstudio.claytonpabst.com' className='singleProjectText textDecorationNone'>Website</a>
                <a href='https://www.github.com/claytonpabst' className='singleProjectText textDecorationNone'>Github</a>
              </div>
            </div>
          </div>
        </section>

        <section id='skills' className='skills'>
          <header className='skillsTitle'>Skills</header>
          <div className='skillsLogos'>
            <div className='techLogoDiv'><img className='techLogo' src='./img/react_img.png'></img>React</div>
            <div className='techLogoDiv'><img className='techLogo' src='./img/sass_img.png'></img>SASS</div>
            <div className='techLogoDiv'><img className='techLogo' src='./img/angluar_img.png'></img>Angular</div>
            <div className='techLogoDiv'><img className='techLogo' src='./img/express_img.png'></img>Express</div>
            <div className='techLogoDiv'><img className='techLogo' src='./img/css_img.png'></img>CSS3</div>
            <div className='techLogoDiv'><img className='techLogo' src='./img/git_img.png'></img>Git</div>
            <div className='techLogoDiv'><img className='techLogo' src='./img/node_img.jpeg'></img>Node</div>
            <div className='techLogoDiv'><img className='techLogo' src='./img/responsive_img.png'></img>Responsive Design</div>
            <div className='techLogoDiv'><img className='techLogo' src='./img/html_img.png'></img>HTML5</div>
            <div className='techLogoDiv'><img className='techLogo' src='./img/sql_img.png'></img>SQL</div>
          </div>
        </section>

        <section className='whiteSpace'></section>

        <section id='about' className='about'>
          <header className='aboutTitle'>About Me</header>
          <div className='aboutContent'>
            I love all things tech. I am a photographer, videographer, audio recording engineer,
            and of course, a developer. When I'm not creating some type of content at my computer, you will
            find me on a dance floor, singing at a concert, at the gym, or in the mountains. I love knowing people and being social.
            Adrenaline is real and I secretly want to Rally in a WRX. Find me on Linkedin, let's connect!
          </div>
        </section>

        {/*<section className='whiteSpace'></section>*/}

        <section id='contactScroll' className='contact'>
          <header className='contactTitle'>Contact</header>
          <div className="container">  
            <form id="contact">
              <h3>Say Hello!</h3>
              <h4>Use this form to send me an Email.</h4>

                <input value={this.state.userName} placeholder="Name" type="text" tabIndex="1" onChange={this.handleUserNameInput}/>

                <input value={this.state.userEmail} placeholder="Email" type="email" tabIndex="2" required onChange={this.handleUserEmailInput}/>

                <input value={this.state.userSubject} placeholder="Subject" type="tel" tabIndex="3" onChange={this.handleUserSubjectInput}/>

                <textarea value={this.state.userMessage} placeholder="Message" tabIndex="5" required onChange={this.handleUserMessageInput}></textarea>

                <button onClick={this.sendEmail} id="contact-submit" >Submit</button>

            </form>
          
            
          </div>
        </section>

        <section className='socialLinks'>
          <h1>Phone: (801) 645-5864</h1>
          <h1>Email: claytonpabst@gmail.com</h1>
          <h1><a href='https://www.linkedin.com/in/claytonpabst/'>LinkedIn Link</a></h1>
          <h1><a href='https://github.com/claytonpabst'>Github Link</a></h1>
        </section>
      </div>
    );
  }
}


export default Home;