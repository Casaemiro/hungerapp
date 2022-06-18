import React from 'react'

export default function DonationSection() {
  return (
    <div className="Container-Donate">
    <h1> Welcome To The Donation Box!</h1>
    <p>We do whatever it takes for our cause 
      but we can't do it without you. Specify what 
      type of Donation you want to offer!
    </p>
    <form id="form-submit">

          <label for="fname">Full Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label for="email">Email</label>
          <input type="text" id="email" name="lastname" placeholder="Provide your Email.." />

          <label for="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" placeholder="Enter your Phone Number.." />

           <label for="country">Country</label>
          <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          </select>

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" clstyle={"height:200px"}></textarea>

        <input type="submit" value="Submit" />

    </form>


  
</div>
  )
}
