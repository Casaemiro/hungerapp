import React from 'react'

export default function DonationSection() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const wow = document.querySelector('#form-submit')
    // const data = new FormData(event.target);
    
     let fullname =wow.fullname.value
     let email = wow.email.value
     let phone = wow.phone.value
     let country = wow.country.value
     let subject = wow.subject.value
     console.log(fullname, email,phone,country, subject)
     return 0;
  }

  


  return (
    <div className="Container-Donate">
    <h1> Welcome To The Donation Box!</h1>
    <p>We do whatever it takes for our cause 
      but we can't do it without you. Please Specify what 
      type of Donation you want to offer!
    </p>
    <form id="form-submit">

          <label for="fname">Full Name</label>
          <input type="text" id="fname" name="fullname" placeholder="Your name.." required />

          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Provide your Email.." />

          <label for="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" placeholder="Enter your Phone Number.." required/>

           <label for="country">Country</label>
          <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          </select>

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" clstyle={"height:200px"} required></textarea>

        <button type="submit" onClick={handleSubmit}>Submit</button>

    </form>


  
</div>
  )
}
