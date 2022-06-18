import React from 'react'

export default function Help() {

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
    <h1> Event organizer</h1>
    <p>fill the form bellow to help people know about you food destribution event
    </p>
    <form id="form-submit">

          <label for="fname">Name of orgnisation</label>
          <input type="text" id="fname" name="fullname" placeholder="Your organisation's name.." required />

          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Provide your Email.." />

          <label for="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" placeholder="Enter your Phone Number.." required/>

           <label for="country">Location of destribution</label>
          <select id="country" name="town">
          <option value="australia">Buea</option>
          <option value="canada">Bamenda</option>
          <option value="usa">Limbe</option>
          </select>

        <button type="submit" onClick={handleSubmit}>Submit</button>

    </form>


  
</div>
  )
}
