import React, { useState, useEffect } from 'react';
import './Hero_carousel.scss'

const svgIcons = [
  (primary, accent) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke={primary} strokeWidth="5" fill={accent} />
    </svg>
  ),
  (primary, accent) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="80" height="80" x="10" y="10" stroke={primary} strokeWidth="5" fill={accent} />
    </svg>
  ),
  (primary, accent) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <polygon points="50,15 85,85 15,85" stroke={primary} strokeWidth="5" fill={accent} />
    </svg>
  ),
  (primary, accent) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <ellipse cx="50" cy="50" rx="35" ry="20" stroke={primary} strokeWidth="5" fill={accent} />
    </svg>
  ),
];

const colorPalettes = [
  {
    title: "Classic and Trustworthy",
    primary: "#000080", // Navy Blue
    secondary: "#696969", // Gray
    accent: "#FFD700", // Gold
  },
  {
    title: "Modern and Energetic",
    primary: "#008080", // Teal
    secondary: "#FFFFFF", // White
    accent: "#00FF00", // Lime Green
  },
  {
    title: "Clean and Professional",
    primary: "#D3D3D3", // Light Gray
    secondary: "#FFFFFF", // White
    accent: "#0000FF", // Blue
  },
  {
    title: "Warm and Inviting",
    primary: "#FFA500", // Orange
    secondary: "#FFF8DC", // Cream
    accent: "#A52A2A", // Brown
  },
];

const Hero = () => {
  const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPaletteIndex((prevIndex) => (prevIndex + 1) % colorPalettes.length);
    }, 3000); // Change SVG every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const { title, primary, secondary, accent } = colorPalettes[currentPaletteIndex];

  return (
    <div className="hero-container" style={{ backgroundColor: secondary, padding: '50px 0', textAlign: 'center' }}>
      <h1 style={{ color: primary }}>{title}</h1>
      <div className="carousel" style={{ display: 'inline-block', margin: '20px' }}>
        {svgIcons[currentPaletteIndex](primary, accent)}
      </div>
      <p style={{ color: accent }}>High-quality service with attention to detail.</p>
    </div>
  );
};

export default Hero;





// import React, { useState, useEffect } from 'react';
// import './Hero.scss';


// const colorPalettes = [
//   {
//     title: "Classic and Trustworthy",
//     primary: "#000080", // Navy Blue
//     secondary: "#696969", // Gray
//     accent: "#FFD700", // Gold
//     svg: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
//         <circle cx="50" cy="50" r="40" stroke={colorPalettes[0].primary} strokeWidth="5" fill={colorPalettes[0].accent} />
//       </svg>
//     ),
//   },
//   {
//     title: "Modern and Energetic",
//     primary: "#008080", // Teal
//     secondary: "#FFFFFF", // White
//     accent: "#00FF00", // Lime Green
//     svg: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
//         <rect width="80" height="80" x="10" y="10" stroke={colorPalettes[1].primary} strokeWidth="5" fill={colorPalettes[1].accent} />
//       </svg>
//     ),
//   },
//   {
//     title: "Clean and Professional",
//     primary: "#D3D3D3", // Light Gray
//     secondary: "#FFFFFF", // White
//     accent: "#0000FF", // Blue
//     svg: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
//         <polygon points="50,15 85,85 15,85" stroke={colorPalettes[2].primary} strokeWidth="5" fill={colorPalettes[2].accent} />
//       </svg>
//     ),
//   },
//   {
//     title: "Warm and Inviting",
//     primary: "#FFA500", // Orange
//     secondary: "#FFF8DC", // Cream
//     accent: "#A52A2A", // Brown
//     svg: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
//         <ellipse cx="50" cy="50" rx="35" ry="20" stroke={colorPalettes[3].primary} strokeWidth="5" fill={colorPalettes[3].accent} />
//       </svg>
//     ),
//   },
// ];

// const Hero = () => {
//   const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPaletteIndex((prevIndex) => (prevIndex + 1) % colorPalettes.length);
//     }, 3000); // Change SVG every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const { title, primary, secondary, accent, svg } = colorPalettes[currentPaletteIndex];

