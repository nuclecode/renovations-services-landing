import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';
// Import other components

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Footer />
      {/* ... other components */}
    </div>
  );
}

export default App;







// import React from 'react';
// // import styled from './styledComponents/styledComponents';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
//   background-color: #D3D3D3; /* Light gray from Clean and Professional palette */
// `;

// const Hero = styled.header`
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// const Title = styled.h1`
//   font-size: 3rem;
//   color: #000080; /* Navy blue from Classic and Trustworthy palette */
// `;

// const Subtitle = styled.p`
//   font-size: 1.5rem;
//   color: #696969; /* Gray from Classic and Trustworthy palette */
// `;

// const ServicesSection = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// const ServiceCard = styled.div`
//   width: 300px;
//   background-color: #008080; /* Teal from Modern and Energetic palette */
//   color: #FFFFFF;
//   padding: 1rem;
//   margin-bottom: 2rem;
//   text-align: center;
// `;

// const ServiceTitle = styled.h3`
//   font-size: 1.8rem;
// `;

// const ServiceDescription = styled.p`
//   font-size: 1rem;
// `;

// const ContactSection = styled.section`
//   text-align: center;
// `;

// const ContactButton = styled.button`
//   background-color: #FFA500; /* Orange from Warm and Inviting palette */
//   color: #FFFFFF;
//   padding: 0.8rem 1.5rem;
//   border: none;
//   cursor: pointer;
// `;

// function App() {
//   return (
//     <Container>
//       <Hero>
//         <Title>Your Trusted Renovation Electrician</Title>
//         <Subtitle>Expert electrical services for your home or business.</Subtitle>
//       </Hero>
//       <ServicesSection>
//         <ServiceCard>
//           <ServiceTitle>Kitchen Renovations</ServiceTitle>
//           <ServiceDescription>Upgrade your kitchen with modern electrical solutions.</ServiceDescription>
//         </ServiceCard>
//         {/* Add more service cards here */}
//       </ServicesSection>
//       <ContactSection>
//         <ContactButton>Get a Free Quote</ContactButton>
//       </ContactSection>
//     </Container>
//   );
// }

// export default App;

// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
