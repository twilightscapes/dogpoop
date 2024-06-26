/** @jsx jsx */
import { useState, useRef,forwardRef } from "react";
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import Footer from "../components/footer"
// import ScrollAnimation from 'react-animate-on-scroll'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import useSiteMetadata from "../hooks/SiteMetadata"
import ReactPlayer from 'react-player/lazy'
import { ImPlay, MdVolumeUp  } from "react-icons/im"
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"
import { MdVolumeOff } from "react-icons/md"
import { FaRegPlusSquare } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import { AiOutlineAudioMuted } from 'react-icons/ai';
// import { MdVolumeDown } from "react-icons/md"
// import { RiArrowRightDownFill } from "react-icons/ri"
// import TwilightLogo from "../../static/assets/logo.svg"
// import Install from "../components/install-footer"
// import Faqs from "../components/equipment-list"
import SignUp from "../components/newssign"
// import SearchSlider from "../components/search1"
// import LHScores from "../../static/assets/logo.svg"

// import styled from "styled-components"
import Social from "../components/social"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import Layout from "../components/siteLayout"
import { AnchorLink } from "gatsby-plugin-anchor-links";


const HomePage = ({ data }) => {

  const { markdownRemark, posts } = data 
  const { frontmatter, html, excerpt } = markdownRemark
  const FrontImage = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    // const { postcount } = useSiteMetadata()
    // const Postcount = postcount


    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""

    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""


    const { companyname } = useSiteMetadata()
    const { siteUrl } = useSiteMetadata()
		

    const YouTubeStart = frontmatter.youtube.youtubestart
    const YouTubeEnd = frontmatter.youtube.youtubeend
    const YouTubeMute = frontmatter.youtube.youtubemute
    const YouTubeControls = frontmatter.youtube.youtubecontrols
    const YouTubeAutostart = frontmatter.youtube.youtubeautostart
    const SkillsText = frontmatter.skillsText
    const coverText = frontmatter.coverletter.coverText
    const { showNav } = useSiteMetadata()
    const { showInfo } = useSiteMetadata()
    const { showFeature } = useSiteMetadata()
    const { showPosts } = useSiteMetadata()
    const { showResume } = useSiteMetadata()
    const { showSocial } = useSiteMetadata()
    const { showSkills } = useSiteMetadata()
    const { showCover } = useSiteMetadata()
    const { showfooter } = useSiteMetadata()
    

const CustomControls = frontmatter.youtube.customcontrols
const Suggestion1 = frontmatter.youtube.youtubersuggestion1
// const Suggestion2 = frontmatter.youtubersuggestion2
// const Suggestion3 = frontmatter.youtubersuggestion3

const YoutubeLoop = frontmatter.youtube.youtubeloop

const ClickToPlay = frontmatter.youtube.clicktoplay




const seoProps = {
  title: frontmatter.title,
  description: frontmatter.description ? frontmatter.description : excerpt,
  image: frontmatter.featuredImage ? siteUrl + getSrc(frontmatter.featuredImage) : undefined,
};



const CommonElements = ({ title, tagline, description }) => (
  <div className=" mob print" style={{ position:'sticky', top:'0', fontSize: 'clamp(1rem, 1.5vw, 3.2rem)' }}>
    <h1 className="title1" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}>{title}</h1>
    <h2 className="tagline1" style={{ fontSize: 'clamp(1.2rem, 1.8vw, 3.2rem)' }}>
      {tagline}
    </h2>
    <div style={{ fontSize: 'clamp(1.2rem, 1.8vw, 3.2rem)' }} className="description" dangerouslySetInnerHTML={{ __html: description }} />
  </div>
);


// const iframeUrl = "https://www.youtube-nocookie.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=" + frontmatter.youtubeautostart + "&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=" + frontmatter.youtubeloop + "&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""


const ContentinVideo = frontmatter.contentinvideo
// const LiarLiar = frontmatter.liarliar

  /* eslint-disable-next-line no-unused-vars */
    const CtaLink = frontmatter.cta.ctaLink

    // const { iconimage } = useSiteMetadata()
    
    const ProfText = frontmatter.profText
 

  let iframeFiltered;
if (Suggestion1) {
  iframeFiltered = [
    frontmatter.youtube.youtuber,
    frontmatter.youtube.youtubersuggestion1,
    frontmatter.youtube.youtubersuggestion2,
    frontmatter.youtube.youtubersuggestion3,
  ];
} else {
  iframeFiltered = frontmatter.youtube.youtuber;
}


  const Svg = frontmatter.svgImage
  const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }



  
  function AddSvg(){
    const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
    return (
      <object title="Animation" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'', height:'auto',  }} alt="Animation" ></object>
    )
  }





const YouTube = frontmatter.youtube.youtuber

  if (!YouTube) {

  }
  else{
    
    <Iframer />
  }

