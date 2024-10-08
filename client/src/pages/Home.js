import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import { GiHospital } from 'react-icons/gi';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, #000, #001f3f); /* Gradient of black and royal blue */
  overflow-x: hidden; /* Hide horizontal scrollbar */
  color: #eee; /* Lighten text color to off-white */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DescriptionBox = styled.div`
  background: rgba(255, 255, 255, 0.8); /* Light background color with opacity */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* Box shadow for a subtle effect */
  margin: 10px;
  max-width: 300px; /* Set maximum width for each box */
`;

const Description = styled.p`
  font-size: 1rem; /* Smaller font size */
  margin: 0; /* Remove default margin */
  color: #333; /* Set text color to a dark gray */
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const DoctorIcon = styled(GiHospital)`
  font-size: 4rem;
  color: #eee; /* Set color to off-white */
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8)); /* Shiny effect with drop shadow */
`;

const Copyright = styled.div`
  margin-top: 40px;
  font-size: 0.8rem;
`;

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
  };

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80 },
    },
  };

  const descriptionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <Container>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Content>
          <h1 style={{fontSize:60}}>            AnomXplorer
</h1>
          <Title variants={titleVariants}>
             Log-Based Anomaly Detection System For Hospitals Using ML
          </Title>
          <motion.div variants={descriptionVariants}>
            <DescriptionContainer>
              <DescriptionBox>
                <Description>
                <FiCheckCircle />
                   The Log-Based Anomaly Detection System is a cutting-edge security solution that leverages advanced algorithms to scrutinize and interpret log data, uncovering subtle irregularities and potential threats within a computer system.
                </Description>
              </DescriptionBox>

              <DescriptionBox>
                <Description>
                
           <FiAlertTriangle />
                  Our system provides real-time anomaly detection, ensuring the immediate identification and response to potential security threats, thereby enhancing the overall security posture of hospital systems.
                </Description>
              </DescriptionBox>

              <DescriptionBox>
                <Description>
                <FiCheckCircle />
                  Leveraging machine learning, our system adapts and evolves to new security challenges, providing a robust defense against ever-changing cybersecurity threats in the healthcare environment.
                </Description>
              </DescriptionBox>
            </DescriptionContainer>
          </motion.div>
          <IconContainer>
            <DoctorIcon />
          </IconContainer>
        </Content>
      </motion.div>
      <Copyright>
        <p>&copy; 2024 AnomXplorer All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Home;