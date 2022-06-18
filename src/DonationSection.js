import React from 'react'

export default function DonationSection() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const wow = document.querySelector('#form-submit')
    // const data = new FormData(event.target);
    
     let fullname =wow.fullname.value
     let email = wow.fullname.value
     let phone = wow.fullname.value
     let country = wow.fullname.value
     let subject = wow.fullname.value
    // console.log(userInfo)
  //   if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userInfo.email)){
  //     console.log("correct infor")
  //     if(/^[A-Za-z0-9]\w{7,14}$/.test(userInfo.password)){
        
  //       console.log(userInfo)
  //     }else{
  //       alert("Password must be between 7 and 14 characters")
  //       console.log("Password must be between 7 and 14 characters")
  //     }
  // }else{
  //   alert("Email does not exist")
  //   console.log("Email does not exist")
  //   }
  }


  return (
    <div className="Container-Donate">
    <h1> Welcome To The Donation Box!</h1>
    <p>We do whatever it takes for our cause 
      but we can't do it without you. Specify what 
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
