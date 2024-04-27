import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div>
        <h1>Enhancing Human-Robot Interaction: Accelerating Speech Recognition with GPT-4 (2024)</h1>
        <h2>Background</h2>
        <p>Is it possible to efficiently implement speech 
            recognition in robots by using a generative AI model 
            to convert human speech to machine-readable commands, and will 
            it improve human-robot interaction?</p>
        <p>Iesha is a senior at Glenelg High School (maybe delete this bc its in my home page).
            the story + further applications
        </p>
        <h2>Abstract</h2>
        <p>This paper explores the integration of generative artificial intelligence (AI) models into speech recognition technology for robotics, creating a transformative approach to enhancing human-robot interaction (HRI). The researcher advocates for the use of large language models (LLMs) to expedite the conversion of speech to a machine-readable format, foster more natural interactions between humans and robots, and reduce human error in robot control. The researcher delved into the text processing capabilities of LLMs, the dynamics of physical HRI, strategies for minimizing human error, and the inherent drawbacks of deploying LLMs in practical applications in the literature review. An experiment utilizing a system called iRobot-GPT provided empirical support for the thesis, demonstrating notable improvements in the speed and accuracy of speech-to-command conversion, alongside a more intuitive and error-resistant interaction model. The findings concluded that the integration of generative AI models into speech recognition technologies significantly enhances the efficiency and user experience of HRI. However, there are some limitations with this system, such as the minor inaccuracies of speech recognition technology and their effects on the transcription. Nonetheless, this advancement not only makes interactions with robots more fluid and natural but also demonstrates how AI can be used to refine the speech recognition process, setting a precedent for future developments in robotic systems.
        </p>
        <p>
            <Link href="https://docs.google.com/presentation/d/1icfWSpeNmX_r3PT9wde8HEADLlG5nlrAdKTAqVtuhWs/edit?usp=sharing">
                Oral Presentation
            </Link>
        </p>
        <div className="link-table">
            <div className="link-row link-heading">
                <div className="link-title">
                Title
                </div>
                <div className="link-desc">
                DEdcr    
                </div>
            </div>
            <div className="link-row">
                <div className="link-title">
                <a href="THE URL OF THE LINK">My Title Here</a>
                </div>
                <div className="link-desc">
                It's a thing. A very nice thing. Go click on it.
                </div>
            </div>
            .. more link-row items
        </div>
    </div>
  );
};

export default About;
