
import { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export function MyContact(){
  return(
    <div className ="container"  id="contact">
      <div className = "row">
            <MyContactInfo/>
            <RenderContact/>
      </div>
      
    </div>
  )
}
function MyContactInfo(){
  return(
    <div className="container m-4 mx-auto" style={{border: "solid 1px #c8d6e5", borderRadius:"25px", padding : "20px", backgroundColor:"rgba(220, 221, 225,0.5)"}}>
      <h3> MY CONTACT </h3>
      <p>Phone: +84 975272569</p>
      <p>Address: Hanoi, VietNam</p>
      <p>Email: designbyanchi@gmail.com</p>

    </div>
  )
}
function RenderContact(){
  const form = useRef();
  const [name, setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');  
  const [message,setMessage] = useState('');
  const handleSubmit =(e)=>{
    e.preventDefault();
   
   
    emailjs.sendForm("service_1jy4gb7",  "template_x4xt0n7", form.current, "HY8I1piJYMaiD1x_6")
      .then((result) => {
          alert ("Thanks for submitting")
      }, (error) => {
          console.log(error.text);
      });

    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  }
  return(
    <div className ="container m-4 mx-auto "  >
        <div style={{border: "solid 1px #c8d6e5", borderRadius:"25px", padding : "20px", backgroundColor:"rgba(220, 221, 225,0.5)"}}>
        <h3>GET IN TOUCH</h3>
        <form onSubmit ={handleSubmit} ref={form} >
    <div className ="row m-2">
      <label for="name">Your Name</label>
      <input type="text" name="name" id="name" placeholder="Your name"  required value ={name} onChange ={e=>setName(e.target.value)}/>
                </div>
      <div className ="row m-2">
   
      <label for="exampleEmail">Your Email</label>
      <input type="email" name="email" id="Email" placeholder="Your email" required value={email} onChange={e=>setEmail(e.target.value)}/>
  </div>
      <div className ="row m-2">
      <label for="phone">Your Phone Number</label>
      <input type="number" name="phone" id="phone-number" placeholder="Your telephone number" required  value={phone} onChange={e=>setPhone(e.target.value)}/>
</div>
      <div className ="row m-2">
      <label for="message">Your message</label>
      <input type="textarea" name="message" id="message" style ={{ height:"150px"}} placeholder="Your message" required  value={message} onChange={e=>setMessage(e.target.value)} />
</div>
    <button className ="mt-4 button__contact">Submit</button>
    </form>
    </div>
    </div>
    )
}
export default MyContact;