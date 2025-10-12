=== File: src/components/home/Community.js ===
=== Content ===
import { useEffect } from "react";


export default function Community() {

  var board = null;
  var panelsAr = [];
  var membersAr = [];



  var urlList = [

  ]



  const init = function() {
    board  = document.getElementById('community_board');

    var totalCounts = 90;
    var counts = 13 * 4;
    counts = 27;
    var counter = 1;
    
    for(counter = 1; counter < totalCounts; counter++){
      var imgUrl = 'https://firebasestorage.googleapis.com/v0/b/jims-deli.appspot.com/o/community%2F' + counter + '.jpg?alt=media&token=f9ae4c57-3b98-47d0-82f8-d99a2c64ad9e';
      
      var newMemberObj = {
        'number': counter,
        'url': imgUrl,
        'active': false
      };
      
      membersAr.push(newMemberObj);
    };
    
    var counter = 1;
    for(counter = 1; counter < counts; counter++){
      
        var frame = createElement('DIV', null, 'community_imgFrame', null, null);
        var imageBackplate = createElement('DIV', null, 'community_imgBackplate', null, null);
        var image1 = createElement('DIV', null, 'community_img', null, null);
        var image2 = createElement('DIV', null, 'community_img', null, null);
      
        var randomMember = requestMember();
        image1.style.backgroundImage = "url('" + randomMember.url + "')";
        image2.style.backgroundImage = "url('" + randomMember.url + "')";
       
        frame.appendChild(imageBackplate);
        imageBackplate.appendChild(image1);
        imageBackplate.appendChild(image2);
        board.appendChild(frame);
      
        var newPanelObj = {
          'elements': {
            'frame': frame,
            'backplate': imageBackplate,
            'image1': image1,
            'image2': image2
          },
          'imageState': true,
          'returnMember': function() {
            return randomMember;
          },
          'refresh': function() {
            var panelGet = this;
            var curMember = panelGet.returnMember();
            var newMember = requestMember();
            // console.log(curMember);
            curMember.active = false;
            // console.log(curMember);
            // console.log(membersAr);
            // debugger;
            panelGet.setMember(newMember);
          },
          'setMember': function(memberObj) {
            var panelObj = this;
            
            var returnMemberFn = function() {
                return memberObj;
            };
            
            panelObj.returnMember = returnMemberFn;
            
            var image1grab = panelObj.elements.image1;
            var image2grab = panelObj.elements.image2;
            
            var first, second;
            
            if(panelObj.imageState){
              first = image1grab;
              second = image2grab;
              panelObj.imageState = false;
            } else {
              first = image2grab;
              second = image1grab;
              panelObj.imageState = true;
            };
            
            second.style.backgroundImage = "url('" + memberObj.url + "')";
          
            setTimeout(function() {
              first.style.opacity = 0;
              
              setTimeout(function() {
                first.style.zIndex = '1';
                second.style.zIndex = '2';
                first.style.opacity = 1;
                first.style.backgroundImage = "url('" + memberObj.url + "')";
                
              }, 800);
            }, 800);
            
            panelObj.elements.image2.style.backgroundImage = "url('" + memberObj.url + "')";
              
            panelObj.elements.image1.style.trasition = null;
            panelObj.elements.image2.style.trasition = null;
            
            
          }
        };
      
        panelsAr.push(newPanelObj);
    };
    
    // console.log(thissy);
  };
  
  
  const requestMember = function() {
    var thissy = this;
    var inactiveList = [];
    
    var firstCount = 0;
    for(firstCount = 0; firstCount < membersAr.length; firstCount++){
      var memberGrab = membersAr[firstCount];
      if(memberGrab.active == false){
        inactiveList.push(memberGrab);
      };
    };
    
    var randomInactiveNum = Math.floor(Math.random() * inactiveList.length);
    var randomMember = inactiveList[randomInactiveNum];
    randomMember.active = true;
    return randomMember;
  };
  
  
  const setShuffle = function() {
    var thissy = this;
    setTimeout(function() {
      shuffle();
      setShuffle();
    }, 2800);
  };
  
  const shuffle = function() {
    // console.log('shuffle');
    
    var thissy = this;
    var memberLength = membersAr.length;    
    var panelLength = panelsAr.length;
    
    var randomPanel = Math.floor(Math.random() * panelLength);
    // var randomMember = Math.floor(Math.random() * memberLength);
    
    var panelGrab = panelsAr[randomPanel];
    // var memberGrab = membersAr[randomMember];
    
    // console.log(panelGrab);
    // console.log(memberGrab);
    // panelGrab.setImage(memberGrab.url);
    
    panelGrab.refresh();
    
  };




  const starter = function() {

    var grab = document.getElementById('body7');
    
    console.log(grab.classList);
    if(!grab.classList.contains('startMark')){

      init();
      setShuffle();
      grab.classList.add('startMark');
    };
  };





  const createElement = function(elType, elID, elClass, innerHTML, elParent) {

    var newElement = document.createElement(elType);
  
    if(elID != null){
        newElement.id = elID;
    };
    if(elClass != null){
        newElement.className = elClass;
    };
    if(innerHTML != null){
        if(elType == "INPUT"){
            newElement.value = innerHTML;
        }else{
            // console.log('????????????????????????????/');
            newElement.innerHTML = innerHTML;
        };
    };
    if(elParent != null){
  
    };
  
    return newElement;
  };
  






  useEffect(() => {
    starter();
  }, []);







  return (

    <div id="body7" className="bodyObject test">
      <div className="bodyFiller"></div>
      
      <div className="big_title" onClick={starter}>
        Community
      </div>
      
      <div id="community_board">
      </div>
      
    </div> 
  )

}
=== End of src/components/home/Community.js ===

