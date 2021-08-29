import React from 'react'
import "./social.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

function Social() {
    return (
        <div className="social">
            <div className="inner">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/ritam-nandi-9272a2137/" target="_blank" rel="noreferrer">  <LinkedInIcon /> </a>
                    </li>
                    <li>
                        <a href="https://github.com/Ritam-Nandi/" target="_blank"  rel="noreferrer"> <GitHubIcon /> </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ritamnandi/" target="_blank"  rel="noreferrer"> <InstagramIcon /> </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCd8QPQuWy_D2vVfpuYSKb3A/featured" target="_blank" rel="noreferrer"> <YouTubeIcon /> </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ritam.nandi.98/" target="_blank"  rel="noreferrer"> <FacebookIcon /> </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Social
