import React from 'react';
import { Link } from 'react-router-dom'; 

const removeHeader = () => {
  const header = document.getElementById('header');
  if(header)
    header.remove();
}

const Signup = () => {
  removeHeader();
  return (
<main className='signup'>
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Press Start 2P'/>
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
  <div className='bg'>
     <video width={"100%"} height={"100%"} autoPlay loop muted>
       <source src='assets/sunrise.mp4' type='video/mp4'></source>
     </video>
  </div>
      <h1 id='h1'>S I G N U P</h1>
      <div className='complexIcon'>
        <img src='assets/icon.png' alt='complex icon' />
      </div>
      <form>
        <section>
          <div>
          <div className='glass'>
            <div>
              <img src='assets/usericon.png' alt='icon1' className='usericon'/>
            </div>
            <div>
              <img src='assets/eye.png' alt='icon2' className='eye' />
            </div>
            <div>
              <img src='assets/email.png' alt='icon3' className='email' />
            </div> 
            <div>
              <img src='assets/dialer.png' alt='icon4' className='dialer' />
            </div>
            <input type='text' name='userName-input' id='userName-input' placeholder='User name' required />
            <section>
                <div>
                  <img src='assets/authgif.gif' alt='signup animation' id='signupani-gif'/>
                </div>
                <button className='sbutton'>SIGN UP</button>
                <p>Already have an account ? <Link to={''} id='loginfont'>login</Link></p>
                <button id='uploadpic'type='file'>Upload picture </button>
            </section>
          <div>
            <input type='password' name='password-input' id='password-input' placeholder='Pass word' required />
          </div>
          <div>
            <input type='email' name='email-input' id='email-input' placeholder='Email' required />
          <div>
            <input type='tel' name='phoneno-input' id='phoneno-input' placeholder='Phone no' pattern='[0-9]-{10}' required/>
          </div>
          </div>
           </div>
          </div> 
        </section>
      </form>
</main>
)
}

export default Signup;
