=== File: src/components/pdf/News.js ===
=== Content ===


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import MyDocument from './MyDocument';
import { PDFViewer } from '@react-pdf/renderer';
// import React from 'react';
import { Image, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import MenuData from '../../MenuData';

import { Font } from '@react-pdf/renderer'
import Bookman from "../../Bookman.ttf"
import BookmanBoldItalic from "../../BookmanBoldItalic.ttf"
import TempusSans from "../../TempusSans.ttf"
import TempusSansBold from "../../TempusSansBold.ttf"
import Logo from "../../assets/images/logo.png";
// import PrintingPress from "../../assets/images/PrintingPress.png";
// const pageSize = 'A4';
const pageSize = {width: (11*72), height: (8.5*72)};

Font.registerHyphenationCallback(word => [word]);

Font.register({
  family: "Bookman",
  format: "truetype",
  src: Bookman 
});
Font.register({
  family: "Bookman Bold Italic",
  format: "truetype",
  src: BookmanBoldItalic 
});
Font.register({
  family: "Tempus Sans",
  format: "truetype",
  src: TempusSans 
});
Font.register({
  family: "Tempus Sans Bold",
  format: "truetype",
  src: TempusSansBold
});

const clipName = (name) => {
  return name.replace(/ .*/,'');
}


const cutAr = [0, 8, 15, 23, 25, 27, 42];

const firstCut = cutAr[0];
const secondCut = cutAr[1];
const thirdCut = cutAr[2];
const fourthCut = cutAr[3];
const fifthCut = cutAr[4];
const sixthCut = cutAr[5];
const seventhCut = cutAr[6];


// const fSource = 'https://use.typekit.net/cyv8ztg.css';

// Font.register({ family: 'FamilyName', src: fSource, fontStyle: 'normal', fontWeight: 'normal', fonts?: [] });


const post = {
  op: 'Joyanne Dignazio Wargo',
  date: '6/23/2023',
  time: '7:08 PM',
  content: "Can anyone explain why Southington grads have a full 1/2 of the front page of the paper plus a full page inside and meanwhile Plainville has a paragraph blurb with a two paragraph “story” put all the way in the back of (page 53 ) of the “town” paper as an afterthought? And it’s after all of the award and voting filler… the blatant favoritism is apparent every week with the “athletes of the week” being mostly from Southington and surrounding areas but it would have been really nice to see front page pics of both towns graduating classes.. it would be fairer, at least.. maybe I’m biased because I have a 2023 PHS graduate but I don’t remember it being like this any other year.. am I being sensitive or does anyone else agree?",
  comments: [
    {
      p: 'Lisa Palazzo',
      comment: 'I noticed it too',
      comments: []
    },
    {
      p: 'Nicole Esteves',
      comment: 'Probably because Southington has a higher population and more subscribers',
      comments: [
        {
          p: 'Richard Cameron',
          comment: 'Nicole I agree southington is much larger of a school.',
          comments: []
        }
      ]
    },
    {
      p: 'Tamyra Davis',
      comment: 'https://www.myrecordjournal.com/Contact-Us/Directory See Newsroom Editors. This is who you should direct your concerns to',
      comments: [
        {
          p: 'Abigail Nage',
          comment: 'Tamyra I sent them an email and got no reply',
          comments: [
            {
              p: 'Tamyra Davis',
              comment: 'Abigail call them',
              comments: []
            },
            {
              p: 'Tamyra Davis',
              comment: 'Abigail you’re not going to get any satisfaction here. Just parents in two towns arguing and inevitably blaming the government or elon musk 😂😂😂.',
              comments: []
            }
          ]
        }
      ]
    },
    {
      p: 'Sharon Voisine Thibedeau',
      comment: 'I thought it was odd 🤔',
      comments: []
    },
    {
      p: 'Raegan Armata',
      comment: 'The Citizen is horrendous with the Plainville community news. Any coverage is largely submitted by individuals and organizations.',
      comments: []
    },
    {
      p: 'Janet Rusin Field',
      comment: "I actually don't look at it anymore due to it being all Southington. Very one sided.",
      comments: [
        {
          p: 'Sheila DiMinno',
          comment: "I don’t Either Janet",
          comments: []
        }
      ]
    },
    {
      p: 'Marian Lizon',
      comment: "It's really not a Plainville paper any more. Mostly Southington news.",
      comments: []
    },
    {
      p: 'Karen Durbis',
      comment: "Because they moved to Southington",
      comments: []
    },
    {
      p: 'Seth Winkleman',
      comment: "Well the Record Journal has slowly made it mostly a Southington paper",
      comments: []
    },
    {
      p: 'Daniel Saccu',
      comment: "$$$",
      comments: [
        {
          p: 'Jeff Lachance',
          comment: "Daniel Ding Ding!",
          comments: []
        },
        {
          p: 'Abigail Nage',
          comment: "Daniel still seeing plenty of ads in there for what it’s worth…",
          comments: []
        },
        {
          p: 'Jamie McConnell',
          comment: "Daniel there is a reason they joined with Southington. If Southington funds 75% of the paper more then likely 75% of paper will be Southington news.",
          comments: []
        },
      ]
    },
    {
      p: 'Erica Donovan',
      comment: "Yeah, a little over a year ago they switched the Citizen to mostly Southington. Plainville doesn't really have a newspaper anymore.",
      comments: [
        {
          p: 'Maddog Junkremoval',
          comment: "Erica hometown Connection",
          comments: []
        },
        {
          p: 'Abigail Nage',
          comment: "Erica and The Bristol Press and the New Britain Herald doesn’t cover us either. We used to have three papers now we have none",
          comments: []
        }
      ]
    },
    {
      p: 'Carol Perry',
      comment: "There is hardly any Plainville news anymore.",
      comments: []
    },
    {
      p: 'Tina Ross',
      comment: "There was a class picture in the center of last week's paper but otherwise, the paper is mostly Southington. Makes for good guinea pig cage covering, so thanks for that 🤷‍♀️",
      comments: []
    },
    {
      p: 'Kelly Baillargeon',
      comment: "I thought that also. All the way at the end with hardly any pictures of Plainville grads",
      comments: []
    },
    {
      p: 'Brian Albert',
      comment: "maybe because plainville has 700 student in HS and southington has 2000",
      comments: []
    },
    {
      p: 'Abigail Nage',
      comment: "It’s awful-and all of the athletes of the week are NEVER plainville kids",
      comments: [
        {
          p: 'Jamie McConnell',
          comment: "Abigail not once was a Plainville kid nominated all year.",
          comments: []
        },
        {
          p: 'Matthew Waas',
          comment: "Abigail you do realize there’s over 100 different cities and towns in Connecticut and not everyone of them could mention all the star athletes or put every single graduation on the front page of the news paper. Think about it before being upset about it. The citizens of Plainville really care start writing a paper and send it to the news or newspaper they might publish it. 🤔",
          comments: [
            {
              p: 'Abigail Nage',
              comment: "Matthew we are talking about a paper that used to be dedicated to Plainville (The Citizen) and two local papers (The Bristol Press and the New Britain Herald-that include Plainville and the other towns adjacent to those cities) No one is complaining about the Hartford Courtant , no one is complainfing about CT Insider/Gametime CT (which also totally ignored our athletes but is statewide and as you kindly pointed out no one cares about Plainville…) Local papers that local businesses are purchasing ads from should have local news",
              comments: [
                {
                  p: 'Matthew Waas',
                  comment: "Abigail Nage yeah but if none of y’all care to write stories for the paper why should the paper care about Plainville. I was talking about both paper and the rest of Connecticut. Obviously y’all don’t care enough to buy the citizens paper so they are running stories from other towns you wanna know why because Southington is buying the citizen. 🤔. Y’all should care more about the government wasting your damn tax money.",
                  comments: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      p: 'Susan Marinelli',
      comment: "Used to be that they would alternate every other week. One week would be Southington news; the next week it would be a Plainville paper. Doesn’t seem to do that now.",
      comments: []
    },
    {
      p: 'Val Dumais',
      comment: "This paper prints little or no Plainville news. It is all Southington. The treatment of PHS Graduates is just another example of the paper’s huge bias towards Southington. I think there is little we can do.",
      comments: []
    },
    {
      p: 'Eileen Castrogiovanni',
      comment: "I was told a few years back that there was no longer reporters/ writers for Plainville to report the goings on. If it’s true and someone has time and willing to do so they should contact the paper.",
      comments: []
    },
    {
      p: 'Roberta McConnell',
      comment: "Only good out of it is Plainville’s Gnazzos Flyer",
      comments: []
    },
    {
      p: 'Phillip Dumais',
      comment: "SO RITE !",
      comments: []
    },
    {
      p: 'Linda Frenette',
      comment: "Every week it gets more Southington than Plainville news. Disappointing!",
      comments: []
    },
    {
      p: 'Amy Cassella Jarboe',
      comment: "I have noticed that Southington seems to have taken over that paper too!",
      comments: []
    },
    {
      p: 'Ted Krajewski',
      comment: "It's a free paper.... Not heck of a lot of activity between the two towns. I'm sure they would consider any verifiable news someone would care to submit 🤷",
      comments: [
        {
          p: 'Kelly Krajewski',
          comment: `Ted plus, isn't it specifically for the Southington area, because it's called "The Southington Citizen?"`,
          comments: []
        }
      ]
    },
    {
      p: 'Kelly Tavalozzi',
      comment: "Lol, it’s a town paper first off, #2 it’s a Republican town run by republicans",
      comments: [
        {
          p: 'Kristen Shackett',
          comment: "Kelly what does politics have to do with the schools graduation",
          comments: [
            {
              p: 'Kelly Tavalozzi',
              comment: "Kristen  You’re not understanding. The paper is run by Republicans, the town is run by Republicans. It’s about the best of the best, and plainville is not. You happy now",
              comments: [
                {
                  p: 'Kristen Shackett',
                  comment: "Kelly 🤣 that’s hilarious",
                  comments: [
                    {
                      p: 'Kelly Tavalozzi',
                      comment: "Kristen  You wanted to know, that’s what it is. I agree with you. I was Born, raised and probably die here too, it’s just the way the town",
                      comments: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          p: 'Jamie McConnell',
          comment: "Kelly oh so they only pick kids of registered Republican parents to put in the paper? Your logic isn't logical.",
          comments: [
            {
              p: 'Kelly Tavalozzi',
              comment: "Jamie You’re Missing the point",
              comments: []
            }
          ]
        },
        {
          p: 'David Spencer',
          comment: "Kelly Yet again another Democrat can't quite think an issue through. The Citizen is published by the Record-Journal out of the very Democrat city of Meriden.",
          comments: [
            {
              p: 'Kelly Tavalozzi',
              comment: "David Ok, is this better. Plainville has no interesting news, I guess. Southington just out bets your sports on every level. Is that good for you.",
              comments: [
                {
                  p: 'David Spencer',
                  comment: "Kelly Not really. The Southington news is just so much more interesting than the Plainville news? Really? Sports is sports and win or lose it should get reported. The athletes of the week is a feature lifted from the Record-Journal and they are chosen from the towns in their subscription range.",
                  comments: []
                },
                {
                  p: 'Jamie McConnell',
                  comment: "Kelly a LL school should be able to beat small Class M schools. That is irrelevant to the topic regardless. I can assure you not the case in all sports either. Boys soccer for instance.",
                  comments: []
                }
              ]
            }
          ]
        },
        {
          p: 'David Spencer',
          comment: "This bias has been plain to see since the Plainville and Southington papers were combined. The Citizen is published by the Record-Journal out of Meriden. I don't think they even try to get people to subscribe to their paper in Plainville considering our other choices and distance from Meriden. I'm guessing they focus on Southington as it is in their territory, maybe with the hope of getting new subscribers.",
          comments: []
        },
      ]
    },
    {
      p: 'Jamie McConnell',
      comment: "So just some feedback... it's not the papers fault. It is the town of Plainville's fault. I have talked to multiple editors and if you submit paper worth news such as graduation they will make sure it goes in. I said before and I will say again, you need to be your kids biggest advocate cause at the end of the day nobody else will. The parents, coaches, faculty, town officials, etc are responsible for submitting write-ups/photos. The paper doesn't have journalist going to all these diff events.",
      comments: [
        {
          p: 'Abigail Nage',
          comment: "Jamie my kids names and pictures used to be in the paper all the time-never once did I have to submit a story. Where is the pride if the parent has to submit the story?",
          comments: [
            {
              p: 'Jamie McConnell',
              comment: `Abigail I agree with you 100%. The softball team and track teams should've been mentioned multiple times. You got All-State athletes not even being recognized. Back in the day coaches used to submit write-ups all the time. Every sport used to have a "season outlook" article before the season started as well. Those have also disappeared. The middle school doesn't even put the kids in the paper that receive honor roll.`,
              comments: []
            },
            {
              p: 'Robin Hawkins Mills',
              comment: `Abigail Nage..as one of the "back in the day coaches" (track and field), Nick from the Citizen would ALWAYS show up to practice and ask questions about the upcoming season. We would also be emailed with about 10 questions regarding the "season outlook". Never did we just write an article. Nick was also at meets taking pictures all.the.time. NEVER did I take a picture and submit it. This is such a shame. I feel for the athletes.`,
              comments: [
                {
                  p: 'Jamie McConnell',
                  comment: "Robin I get it but those days are over. We used to have the Herald show up to Norton Park and take photos and interviews when we played homerun derby with friends. It's all editors now. That's why you go on their website and they have a submit a write-up section. You submit to record journal/front porch. Not saying I think it is right but it is reality today. the season outlook section was in the Herald/Press I believe and it would be all the teams in the area. Maybe I'm wrong but I don't think that was the Citizen for that info. As far as athlete of the week (as mentioned) Plainville was non existent all year.",
                  comments: [
                    {
                      p: 'Matthew Waas',
                      comment: "Jamie They used to hand out at the park. About 20 years ago I had a 13 foot ball python at the park and the news people came walking up to us and put our snake in the newspaper because we was at Norton Park. It started a bunch of trouble with the zoo but they was always at the park for a story.",
                      comments: []
                    },
                  ]
                },
              ]
            }
          ]
        },
        {
          p: 'Eileen Castrogiovanni',
          comment: "Jamie Exactly.",
          comments: []
        }
      ],
    },
    {
      p: 'Theresa Royce',
      comment: "Used to be my favorite paper, read it faithfully every week. Now I hardly ever read it because there never seems be much about Plainville in it at all.",
      comments: [
        {
          p: 'Cindy Mills',
          comment: "Theresa my feelings exactly, its very disappointing.",
          comments: []
        }
      ]
    },
    {
      p: 'Judith Gemmell',
      comment: "Ive wondered about that too. Can we submit phitos or articles?",
      comments: []
    },
    {
      p: 'Judith Gemmell',
      comment: "Love to see a pictute of our Alfred, a 23 ft skeleton in cap and gown. Quite a fun sight for our class of 23 graduates.",
      comments: []
    },
    {
      p: 'Lisa Soucie',
      comment: "Wish it was only Plainville! Southington should have there own paper like Bristol press does.",
      comments: []
    },
    {
      p: 'Monika Kuczynko',
      comment: "The paper is mostly Southington. Nothing about Plainville. I don’t look at it anymore. Very disappointing.",
      comments: []
    },
    {
      p: 'Mark Lavore',
      comment: "THANK YOU!! THOUGHT THE PAPER WAS FOR BOTH TOWNS? The Players of the week during sports seasons is a great thing to for the players... how about the kids from Plainville IN OUR OWN TOWNS NEWSPAPERS? FIGURE THAT ONE OUT??",
      comments: [
        {
          p: 'Jamie McConnell',
          comment: "Mark Lavore the players are submitted by coaches, parents, and teammates. Nothing to do with the paper. I do agree 100% though as far as getting these kids some recognition.",
          comments: []
        }
      ]
    },
    {
      p: 'Diane Sperry',
      comment: "I don't really look at the Citizen as much, being that most of the news is about Southington, very little towards Plainville and I see your point. I noticed it right away",
      comments: []
    },
    {
      p: 'Carol Fabrizio Sullivan',
      comment: "True. Where do they get off joining OUR Citizen & putting their town first.",
      comments: []
    },
    {
      p: 'Jean Bergeron Goering',
      comment: "Good for Suduko and Gnazzo's flyer. The rest is used to stuff in outgoing packages. Very little of interest to read for Plainville residents. Plainville advertisers should put some pressure on for Plainville coverage, if they want their ads to be seen by local residents that are more likey to frequent their businesses.",
      comments: [
        {
          p: 'Renee LaBarge',
          comment: "Jean I barely look at it but this is what I use it for, as for Gnazzos flyer I grab the flyer for the next week when I’m shopping.",
          comments: []
        }
      ]
    },
    {
      p: 'Arlene Whipple',
      comment: "Used to like reading about things going on in Plainville. Now, not much left.",
      comments: []
    },
    {
      p: 'Michael Swirzewski',
      comment: `Plainville used to have its' own town "citizen" paper. I really enjoyed reading about happenings& events around town. Now we are just piggybacked onto southington's newspaper. So plainville is treated as a second-class town.`,
      comments: []
    },
    {
      p: 'Marie Roy',
      comment: "Who puts together the paper? Just curious.",
      comments: []
    },
    {
      p: 'Jay Friben',
      comment: "Maybe the town staff can do their job? Athletic director can submit on behalf of sports; superintendent on behalf of schools as a whole; and town manager. What a joke!",
      comments: []
    },
    {
      p: 'Caroline Doiron',
      comment: "It has so much advertisement I don't bother",
      comments: []
    },
    {
      p: 'Steve Sarlo',
      comment: "Probably not on the budget",
      comments: []
    }
  ]
}

let menuGrab = MenuData.menu;

// Create styles
const styles = StyleSheet.create({
  page1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: "Bookman",
    fontSize: '11px'
  },
  page2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: "Bookman",
    fontSize: '11px',
  },
  title: {
    width: '100%',
    height: '14px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '10px'

  },
  header: {
    width: '100%',
    height: '24px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    marginBottom: '4px'

  },
  left: {
    // marginTop: 15,
    // marginBottom: 15,
    // marginLeft: 8,
    // marginRight: 8,
    // padding: 10,
    // flexGrow: 1,
    width: '66%',
    height: 'calc(100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid black'
  },
  leftTop:{
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:'11px',
    borderBottom: '1px solid rgb(166,166,166)'

  },
  leftBottom: {
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  leftHalf: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '5px'
    // border: '1px solid red'
  },
  right: {
    // marginTop: 15,
    // marginBottom: 15,
    // marginLeft: 8,
    // marginRight: 8,
    // padding: 10,
    // flexGrow: 1,
    width: '34%',
    height: 'calc(100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '5px'
    // border: '1px solid black'
  },
  image: {
    width: '500px',
    height: '500px',
    marginTop: '40px'
  },
  bubble: {
    width: '95%',
    height: 'auto',
    borderRadius: '8px',
    backgroundColor: 'rgb(222,222,222)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '2px',
    paddingLeft: '4px',
    paddingRight: '4px',
    paddingTop: '3px',
    marginBottom: '4px',
    fontSize: '7.5px'
  },
  topBubble: {
    width: '100%',
    marginBottom: '2px',
    fontSize: '6px',
    fontFamily: 'Bookman Bold Italic'
  },
  bottomBubble: {
    width: '100%'
  },
  threadContainer: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: '2px'
    // border: '1px solid red'
  },
  threadTop: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid green'

  },
  threadBottom: {
    width: '97%',
    marginLeft: '3%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // border: '1px solid blue',
    borderLeft: '2px solid rgb(222,222,222)',

  },

});


function Thread ({p, comment, comments}) {
  return (
    <>
      {comments.length == 0 ? (
        <Bubble p={p} comment={comment}/>
      ) : (
        <>
        <View style={styles.threadContainer}>

          <View style={styles.threadTop}>
            <Bubble p={p} comment={comment}/>
          </View>
          <View style={styles.threadBottom}>
            {comments.map(comment => (
              <Thread p={comment.p} comment={comment.comment} comments={comment.comments} />
            ))}
          </View>
        </View>
        </>
      )}
    </>
    
  )
}


function Bubble ({p, comment}) {
  return (
    
    <View style={styles.bubble}>
      <View style={styles.topBubble}>
        <Text>{clipName(p)}</Text>
      </View>
      <View style={styles.bottomBubble}>
        <Text>{comment}</Text>
      </View>
    </View>
  )
}


// Create Document Component
const News = () => (
  <Document>
    <Page size={pageSize} style={styles.page1} orientation='portrait'>

      <View style={styles.left}>

        <View style={styles.leftTop}>
          <View style={styles.title}>
            <Text>PLAINVILLE TALKS</Text>
          </View>
          <View style={styles.header}>

            <Text>{clipName(post.op)}</Text>
            <Text style={{fontSize: '7px'}}>{post.date} : {post.time}</Text>
          </View>
          <Text>{post.content}</Text>

        </View>


        <View style={styles.leftBottom}>
          <View style={{...styles.leftHalf, ...{borderRight: '1px solid rgb(166,166,166)'}}}>
            {post.comments.slice(firstCut,secondCut).map(comment => (
              <Thread p={comment.p} comment={comment.comment} comments={comment.comments} />
            ))}
          </View>
          <View style={styles.leftHalf}>
            {post.comments.slice(secondCut,thirdCut).map(comment => (
              <Thread p={comment.p} comment={comment.comment} comments={comment.comments} />
            ))}
          </View>
        </View>
      </View>
      <View style={{...styles.right, ...{borderLeft: '1px solid rgb(166,166,166)'}}}>
        {post.comments.slice(thirdCut,fourthCut).map(comment => (
          <Thread p={comment.p} comment={comment.comment} comments={comment.comments} />
        ))}
      </View>

    </Page>
    <Page size={pageSize} style={styles.page1} orientation='portrait'>

      <View style={styles.left}>
        <View style={styles.leftBottom}>
          <View style={{...styles.leftHalf, ...{borderRight: '1px solid rgb(166,166,166)'}}}>
            {post.comments.slice(fourthCut,fifthCut).map(comment => (
              <Thread p={comment.p} comment={comment.comment} comments={comment.comments} />
            ))}
          </View>
          <View style={styles.leftHalf}>
            {post.comments.slice(fifthCut,sixthCut).map(comment => (
              <Thread p={comment.p} comment={comment.comment} comments={comment.comments} />
            ))}
          </View>
        </View>
      </View>
      <View style={{...styles.right, ...{borderLeft: '1px solid rgb(166,166,166)'}}}>
        {post.comments.slice(sixthCut,seventhCut).map(comment => (
          <Thread p={comment.p} comment={comment.comment} comments={comment.comments} />
        ))}
      </View>

    </Page>
  </Document>
);


export default News;
=== End of src/components/pdf/News.js ===

