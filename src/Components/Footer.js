import React, { useEffect } from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";



const Footer = () => {

  useEffect(() => {
    const section = document.querySelector('#my-footer');
      var socials = document.querySelector('.socials')
      var links = document.querySelector('.footer-link')
      var copy = document.querySelector('.copy-rights')
      const observer = new IntersectionObserver(entries => {
  
        entries.forEach(entry => {
          if (entry.isIntersecting) {
           
            

            socials.classList.add('animated')
            links.classList.add('animated')
            copy.classList.add('animated')

  
           
          }
        })
      })
  
      // Start observing the section element
      observer.observe(section)
  })
  return (
    <div className="footer-container" >
      <footer >
        <div class="footer-content" id="my-footer">
          <ul class="socials">
            <li>
              <a href="mailto:alasso.tech@gmail.com" rel="noreferrer" target="_blank">
                <i class="fa fa-envelope-o"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/" rel="noreferrer" target="_blank">
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/alasso.tech/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/alassotech/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
          <div className="footer-link">
            <ul>
              <li className="nav-item studymaterial-sub-menu-hover mx-3">
                <Link className="nav-link" to="/studymaterial">
                  Study Material
                </Link>
              </li>
              <li className="nav-item nptel-sub-menu-hover mx-3">
                <Link className="nav-link" to="/nptel">
                  NPTEL
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/help">
                  Help
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/developers">
                  Developers
                </Link>
              </li>
              <li className="nav-item mx-3">
              <a className="nav-link" href="https://forms.gle/9XwYgGrQsY9ySyer7" rel="noreferrer" target="_blank">
              Rate Us
              </a>
            </li>
            </ul>
          </div>
          <p className="copy-rights">
            Copyright &copy; 2023 <strong>Alasso</strong> | All Rights &reg;
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
