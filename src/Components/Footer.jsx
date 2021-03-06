import React from 'react';
import "../Styles/Footer.css";
import GithubIcon from "@mui/icons-material/GitHub"
import LinkedinIcon from "@mui/icons-material/LinkedIn"



function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
    <a href='https://www.linkedin.com/in/eswarattuluri/' ><LinkedinIcon /></a>
    <a href='https://github.com/eswarchandravidyasagar'><GithubIcon /></a>
    </div>
    <p>&copy; 2022 eswarattuluri.com</p>
    </div>
  )
}

export default Footer