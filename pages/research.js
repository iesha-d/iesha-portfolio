import React from 'react';
import Link from 'next/link';
import styles from '../styles/Research.module.css';
import ImageWithCaption from './research-components';

const About = () => {
  return (
    <div>
        <h1>Enhancing Human-Robot Interaction: Accelerating Speech Recognition with GPT-4 (2024)</h1>
        <h2>Background</h2>
        <p>Is it possible to efficiently implement speech 
            recognition in robots by using a generative AI model 
            to convert human speech to machine-readable commands, and will 
            it improve human-robot interaction? This was the question I set
            out to answer during my senior year of high school, under the tutleage of my mentors, Ms. Anamary Daniel and Dr. Wendell Chun, at Inspection Experts Inc. (IEI). I was able to create a robotic system that accurately responded to voice commands
            using GPT-4. I will continue to develop this project by giving it
            the ability to respond to other types of commands.</p>
        <p>My research paper explores the integration of generative artificial intelligence (AI) models into speech recognition technology for robotics, creating a transformative approach to enhancing human-robot interaction (HRI). I advocate for the use of large language models (LLMs) to expedite the conversion of speech to a machine-readable format, foster more natural interactions between humans and robots, and reduce human error in robot control. I delved into the text processing capabilities of LLMs, the dynamics of physical HRI, strategies for minimizing human error, and the inherent drawbacks of deploying LLMs in practical applications in the literature review. An experiment utilizing a system called iRobot-GPT provided empirical support for the thesis, demonstrating notable improvements in the speed and accuracy of speech-to-command conversion, alongside a more intuitive and error-resistant interaction model. The findings concluded that the integration of generative AI models into speech recognition technologies significantly enhances the efficiency and user experience of HRI. However, there are some limitations with this system, such as the minor inaccuracies of speech recognition technology and their effects on the transcription. Nonetheless, this advancement not only makes interactions with robots more fluid and natural but also demonstrates how AI can be used to refine the speech recognition process, setting a precedent for future developments in robotic systems.
        </p>
        <h2>The Product</h2>
        <p>
            The system I developed, iRobot-GPT, is a robotic system that uses GPT-4 to convert human speech to machine-readable commands. This system is designed to be user-friendly and intuitive, allowing users to interact with the robot through natural language. The system is capable of understanding a wide range of commands and can perform a variety of tasks, such as moving objects, navigating through a space, and responding to questions. The integration of GPT-4 into the system has significantly improved the speed and accuracy of speech recognition, making interactions with the robot more seamless and efficient.
            After demonstrating the current capabilities of the robotic system at the IEI Columbia Office, I asked audience members to consider future growth opportunities and ways to improve certain aspects of the system. Many of them discussed the inability of the robot to move in a circular motion, which is something I’ve begun to tackle with my mentors as a result of the audience’s feedback. 
        </p>
        <h2>The Research</h2>
        <p>
            My oral presentation, which touches on the main components of my research can be found <Link href='https://docs.google.com/presentation/d/1icfWSpeNmX_r3PT9wde8HEADLlG5nlrAdKTAqVtuhWs/edit?usp=sharing'>here</Link>. For a more in-depth look into the research process, please refer to my <Link href='https://docs.google.com/document/d/1GHQXOoTDZO5L3GCC9B8Of3f8t5ftXNE0JVZP0zEi_O0/edit?usp=sharing'>research paper</Link> and my research journal.
        </p>
        <p>
            <Link href="/">
                Back to Home
            </Link>
        </p>
        <div className={styles.imageCaptionContainer}>
            <ImageWithCaption
            src="/robot-image.webp"
            alt="robot image"
            caption="This image was generated with the assistance of AI."
        />
        </div>
        <style jsx global>{`
                html,
                body {
                padding: 5px;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                box-sizing: border-box;
                }
            `}
        </style>
    </div>



  );
};

export default About;
