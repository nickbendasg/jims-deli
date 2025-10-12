=== File: src/components/home/Contact.js ===
=== Content ===
import { useState } from 'react';

export default function Contact() {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test');
    console.log(e);
    console.log(first, last, email, message);

  }

  return (

    <div id="body8" className="bodyObject">
      <div className="bodyFiller"></div>
      
      <div className="big_title">
        Contact Us
      </div>
      
      <div className="contact_box"> 
        
        <div className="contact_half" style={{width: '480px', marginLeft: 'calc((40% - 400px) / 2)', marginRight: 'calc((40% - 400px) / 2)'}}>  
          
          <div className="contact_line">  
            <div className="contact_label">Phone:</div>
            <div className="contact_value">860.747.8857</div>
          </div>
          
          <div className="contact_line">  
            <div className="contact_label">Fax:</div>
            <div className="contact_value">860.747.7588</div>
          </div>
          
          <div className="contact_line">  
            <div className="contact_label">Email:</div>
            <div className="contact_value">sanjay@jimsgroceryanddeli.com</div>
          </div>
          
          <div className="contact_line">  
            <div className="contact_label">Address:</div>
            <div className="contact_value">361 Woodford Ave, Plainville, CT</div>
          </div>
          
          {/* style="border:0; margin-top:60px;"  */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7088.492461231051!2d-72.8498224240697!3d41.66991465018595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf36d5c50e59ff209!2sJim&#39;s%20Grocery%20%26%20Deli!5e0!3m2!1sen!2sus!4v1644725743275!5m2!1sen!2sus" 
                  width="400" height="400" allowfullscreen="" loading="lazy" style={{border: '0', marginTop: '60px'}}></iframe>
    
          
          
        </div>
      
        <form onSubmit={handleSubmit} className="contact_half" style={{flexGrow: '1'}}>  
          
          
          <div className="form_lineBox"> 
            <div className="form_title">Name</div>
            <div className="form_line"> 
              <div className="form_box">  
                <input value={first} placeholder='First' onChange={(e) => setFirst(e.target.value)} className="form_input"/>
              </div>
              <div className="form_box">  
                <input value={last} placeholder='Last' onChange={(e) => setLast(e.target.value)} className="form_input"/>
              </div>
            </div>
          </div>
          
          <div className="form_lineBox"> 
            <div className="form_title">Email</div>
            <div className="form_line"> 
              <div className="form_box">  
                <input value={email} placeholder='email@domain.com' onChange={(e) => setEmail(e.target.value)} className="form_input"/>
              </div>
            </div>
          </div>
          
          
          <div className="form_lineBox"> 
            <div className="form_title">Message</div>
            <div className="form_line" style={{height: 'auto'}}> 
              <div className="form_box">  
                <textarea rows="5" value={message} placeholder="Question, Comment, Complaint or Compliment!" onChange={(e) => setMessage(e.target.value)} className="form_input"></textarea>
              </div>
            </div>
          </div>
          
          <div className="submit_container">  
            <div className="submit_box"> 
              <button className="btn">Submit</button>
            </div>
          </div>

          
          
        </form>
      
      </div>
      
    </div> 
    
  )

}
=== End of src/components/home/Contact.js ===