function Iframer() {
  
    return (
      <div className="wrap-element effects" style={{aspectRatio:'16/9', minHeight:'300px', width:'100vw', maxHeight:'90vh', overFlow:'hidden'}}>


{YouTube ? (
  <div>


{/* PURPLE */}
            <ReactPlayer
              allow="web-share"
              ref={playerRef}
              style={{position:'asbolute', zIndex:''}}
              width="100%"
              height="100%"
                // url={[iframeUrl, Suggestion1, Suggestion2, Suggestion3]}
              url={iframeFiltered}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              muted={muted}
              playsinline
              config={{
                file: {
                  attributes: {
                    samesite: "none",
                    crossOrigin: "anonymous",
                  },
                },
                  youtube: {
                    playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute, loop:YoutubeLoop }
                  }
              }}
              playIcon={
                <div style={{position:'absolute',
                // backgroundColor:'var(--theme-ui-colors-bodyBg)',
                // backgroundColor:'rgba(0,0,0,0.6)',
                 width:'100vw', height:'100vh', minHeight:'40vh', maxHeight:'', zIndex:'0', top:'0', right:'0', textAlign:'center', display:'grid', placeContent:'center', justifyContent:'', 
                color:'#ddd',
                fontFamily:'Verdana, Sans-Serif, System' }}>



<button aria-label="Click To Play" name="Click to play" className="clickplays videohide" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', background:'transparent', color:'', fontSize:'18px', textAlign:'center', display:'', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center',}}>


                


<div style={{display:'grid', placeContent:'center', position:'relative', zindex:'1', fontWeight:'bold', padding:'1vh 0', fontSize:'clamp(.6rem, 1.4vw, 2rem)', width:'100%', maxWidth:'25vw', height:'', border:'0px solid', borderRadius:'12px', background:'linear-gradient(180deg, rgba(24, 23, 30, 0.2) 1%, rgba(0, 0, 0, .7) 99%)', margin:'0 auto 0 auto', opacity:'.99', textShadow:'2px 2px 2px black', color:'#fff' }}>
<ImPlay style={{margin:'0 auto', width:'50%', fontSize:'clamp(2rem, 4.4vw, 3rem)', filter:'drop-shadow(0px 0px 12px #fff',}} />
Click to play
</div>

<div style={{fontSize:'clamp(1rem, 2vw, 2.5rem)', margin:'5vh 0 0 0', padding:'0 10px', maxWidth:'1000px'}}>
{frontmatter.bumpertext ? (
<h3>{frontmatter.bumpertext}</h3>
) : (
<h3>{frontmatter.title}</h3>
)}
</div>
</button>

<button
className="videohide" 
aria-label="Click To Play" name="Click to play" 
style={{
color:'#ddd',
width:'100vw', 
height:'100vh',
display:'grid',
placeContent:'center',
position:'absolute',
top:'0',left:'0',right:'0',bottom:'0',
zindex:'1'
}}
></button>

            </div>
            }
            
            />
      {/* <div className="youtubeblockertop" style={{position:'absolute', display:'block', height:'58px', width:'100%', zIndex:'0', top:'0', right:'0', textAlign:'center', padding:'12px',
            background:'#000',
            animation:'fadeout 4s forwards', animationDelay:'6s', border:'0px solid yellow'
          }}>UrbanFetish.com</div> */}
  </div>
  ) : (
    ""
  
)}
  

  
  
  {UnderlayImage ? (
              <GatsbyImage
                image={UnderlayImage}
                alt={frontmatter.title + " - image"}
                className="mcboaty1"
                style={{height:'auto', width:'', maxHeight:'100vh', overflow:'hidden', position:'absolute', left:'0', right:'0', bottom:'0', top:'', zIndex:'0',
               objectFit:'cover', border:'1px solid red !important', background:'transparent',}}
              />
              
            ) : (
              ""
            )}
  

  
  {/*  SPECIAL CONTENT */}
  
  {ContentinVideo ? (
    <div id="contentvideo"
          className="blog-post-content effects" style={{ fontSize:'1.1rem', textAlign:'left', padding:'', margin:'0 auto', color:'inherit !important', border:'0px solid transparent', position:'absolute', bottom:'0', left:'0', top:'0', right:'0', zindex:'-1', maxHeight:'100vh', borderBottom:'0px solid', }}
          dangerouslySetInnerHTML={{ __html: html }}
        >
          
        </div>
   ) : (
    ""
  )}
  
  
          
  {Svg ? (
    <AddSvg />
       ) : (
         ""
         )}
          </div>
    )
  }

  


  const YouTube2 = frontmatter.youtube.youtuber2
  const AudioStart = frontmatter.audiostart
  const AudioEnd = frontmatter.audioend
  const AudioTitle = frontmatter.audiotitle

  function Iframer3() {
    const iframeUrl3 = "https://www.youtube.com/embed/" + frontmatter.youtube.youtuber2
    return (
      
<div style={{marginTop:'10px', position:'relative', zIndex:'1',
display:'flex', justifyContent:'center', maxHeight:'80px !important', height:'150px', border:'0px solid yellow', width:'100%'
}}>


<ReactPlayer
          allow="web-share"
          className='react-player67'
          url={iframeUrl3}
          width="250px"
          height="100%"
          style={{
            border:'0px solid red'
        }}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, start:AudioStart, end:AudioEnd, mute:0,  }
            },
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
          
        <div className="" style={{position:'', top:'', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'auto', marginBottom:''}}>
          
    

          <div className="popped" style={{display:'flex', width:'80%', minWidth:'300px', margin:'0 auto', fontWeight:'bold', padding:'.2rem .4rem', fontSize:'2rem', background:'rgba(0,0,0,0.30)', borderRadius:'12px', border:'1px solid #333', filter:'drop-shadow(2px 2px 2px #000)', textAlign:'center'}}>
            
            <div style={{fontSize:'.8rem', fontWeight:'', width:'100%', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)', textAlign:'center'}}>
            I just listened to:<br />



            <div style={{fontSize:'1rem', fontWeight:'bold', marginTop:'5px' }}>{ AudioTitle }</div>
      
            <div style={{display:'flex', justifyContent:'center', marginTop:'5px'}}>
            <div><AiOutlineAudioMuted style={{margin:'0 auto', fontSize:'20px', filter:'drop-shadow(2px 2px 2px #000),', color:'#06f21a'}} /></div> &nbsp; <div>Click to listen </div>
            
            </div>
            </div>

          </div>
         
          </div>
          </button>}
   
            light="/assets/transparent.png"
          />
     </div>

    )
  }

  // const Playing  = useState(true);

  const [state, setState] = useState({
    playing: YouTubeAutostart,
    controls: YouTubeControls,
    light: ClickToPlay,
    muted: YouTubeMute,
    loop: YoutubeLoop,
  });

  const playerRef = useRef(null);
  const controlsRef = useRef(null);

  const {
    playing,
    controls,
    light,
    muted,
    loop,
    played,
  } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const Controls = forwardRef(
    (
      {
        // onSeek,
        // onSeekMouseDown,
        // onSeekMouseUp,
        // onDuration,
        // onRewind,
        onPlayPause,
        // onFastForward,
        playing,
        // played,
        // elapsedTime,
        // totalDuration,
        onMute,
        muted,
        // onVolumeSeekDown,
        // onChangeDispayFormat,
        // playbackRate,
        // onPlaybackRateChange,
        // onToggleFullScreen,
        volume,
        // onVolumeChange,
        // onBookmark,
      },
      ref
    ) => {

  
      // const { iconimage } = useSiteMetadata()
  
  
      return (
  
  <div>
  
  
  
        {playing ? (
""
        ) : (

<div style={{position:'absolute', height:'100vh', width:'100vw', zIndex:'3', top:'0', right:'0', textAlign:'center', display:'grid', placeContent:'center', justifyContent:'center', color:'var(--theme-ui-colors-text)', fontFamily:'Verdana, Sans-Serif, System' }}>

<button aria-label="Click To Play" name="Click to play"  className="clickplays videohide" style={{position:'relative', zIndex:'', top:'70px', border:'0px  solid red', width:'100vw', height:'', backgroundColor:'var(--theme-ui-colors-bodyBg)', color:'', fontSize:'', textAlign:'center', display:'', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', padding:'2vh 0 0 0'}}>


          
         <div style={{display:'grid', placeContent:'center', position:'relative', zindex:'1', fontWeight:'bold', padding:'1vh 0', fontSize:'clamp(.6rem, 1.4vw, 2rem)', width:'100%', maxWidth:'25vw', height:'', border:'0px solid', borderRadius:'12px', background:'linear-gradient(180deg, rgba(24, 23, 30, 0.2) 1%, rgba(0, 0, 0, .7) 99%)', margin:'0 auto 0 auto', opacity:'.99', textShadow:'2px 2px 2px black', color:'#fff' }}>
<ImPlay style={{margin:'0 auto', width:'50%', fontSize:'clamp(2rem, 4.4vw, 3rem)', filter:'drop-shadow(0px 0px 12px #fff',}} />
Click to play
</div>

<div style={{fontSize:'clamp(1rem, 2vw, 2.5rem)', margin:'5vh 0 0 0', padding:'0 10px', maxWidth:'1000px'}}>
{frontmatter.bumpertext ? (
<h3>{frontmatter.bumpertext}</h3>
    ) : (
<h3>{frontmatter.title}</h3>
)}
</div>
      </button>

      <button
        onClick={onPlayPause}
        className="videohide" 
        aria-label="Click To Play" name="Click to play" 
        style={{
         color:'#ddd',
         width:'100vw', 
         height:'100vh',
         display:'grid',
         placeContent:'center',
         position:'absolute',
         top:'0',left:'0',right:'0',bottom:'0',
         zindex:'1'
        }}
      ></button>

      </div>

 )}
 {/* end playing check */}
  
 

  <div ref={ref} className="controlsbox" style={{width:'', height:'', border:'0px solid red', }}>
<button
        onClick={onPlayPause}
        className="videohide" 
        aria-label="Click To Play" name="Click to play" 
        style={{
         color:'#ddd',
         width:'100vw', 
         height:'85vh',
         display:'grid',
         placeContent:'center',
         position:'absolute',
         top:'0',left:'0',right:'0',bottom:'0',
         zindex:'1'
        }}
      ></button>

   <button
      onClick={onPlayPause}
      className="controls panel" 
       style={{
      backgroundColor:'rgba(0,0,0, 0.6)',
      color:'#999',
      borderRadius:'8px', overFlow:'hidden'
      }}>
                    {playing ? (
                      
                      <MdPause className="hudicon" style={{}} />
                      
                    ) : (
                
                <MdPlayArrow className="hudicon" style={{}}  />
                
                    )}
                  </button>
  
                  <button
                    // onClick={() => setState({ ...state, muted: !state.muted })}
                    onClick={onMute}
                    className="controls panel"
                    style={{
                      backgroundColor:'rgba(0,0,0, 0.6)',
                      color:'#999',
                      borderRadius:'8px', overFlow:'hidden'
                  }}
                  >
                    {muted ? (
                      <MdVolumeOff className="hudicon" fontSize="" style={{}}  />
                    ) : volume > 0.5 ? (
                      <MdVolumeUp className="hudicon" fontSize="" style={{}}  />
                    ) : (
                      <MdVolumeUp className="hudicon" fontSize="" style={{}}  />
                    )}
                  </button>
  
        </div>
        
        </div>
      );
    }
  );
  
  Controls.propTypes = {
    onSeek: PropTypes.func,
    onSeekMouseDown: PropTypes.func,
    onSeekMouseUp: PropTypes.func,
    onDuration: PropTypes.func,
    onRewind: PropTypes.func,
    onPlayPause: PropTypes.func,
    onFastForward: PropTypes.func,
    onVolumeSeekDown: PropTypes.func,
    onChangeDispayFormat: PropTypes.func,
    onPlaybackRateChange: PropTypes.func,
    onToggleFullScreen: PropTypes.func,
    onMute: PropTypes.func,
    playing: PropTypes.bool,
    light: PropTypes.bool,
    played: PropTypes.number,
    elapsedTime: PropTypes.string,
    totalDuration: PropTypes.string,
    muted: PropTypes.bool,
    playbackRate: PropTypes.number,
  };

  return (

    // TOP OF HOME

    <Layout>
{frontmatter.scrollable ? (
<Helmet>
  <body id="body" className="homepage scroll"  />
</Helmet>
) : (
<Helmet>
  <body id="body" className="homepage" />
</Helmet>
  )}



       
       <Seo {...seoProps} />


{showNav ? (
  <div className="spacer" style={{height:'', border:'0px solid yellow'}}></div>
      ) : (
        ""
      )}

{CustomControls ? (
    <Controls
    ref={controlsRef}
    onPlayPause={handlePlayPause}
    playing={playing}
    played={played}
    onMute={handleMute}
    muted={muted}
    style={{positon:'absolute', zIndex:'-1'}}
  />
  
     ) : (
""
     )}



<div className="scroll-container">



{/* show feature */}
{showFeature ? (   
<section id="feature" order="1" name="feature" className="print scroll-area" style={{ display:'', height:'100vh', maxHeight:'', margin:'0 auto 10vh auto', padding:'0 0 0 0', position:'relative',

 alignContent:'center', display:'flex', textAlign:'left', justifyContent:'start', verticalAlign:'center',
  color:'#fff',
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  // background:'rgba(0,0,0,0.50)',
  // backdropFilter:'blur(8px)',
  // borderRadius:'10px',
  textShadow:'0 2px 7px #000',
  // maxWidth:'95%',
  // border:'1px solid #333',
  background:'#000'

}}>
  <article>

  <div className="" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', color:'#999'}}  >
{FrontImage ? (

<GatsbyImage
image={FrontImage}
alt={frontmatter.title + " - Featured image"}
className="featuredimage"
placeholder="blurred"
loading="eager"
style={{height:'auto', width:'100vw', maxHeight:'', position:'relative', zIndex:'0', top:'0', left:'0', right:'0', border:'0px solid #888 !important', objectFit:'contain', margin:'2%'}}
/>




          ) : (

            <StaticImage src="../../static/assets/default-og-image.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain', margin:'0 auto'}} />
  
          )}

{YouTube ? (
            <div style={{position:'absolute', top:'0'}}><Iframer /></div>
       
          ) : (
            ""
          )}
          {/* <strong>Coming Soon</strong> */}
      </div>
      
  </article>
</section>
) : (
  ""
)}
{/* end show feature */}

{/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="99GULJ7R9T68W" />
  <table>
    <tr>
      <td>
        <input type="hidden" name="on0" value="Available Plans:"/>
        Available Plans:
      </td>
    </tr>
    <tr>
      <td>
        <select name="os0">
          <option value="Weekly Service">
            Weekly Service $29.99 USD
          </option>
          <option value="2X Weekly Service">
            2X Weekly Service $49.99 USD
          </option>
        </select>
      </td>
    </tr>
  </table>
  <input type="hidden" name="currency_code" value="USD" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
</form> */}

{/* <a href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-7YL811853N7360003MZNWQKA" target="_blank" className="print" style={{color:'', fontSize:'', margin:'5px auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>Order This</a> */}


{/* show Info */}
{showInfo ? (
<section className="scroll-area" id="info" order="2" name="info" style={{ display:'', height:'100%', minHeight:'', position:'relative', zIndex:'0', overflow:'visible', margin:'0 auto 0 auto', padding:'0 0 0 0', background:'var(--theme-ui-colors-background)', color:'var(--theme-ui-colors-text)', maxWidth:'95%', borderRadius:'8px', }}>
  <article style={{ margin:'0 0 0 0'}}>

  <div className="" style={{maxHeight:'100vh', width:'100vw', height:'', overflow:'visible',position:'absolute', top:'', zIndex:'-1',}}>
{UnderlayImage ? (
            <GatsbyImage
            image={UnderlayImage}
            alt={frontmatter.title + " - image"}
            className="mcboaty print"
            placeholder="blurred" loading="eager"
              style={{height:'auto', width:'100vw', maxHeight:'100vh',  objectFit:'cover', overflow:'visible', border:'0px solid red !important'}}
          />
          ) : (
            ""
          )}
</div>

<div id="profiletop" className="flexbutt" style={{display:'', gap:'10px', justifyContent:'center', alignItems:"center", margin:'0 0',
  padding:'0 2% 0 2%', position:'relative', color: ''}}>



{UnderlayImage ? (
  <div className="nameblock flexcheek" style={{position:'sticky', top:'0', marginTop: '', width:'100%', padding: '1rem 2rem 0 2rem', maxHeight: '', fontSize: 'clamp(1rem, 1.4vw, 3.2rem)', textShadow: '0 2px 3px #000', color: '', background: 'rgba(0,0,0,0.50)', backdropFilter: 'blur(12px)', borderRadius: '10px' }}>
    <CommonElements title={frontmatter.profTitle} tagline={frontmatter.tagline} description={ProfText} />
  </div>
) : (
  <div className="nameblock flexcheek" style={{position:'sticky', top:'0', marginTop: '', padding: '1rem 2rem 0 2rem', maxHeight: '', fontSize: 'clamp(1rem, 1.4vw, 3.2rem)',  borderRadius: '10px' }}>
  <CommonElements title={frontmatter.profTitle} tagline={frontmatter.tagline} description={ProfText} />
  </div>
)}



      <div className="flexcheek mob2 print" style={{position:'sticky', top:'0', minWidth:'500px', overflow:'', marginBottom:'', paddingTop:'2vh', borderRadius:'0 0 10px 10px',
      }}>
{SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="avatar-frame"
              style={{ maxWidth:'300px', margin:'0 auto', height:'', maxHeight:'300px', position:'relative', top:'', objectFit:'contain', backgroundSize:'contain', marginBottom:'0', border:'0'}}
            />
          ) : (
            ""
          )}
<div className="nameblock" style={{margin:'0 auto 0 auto', padding:'0 0 0 0',alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center',
  color:'#fff',
  border:'0px solid red', 
  paddingTop:'', 
  fontSize:'clamp(1rem, 1.4vw, 3.2rem)',
  background:'rgba(0,0,0,0.50)',
  backdropFilter:'blur(8px)',
  borderRadius:'10px',
  border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'12px',
  textShadow:'0 2px 0px #000',
  maxWidth:'70%'
}}>
  {/* <span style={{margin:'10px auto', fontSize:'160%'}}>{companyname}</span> */}
    <span style={{margin:'10px auto', fontSize:'160%'}}>Become a PIRATE!</span>
  
  {frontmatter.addressText ? (
    frontmatter.addressText
  ) : (
    ""
  )}
  <br />
  {frontmatter.addressText2 ? (
    frontmatter.addressText2
  ) : (
    ""
  )}
  <br />
  {/* <Link to={frontmatter.cta.ctaLink} className="button print" style={{ display: 'flex', justifyContent: 'center', padding:'1vh .5vw', maxWidth:'250px', }}>{frontmatter.cta.ctaText}</Link> */}
Early Alpha (testing only)
    {/* <AnchorLink to='/install' className="button actionJackson print" style={{ display: 'flex', justifyContent: 'center', padding:'1vh .5vw', maxWidth:'250px', color:'#fff' }}>Install Now</AnchorLink> */}
  <br />
  <SignUp />

  <br />
  {showCover ? (
    <Link to={frontmatter.coverletter.coverLink} className="print" style={{color:'', fontSize:'', margin:'5px auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>{coverText}</Link>
  ) : (
    ""
  )}

  {showSocial ? (
    <Social />
  ) : (
    ""
  )}

  { !YouTube2 ? (
    ""
  ) : (
    <Iframer3 />
  )}
</div>


</div>
</div> 
</article>
</section>
) : (
  ""
)}
{/* end show Info */}




{/* show posts */}
{showPosts ? (
  <section id="showPosts" order="3" className="scroll-area" style={{display:'block', height:'',  minHeight:'', position:'relative', zIndex:'0', overflow:'visible', margin:'0 auto', padding:'0 0 0 0', border:'0px solid blue'}}>
<div className="contentpanel grid-container">

<div className="sliderSpacer" style={{height:'', paddingTop:'', display:''}}></div>
<BlogListHome data={posts} />
      {/* <div style={{textAlign:'center', display:'grid', placeContent:'center', padding:'20% 0 0 0'}}><Link className="button " to="/archive/" style={{textDecoration:'none', color:'inherit', textAlign:'center'}}>View More </Link>
      </div> */}
</div>


</section>
      ) : (
        ""
      )}
{/* end show posts */}




{/*  show Resume */}
{showResume ? (
  // <ScrollAnimation className="animate" animateIn="bounceInUp" animateOut="" initiallyVisible={false} animateOnce={false} animatePreScroll={true} >
<section className="scroll-area" id="resume" order="4" style={{ display:'', minHeight:'100vh', overflow:'', margin:'0 0 0 0', position:'relative', border:'0px solid blue',}}>


<article className="hasapp"  style={{ display:'', height:'', overflow:'', margin:'0', position:'relative', fontSize:'clamp(1rem, 1.4vw, 3.2rem)',  background:'rgba(24, 29, 31, 0.7)',  backdropFilter:'blur(12px)', padding:'4%', borderRadius:'12px', color:''}}>

<div id="resumename" style={{display:'none', position:'relative', top:'', fontSize:'160%', padding:'0 0 0 0', textAlign:'left', width:'100%',}}>{companyname}<br />
{frontmatter.addressText}
<br />
{frontmatter.addressText2}
</div>


<div id="" className="">

<span
          style={{  columnCount:'',
            columnGap:'',
            columnWidth:''}}
            className="doscol"
            dangerouslySetInnerHTML={{ __html: html }}
          />
  
</div>

<br />
<div className="toolbar noapp print" style={{display:'flex', flexDirection:'', gap:'', width:'', borderTop:'1px solid #777', borderBottom:'1px solid #777', justifyContent:'start', background:'rgba(24, 29, 31, 0.2)', borderRadius:'12px', padding:'5px 0 5px 0', }}>
<div className="keyboard" order="" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto', padding:'4px 0 0 0', lineHeight:'calc(2em + .4vw)'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Print:</span> &nbsp;<kbd>⌘</kbd> + <kbd>p</kbd> &nbsp;OR&nbsp; <kbd>Ctrl</kbd> + <kbd>p</kbd></div>
  <div className="keyboard" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'auto !important', margin:'0 auto', lineHeight:'calc(2em + .4vw)',}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Install:</span> &nbsp;<IoShareOutline style={{fontSize:'38px',}} />&nbsp;+&nbsp; 'Add to Home Screen'</div>
  </div>


</article>
</section>
// </ScrollAnimation>
) : (
  ""
)}
{/* end show Resume */}



{/*  show Skills */}
{showSkills ? (
<section className="print scroll-area" id="skills" order="5" style={{ width:'100%', overflow:'hidden', position:'relative',  justifyContent:'center', alignContent:'center', margin:'0 auto', textAlign:'center', borderRadius:'8px', minHeight:'', maxWidth:'', padding:'1rem', display:'', placeContent:'',  }}>
<div className="flexbutt" style={{display:'flex', justifyContent:'center', width:'', columnGap:'50px', border:'0px solid blue',  background:'rgba(24, 29, 31, 0.7)',  backdropFilter:'blur(12px)', padding:'4%', borderRadius:'12px', color:'' }} dangerouslySetInnerHTML={{ __html: SkillsText }}>
</div>
  </section>
          ) : (
            ""
          )}
{/* end show Skills */}




{/* <section id="SecondaryInfo2" order="7" className="nameblock" style={{margin:'0 auto 10vh auto', padding:'2% 4%',alignContent:'center', display:'grid', textAlign:'left', justifyContent:'center', verticalAlign:'center',
  color:'var(--theme-ui-colors-text)',
  border:'0px solid red', 
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  background:'var(--theme-ui-colors-cardBg)',
  backdropFilter:'blur(8px)',
  // border:'1px solid #333',
  borderRadius:'10px',
  // textShadow:'0 2px 0px #000',
  maxWidth:'95%' ,
  // border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'12px'
  }}>



  <div className="nameblock flexcheek" style={{position:'sticky', top:'0', marginTop: '', width:'100%', padding: '0 2rem 0 2rem', margin:'2vh 0', maxHeight: '', fontSize: 'clamp(1rem, 3.5vw, 3.2rem)', textAlign:'center', textShadow: '0 2px 3px #000', color: '#fff', background: 'rgba(0,0,0,0.50)', backdropFilter: 'blur(12px)', borderRadius: '10px' }}>
    <h2>How It Works</h2>
  </div>




<div className="flexbutt" style={{gap:'10vw'}}>
<div className="flexcheek" style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Set Sail:</h2> <p>At PIRATE, your personal website is your Galleon in the digital sea. Your Galleon does double duty working as both your homepage, resume, and blog, as well as acting as your Helm to another world of Social Media. You're no landlubber, you're a Captain, steering your own course through the Social Media Seas.</p>

<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Chart Your Course:</h2> <p>Your homepage, profile and timeline become your Captain's Log and your personal flag, flying high above the digital waves. Your posts are more than mere messages in a bottle, they're personal tales of your adventures in the vast sea of the internet.</p>

<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Spyglass View:</h2> <p>Every ship you spot and "Plunder" enhances your view of the digital horizon. Your custom timeline transforms your voyage into a grand exploration of the treasures you've chosen to seek out.</p>

<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>High Seas Freedom:</h2> <p>PIRATE is a haven from the corporate armada, from central rule, and from censorship. Every word you scribe and every tale you tell is unequivocally yours. It's about sailing under your own flag, following your own chart, and staking your claim in the digital world.</p>
<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Shipmates Unite:</h2> <p>This platform is about building your crew on your terms. Your content is free from the manipulations of corporate quartermasters, allowing you to forge alliances based on authenticity and shared quests.</p>
</div>

<div className="flexcheek" style={{display:'flex', gap:'2vw', flexDirection:'column', justifyContent:'space-between', fontSize: 'clamp(1rem, 1vw, 2.2rem)', textAlign:'center', padding:'1rem 0'}}> 

<StaticImage src="../../static/assets/action3.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
Control your website and social media together in one app - easily installs onto your device so you have it with you at all times, even if you're offline.
<StaticImage src="../../static/assets/action6.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
Scan your timelines faster and the way you want. Featuring a unique swipe OR scroll interface, your choice.
<StaticImage src="../../static/assets/action5.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
Customize all aspects of your website in the app. Just love purple? Great, you can always be you!
<StaticImage src="../../static/assets/action2.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
You control your timeline (and everything else), not some billionaire appeasing stockholders or their bottomline. 
</div>
</div>


</section> */}












<section className="" id="" style={{ display:'', height:'', overflow:'', paddingTop:''}}>



{/* <div id="" className="" style={{width:'75vw', margin:'0 auto 2vh auto', top:'', order:''}} >
 
 <div className="" style={{ background: '', padding:'2rem ',
          backdropFilter: 'blur(4px)', border:'0px solid #000', borderRadius:'12px', textAlign:'', alignSelf:'', }}>

<div style={{display: '', flexDirection:'', justifyContent:'', padding:'0 0 0 0', fontSize:'.8rem', textAlign:'center'}}>


  <h2 id="captain" style={{fontSize:'clamp(3rem, 4.5vw, 1.5rem)'}}>Become a PIRATE!</h2>
  <span style={{fontSize:'clamp(1.5rem, 2.5vw, 1.5rem)'}}>Choose Your Galleon:</span>

          
</div>
 
</div>
 

 </div> */}

 


{/* INSTALL SECTION */}

<div id="" className="flexbutt" style={{display:'none', gap:'10px', justifyContent:'space-around', alignItems:'center', justifyContent:'center', color:'', padding:'0 1%'}}>


        

<div id="" className="flexcheek" style={{display:'flex', flexDirection:'column', gap:'', justifyContent:'start', alignItems:'', width:'80vw'}}>
 


<StaticImage src="../../static/assets/galleon-pirate.webp" alt="Default Image" style={{height:'auto', maxWidth:'400px', position:'relative', zIndex:'0', top:'', borderRadius:'8px', objectFit:'contain', margin:'0 auto 0 auto'}} />


 <div className="" style={{ background: 'rgba(0,0,0,0.30)', padding:'1rem 2rem ',
     backdropFilter: 'blur(4px)', border:'10px double #fff', borderRadius:'12px', textAlign:'', alignSelf:'', width:'100%', }}>

<h2
className="title1"
style={{
position: 'relative',
textAlign: 'center', 
float: 'none',
margin:'0 0 0 0',
padding:'0',

}}
>

<span  className="free" style={{fontSize:'1.7rem', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'relative', width:'100%', color:'#fff', display:'flex', justifyContent:'center', textShadow:'0px 2px 0px #222', filter:'drop-shadow(0px 0px 10px var(--theme-ui-colors-siteColor))', border:'1px solid var(--theme-ui-colors-siteColor)' }}>Get PIRATE</span>

<br />
PIRATE Social Platform<br />
<span style={{fontSize:'130%'}}>+</span>
<br />
Your own custom homepage<br />
Custom Resume and Skills section<br />
{/* Ready To Use = Easy to Learn<br /> */}
{/* Serverless = NO WordPress<br /> */}
Cloud Hosted = Free Forever<br />

{/* Web Apps = NO Apple or Google */}
<br />



Join the Social Revolution<br />
Own Your Own Content!
<br /><br />
{/* <span style={{color:'', fontSize:'90%'}}>Fast | Flexible | Secure | Features</span> */}

INSTALL NOW!

</h2>

{/* <Install /> */}


<div className="installwindow" style={{fontSize:'90%',  display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'90%', margin:'0 auto', padding:' .5rem', border:'0px solid #333', borderRadius:'12px', maxWidth:'600px', textAlign:'center' }}>
  
  One-Click Install - NO APP STORE NEEDED
<div style={{fontSize:'90%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'90%', margin:'0 auto', padding:' .5rem 1rem', border:'1px solid #333', borderRadius:'12px', backdropFilter:'blur(14px)', background:'rgba(0,0,0,0.60)', position:'relative', color:'#fff'}}>
      
{/* <button aria-label="Close this popup" onClick={this.handleHide} style={{position:'absolute', right:'-5px', top:'-5px', fontSize:'24px'}}><AiOutlineCloseCircle /></button> */}

<p style={{maxWidth:'', textAlign:'center'}}>Simply click the "install" icon in your browser address bar
</p>

{/* <div style={{border:'0px solid red', display:'block', width:'100px', height:'100px', position:'absolute', bottom:'0', right:'0', zIndex:'-1', overflow:'hidden', }}><StaticImage src="../../static/assets/installed-bg.png" alt=""  />
</div> */}
  <span style={{fontSize:'100%'}}>OR</span>
  <div style={{fontSize:'90%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'90%', margin:'0 auto', padding:' .5rem 1rem', border:'0px solid #333', borderRadius:'12px', }}>
    
    <div style={{textAlign:'center', display:'flex', alignContent:'center', marginBottom:'1rem',}}>
   <IoShareOutline style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} />
    - &nbsp; Press the 'Share' button 
  </div>
  
   <div style={{textAlign:'center', display:'flex', alignContent:'center',}}>
   <FaRegPlusSquare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} /> 
   
  - &nbsp; Press 'Add to Home Screen'
   </div>
   
   </div>



</div>
</div>


     {/* <SignUp /> */}


     







</div>
 







 </div> 






{/* <div id="" className="flexcheek" style={{display:'flex', flexDirection:'column', gap:'30px', justifyContent:'center', alignItems:'',}}>
 
      <StaticImage src="../../static/assets/galleon-pro.webp" alt="Default Image" style={{height:'auto', maxWidth:'', position:'relative', zIndex:'0', top:'20px', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

      <div className="" style={{ background: 'rgba(0,0,0,0.30)', padding:'1rem 2rem ',
     backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-siteColor)', borderRadius:'12px', textAlign:'', alignSelf:'', width:'100%' }}>

  <h2
  className="title1 txtshadow-header"
  style={{
   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 0 0',
    padding:'0',
  }}
>

<span  className="fire" style={{fontSize:'1.7rem', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'relative', width:'100%', color:'#fff', display:'flex', justifyContent:'center', textShadow:'0px 2px 0px #222', filter:'drop-shadow(0px 0px 10px var(--theme-ui-colors-siteColor))', border:'1px solid var(--theme-ui-colors-siteColor)' }}>Get PIRATE&nbsp;<span className="neonText" style={{color:'#a6fcff'}}> Pro</span></span>

<br />

PIRATE Social Platform<br />+<br />

Complete website/app platform<br />
Customize all pages and build a unique multimedia blog/portfolio.<br />
<br />
Built for artists, photographers, musicians, clubs & restaurants and other small businesses.
<br /><br />
<span  className="neonText">BECOME A CAPTAIN!</span>
</h2>

          <SignUp />
          
</div>
      







      </div>  */}
</div>

</section>














 {/* <GoogleMap /> */}
{/* <div id="bottom" className="usability scroll-area" style={{position:'relative', zIndex:'', bottom:'0', display:'flex', placeSelf:'center', placeContent:'center', width:'100%', margin:'2vh auto', alignContent:'center', alignItems:'center', justifyContent:'center', border:'1px solid blue', textAlign:'center'}}>
<div id="branding" style={{position:'relative', left:'0', bottom:'5px', fontSize:'90%'}}><a href="https://urbanfetish.com">UrbanFetish.com</a></div>
</div> */}


{/* show footer */}
{showfooter ? (
<div className="scroll-area" style={{scrollSnapAlign:'end', position:'sticky', bottom:'0'}}>
<Footer />
</div>
) : (
  ""
)}
{/* end show footer */}
</div>
    </Layout>

  )
}

export default HomePage



export const pageQuery = graphql`
query HomeQuery($id: String!) {
  site {
    siteMetadata {
      title
      titleDefault
      siteUrl
      description
      image
      twitterUsername
      companyname
      postcount
      showfooter
      showInfo
      showCover
      showFeature
      showPosts
      showSocial
      showSkills
      showNav
      showPopup
      showDates
      showResume
      showSkills
    }
  }
  markdownRemark(id: {eq: $id}) {
    id
    html
    excerpt(pruneLength: 148)
    frontmatter {
      date(formatString: "YYYY-MM-DD-HH-MM-SS")
      slug
      title
      description
      audiostart
      audiotitle
      audioend
      youtube {
        youtuber
        youtuber2
        youtubestart
        youtubeend
        youtubeshoworiginal
        youtubersuggestion1
        youtubersuggestion2
        youtubersuggestion3
        clicktoplay
        youtubemute
        youtubecontrols
        customcontrols
        youtubeautostart
      }
      contentinvideo
      bumpertext
      viewerwarning
      marate
      marating1
      marating2
      marating3
      marating4
      maratingtx1
      maratingtx2
      maratingtx3
      maratingtx4
      profTitle
      profText
      addressText
      addressText2
      skillsTitle
      skillsText
      svgzindex
      scrollable
      tagline
      featuredImage {
        publicURL
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      secondaryImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      underlayImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      cta {
        ctaText
        ctaLink
      }
      coverletter {
        coverText
        coverLink
      }
      portfolio {
        openText
        closeText
      }
      svgImage {
        relativePath
      }
    }
  }
  posts: allMarkdownRemark(
    sort: [{frontmatter: {spotlight: ASC}}, {frontmatter: {date: DESC}}]
    filter: {frontmatter: {template: {eq: "blog-post"}}}
    limit: 6
  ) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "YYYY-MM-DD-HH-MM-SS")
          slug
          title
          tags
          category
          youtube {
            youtubemute
            youtubeloop
            youtubecontrols
            customcontrols
            youtuber
          }
          spotlight
          featuredImage {
            relativePath
            publicURL
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
}
`;
