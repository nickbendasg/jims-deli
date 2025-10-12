import { useEffect } from "react";
import CrewJpg from '../../assets/images/crew.jpg';
import { useTheme } from '../../hooks/useTheme';

export default function Intro() {

  const { changeColor, color, changeMode, mode } = useTheme();


  const initer = (e) => {
  
    var sidebar = document.getElementById('bannerBackground');
    var middleBox = document.getElementById('middle-box');
    var quickLinks = document.getElementById('quick-links');
          
    document.addEventListener('scroll', function(e) { 
      
      var middleBoxHeight = middleBox.offsetHeight;
      var scrollZone = middleBoxHeight - 0;
      var windowTop = window.pageYOffset;
      
      // console.log('s- ' + scrollZone + '   |  ' + 't- ' + windowTop);
      if (scrollZone < windowTop) {
        quickLinks.style.position = 'fixed';
        // console.log(":A");
      } else {
        quickLinks.style.position = null;
        // console.log(':R');
      };
    });

  };

  const tempColor = () => {
    const rndInt = Math.floor(Math.random() * 6) + 0;
    const colorway = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    changeColor(colorway[rndInt]);
  }



  useEffect(() => {
    initer();
  }, []);

  return (

    <>


      <div id="tempBackground"></div>
      
      <div id="bannerBackground" className="bannerBackgroundClass"></div>
    
      <div id="head">
        <div className="bodyFiller lightGreyer"></div>
        <div className="tempStyle">
          <div id="head-container">

            <div id="topBannerContainer">  
              <div id="top-banner">
                <div className="bannerText"><span>Call us at 860.747.8857</span><span>or</span><span>Fax a order to 860.747.7588</span></div>
              </div>
            </div>


            <div id="quick-links">
              <div className="links"><a href="#body1">ABOUT</a></div>
              <div className="links"><a href="#body3">BREAKFAST</a></div>
              <div className="links"><a href="#body4">MORNING SPECIALS</a></div>
              <div className="links"><a href="#body5">LUNCH</a></div>
              <div className="links"><a href="#salad_starter">SALADS</a></div>
              <div className="links"><a href="#body6">SPECIALTY SANDWICHES</a></div>
              <div className="links"><a href="#body7">COMMUNITY</a></div>
              <div className="links"><a href="#body8">CONTACT US</a></div>
            </div>
            <div id="middle-box" className="center_box">
              <div id="middle-title" style={{color: color}} onClick={tempColor}>JIMS GROCERY & DELI</div>
              <div id="middle-text">SERVING PLAINVILLE SINCE 1975</div> 
            </div>

          </div>
        </div>
      </div>







      <div id="body1" className="bodyObject">
        <div className="bodyFiller whiter"></div>
            
        <div id="body1-top">
          

          <div className="b1t_column">  
            <div className="b1t_label">Location</div>
            <div className="b1t_value">361 Woodford Ave, Plainville, CT</div>
          </div>
          <div className="b1t_column">  
            <div className="b1t_label">Hours</div>
            <div className="b1t_value">Mon-Fri 5AM to 8PM | Sat 6AM to 8PM | Sun 7AM to 4PM</div>
          </div>
          
          <div className="b1t_column" style={{alignItems: 'flex-end', flexGrow: '1'}}>  
            <div className="b1t_label">Phone</div>
            <div className="b1t_value">860.747.8857</div>
          </div>
          
        </div>

        <div id="body1-one">
          <div className="big_label">
            A 2 minute drive away from both RT10 the center of Plainville and i84 Exit 34 Crooked Street
          </div>
          <div className="text">
            Breakfast, lunch, or dinner come on over for fresh food or to get that item on the grocery list. A proud member of the Plainville community, try one of the many specialty sandwiches crafted by the locals that come through our doors. Whether it is a rush and you need to be in and out, looking for a place to relax and stay, or just need that one item you forgot to make for the event our doors will be open on Woodford Ave.
          </div>
        </div>
        <div id="body1-two">
          <div style={{minWidth: '75%'}}>
            <div className="label_what">
              MEET THE CREW:
            </div>
            <div className="text">
              Selling food and grocerys is only a part of the story and not the soul. Whether it be local charity orginizations, sports teams, or schools we try to be a positive contributer to our community where ever possible. It is the people that enter our doors that we care about the most, that we connect to and spend our time with.
            </div>
            <div className="text">
              Come through our doors any day and you are likely to see Sanjay behind the counter, or more likely than not on the other side of the counter laughing and enjoying conversation with a customer. Julie has been serving our lunch rush for over 20 years and Jim and Laura can help you with any of your late night cravings. It's not just the food that people come here for but the relationships that have been forged over the years.
            </div>
          </div>
          <div className="center_box" style={{minWidth: '25%', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '50px'}}>
            <img src={CrewJpg} style={{width: '90%', height: 'auto'}} alt="Deli Crew"/>
          </div>
        </div>

      </div>
    </>

  )

}