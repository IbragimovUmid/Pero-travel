  import React from 'react'
import './personalpage.scss'

const Personalpage = () => {
  return (
    <div data-aos="fade-up" className="per-head">
      <img className="per-img" src="img/ava.png" alt="" />
      <div>
        <input className="per-login" type="text" placeholder="Account" />
        <input className="per-login" type="text" placeholder="Email" />
      </div>
    </div>
  );
}

export default Personalpage