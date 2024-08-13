import { useState, useRef, useEffect } from 'react';


import Page1 from './components/page1/page1.jsx';
import Page2 from './components/page2/page2.jsx';
import Page3 from './components/page3/page3.jsx';
import Page4 from './components/page4/page4.jsx';

import './App.css';


function App() {
  const [arrowDirection, setArrowDirection] = useState(false);
  const [dropDown, setDropDown] = useState(false); 
  const [projectImg, setProjectImg] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const scrollP = useRef(0);
  const page2P = useRef(0);
  const page3P = useRef(0);
  const page4P = useRef(0);
  const pageBottom = useRef(0);
  const pageTop = useRef(0);
  let rememberDropDown = useRef(false);
  let rememberProjectImg = useRef(false);
 
  useEffect(() => {
    if(window.innerWidth <= 770 && !projectImg){
      setProjectImg(true);
      rememberProjectImg = true;
    }
    if(window.innerWidth <= 485 && !dropDown){
      setDropDown(true);
      rememberDropDown = true;
    }

    function handleResize() {
      if(window.innerWidth <= 770){
        setProjectImg(true);
        rememberProjectImg = true;
      }else if(window.innerWidth > 770 && rememberProjectImg){
        setProjectImg(false);
        rememberProjectImg = false;
      }
      if(window.innerWidth <= 485){
        setDropDown(true);
        rememberDropDown = true;
      }else if(window.innerWidth > 485 && rememberDropDown){
        setDropDown(false);
        rememberDropDown = false;
      }
    }

    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }

  }, []);


  

  const handleScroll = () => {
    
    
    if(pageBottom.current.offsetTop < (scrollP.current.scrollTop + window.innerHeight) ){
      setArrowDirection(true);
    }else if(arrowDirection && (scrollP.current.scrollTop + window.innerHeight) < pageBottom.current.offsetTop){
      setArrowDirection(false);
    }
    
  }

  const scrollToNextSection = () => {
    let scrollHeight = 0;
    if(window.innerHeight > 800){
      scrollHeight = scrollP.current.scrollTop + window.innerHeight;
    }else{
      scrollHeight = scrollP.current.scrollTop + 815;
    }

    const page2MiddleHeight = ((page3P.current.offsetTop - page2P.current.offsetTop) / 2) + page2P.current.offsetTop;
    const page3MiddleHeight = ((page4P.current.offsetTop - page3P.current.offsetTop) / 2) + page3P.current.offsetTop;

    if(scrollHeight <= page2MiddleHeight){
      page2P.current.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });
    }else if(scrollHeight > page2MiddleHeight && scrollHeight < page3MiddleHeight){
      page3P.current.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });
    }else if(scrollHeight >= page3MiddleHeight && scrollHeight < pageBottom.current.offsetTop){
      page4P.current.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });
    }else if(arrowDirection){
      pageTop.current.scrollIntoView({
        behavior:"smooth",
        block:"start"
      })
    }
  
  }

  const dropDownHandler = () => {
    setDropDownOpen((dropDownOpen) => !dropDownOpen);
  }

  return (
    <div id="scroll" ref={scrollP} onScroll={handleScroll}>
      {/* PAGE 1 */}
      <Page1 dropDownHandler={dropDownHandler} pageTop={pageTop} dropDown={dropDown} dropDownOpen={dropDownOpen}/>
      {/* PAGE 2 */}
      <Page2 page2P={page2P} projectImg={projectImg} />
      {/* PAGE 3 */}
      <Page3 page3P={page3P}/>
      {arrowDirection ? 
      <button onClick={() => scrollToNextSection()} id="arrow" >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 11L12 8M12 8L9 11M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> 
      </button>
      :
      <button onClick={() => scrollToNextSection()} id="arrow" >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 13L12 16M12 16L15 13M12 16V8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>  
      </button>
      }
      <div id="buffer" />
      {/* Contact Info */}
      <Page4 page4P={page4P} />
      {/* About */}
      <div ref={pageBottom} id="about">
        <h1>About</h1>
        <p>A curious, self-driven, Computer-Science graduate from University of Massachusetts Dartmouth looking to enter the work force, preferably as a full-stack developer. What experience I lack I make up with an unrelenting desire to learn and grow, not only as a developer but as a person.</p>
      </div>
    </div>
  )
}

export default App
