import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export function MyContact() {
  return (
    <div className="container mx-auto" id="contact">
      <div className="row">
        <h2
          className="animate contact__title"
          data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
        >
          GET IN TOUCH
        </h2>
      </div>
      <div className="row contact-info">
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-6 animate"
          data-animate="slideInLeft 3s"
        >
          <div className="container mx-auto mycontact">
            <h4> CONTACT INFO</h4>
            <p> Phone: +84 975272569</p>

            <p> Address: Hanoi, VietNam</p>
            <p> Email: designbyanchi@gmail.com</p>
          </div>
        </div>
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-6 animate"
          data-animate="slideInRight 3s"
        >
          <RenderForm />
        </div>
      </div>
    </div>
  );
}

function RenderForm() {
  const form = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1jy4gb7",
        "template_x4xt0n7",
        form.current,
        "HY8I1piJYMaiD1x_6"
      )
      .then(
        (result) => {
          alert("Thanks for submitting");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="container mx-auto ">
      <div className="contact-form">
        <form onSubmit={handleSubmit} ref={form}>
          <div className="row m-2">
            <label for="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row m-2">
            <label for="exampleEmail">Your Email</label>
            <input
              type="email"
              name="email"
              id="Email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row m-2">
            <label for="phone">Your Phone Number</label>
            <input
              type="number"
              name="phone"
              id="phone-number"
              placeholder="Your telephone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="row m-2">
            <label for="message">Your message</label>
            <input
              type="textarea"
              name="message"
              id="message"
              style={{ height: "150px" }}
              placeholder="Your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="mt-4 button__contact">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default MyContact;