//   return (
//     <div className="hero-container" style={{ backgroundColor: secondary, padding: '50px 0', textAlign: 'center' }}>
//       <h1 style={{ color: primary }}>{title}</h1>
//       <div className="carousel" style={{ display: 'inline-block', margin: '20px' }}>
//         {svg}
//       </div>
//       <p style={{ color: accent }}>High-quality service with attention to detail.</p>
//     </div>
//   );
// };

// export default Hero;



// // import React, { useState } from 'react';
// // import styled from 'styled-components';

// // const Hero = styled.header`
// //   text-align: center;
// //   margin-bottom: 2rem;
// // `;

// // const CarouselContainer = styled.div`
// //   position: relative;
// //   overflow: hidden;
// //   width: 100%;
// //   height: 300px;
// // `;

// // const Slide = styled.div`
// //   position: absolute;
// //   width: 100%;
// //   height: 100%;
// //   transition: transform 0.5s ease;
// // `;

// // const Arrow = styled.button`
// //   position: absolute;
// //   top: 50%;
// //   transform: translateY(-50%);
// //   width: 40px;
// //   height: 40px;
// //   border: none;
// //   background: none;
// //   cursor: pointer;
// //   z-index: 1;
// // `;

// // const LeftArrow = styled(Arrow)`
// //   left: 0;
// // `;

// // const RightArrow = styled(Arrow)`
// //   right: 0;
// // `;

// // const SvgContainer = styled.div`
// //   width: 100%;
// //   height: 100%;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// // const Svg = styled.svg`
// //   width: 200px;
// //   height: 200px;
// // `;

// // const palette1 = {
// //   primary: '#000080',
// //   secondary: '#696969',
// //   accent: '#FFD700',
// // };

// // const palette2 = {
// //   primary: '#008080',
// //   secondary: '#FFFFFF',
// //   accent: '#00FF00',
// // };

// // const palette3 = {
// //   primary: '#D3D3D3',
// //   secondary: '#FFFFFF',
// //   accent: '#0000FF',
// // };

// // const palette4 = {
// //   primary: '#FFA500',
// //   secondary: '#FFF8DC',
// //   accent: '#A52A2A',
// // };

// // function Hero() {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   const slides = [
// //     {
// //       palette: palette1,
// //       svg: (
// //         <Svg>
// //           {/* Your SVG content for palette 1 */}
// //         </Svg>
// //       ),
// //     },
// //     {
// //       palette: palette2,
// //       svg: (
// //         <Svg>
// //           {/* Your SVG content for palette 2 */}
// //         </Svg>
// //       ),
// //     },
// //     // Add more slides for the remaining palettes
// //   ];

// //   const handleNextSlide = () => {
// //     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
// //   };

// //   const handlePrevSlide = () => {
// //     setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
// //   };

// //   return (
// //     <Hero>
// //       <CarouselContainer>
// //         {slides.map((slide, index) => (
// //           <Slide
// //             key={index}
// //             style={{ transform: `translateX(-${index * 100}%)` }}
// //           >
// //             <SvgContainer>
// //               <Svg style={{ fill: slide.palette.primary }}>
// //                 {slide.svg}
// //               </Svg>
// //             </SvgContainer>
// //           </Slide>
// //         ))}
// //         <LeftArrow onClick={handlePrevSlide}>&#8249;</LeftArrow>
// //         <RightArrow onClick={handleNextSlide}>&#8250;</RightArrow>
// //       </CarouselContainer>
// //     </Hero>
// //   );
// // }

// // export default Hero;


// // // import React from 'react';

// // // function Hero() {
// // //   return (
// // //     <div className="hero">
// // //       <h1>Transform Your Home with Expert Renovations</h1>
// // //       <p>Your trusted partner for apartment renovation, painting, and electrical work.</p>
// // //       <button>Get a Free Quote</button>
// // //     </div>
// // //   );
// // // }

// // // export default Hero;