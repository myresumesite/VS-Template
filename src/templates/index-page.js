/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import { Footer } from "../components/footer"
// import { GoArrowDown } from "react-icons/go"
// import ScrollAnimation from 'react-animate-on-scroll'
import NFTDetails from "../components/nft-details"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
import { ImPlay } from "react-icons/im"
import styled from "styled-components"
import Newsignup from "../components/newssign"
import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
const CustomBox = styled.div`

`



export const pageQuery = graphql`
  query HomeQuery($id: String! ) {
    
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        showfooter
      }

    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        showFeature
        showPosts
        showInfo
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
        svgzindex
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        svgImage{
          relativePath
        }
      }
    }


 
    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 9
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            nftdrop
            nftdrop
  
            
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`




const HomePage = ({ data }) => {
  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""

    // const { iconimage } = useSiteMetadata()


    const { siteUrl } = useSiteMetadata()

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart

    const ShowFeature = frontmatter.showFeature
    const ShowInfo = frontmatter.showInfo
    const ShowPosts = frontmatter.showPosts


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
    <object title="VidSocks Rock" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto',  }} alt="VidSocks Rock" ></object>
  )
}



const YouTube = frontmatter.youtuber

  if (!YouTube) {

  }
  else{
    
    <Iframer />
  }

  function Iframer() {
    

    const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
    return (
      <ReactPlayer
      className='react-player66'
      url={Url}
      width="100%"
      height="100%"
 
      config={{
        youtube: {
          playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
        },
      }}
      loop
      playing
      playsinline
      />
    )
  }

  


  
  return (
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage vidsock" />
</Helmet>
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
   image={ siteUrl + getSrc(frontmatter.featuredImage) }
      />
      
      


      

        <div name="container21" className="container21" style={{height:'',}}>


{/* show feature */}
        {ShowFeature ? (
            
       
          


        
<section style={{ display:'',}}>
  <article>

  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>




{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'absolute', top:'', zIndex:'0', objectFit:'contain', overflow:'', border:'0px solid red !important'}}
            />
            
          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}






{/* if(navigator.standalone) {
    "Thanks for using our PWA!"
} else {
    "Please consider downloading our PWA."
} */}





 

  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}





{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', bottom:'0', zIndex:'1',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}


  
{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}




      </div>
  </article>
</section>

) : (
  ""
)}
{/* end show feature */}




<br />

{/* show Info */}
{ShowInfo ? (
            
       


<section style={{ display:'', height:'', overflow:''}}>
  <article>
<div className="flexbutt" style={{display:'flex', gap:'30px'}}>

<div className="flexcheek mob2" style={{position:'relative', overflow:'', marginBottom:'', borderRadius:'0 0 12px 12px'}}>
 
 


 <div className="" style={{margin:'0', zIndex:'', maxHeight:'10vh', overflow:'', position:'relative', display:'', justifyContent:'', alignItems:'', flexDirection:''}}>
   




           {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="drop-shadow"
              style={{border:'0px solid red', width:'70%', height:'', maxHeight:'', maxWidth:'',  borderRadius:'12px !important', position:'relative', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0', margin:'0 auto'}}
            />
          ) : (
            ""
          )}





{/* <ScrollAnimation className="" animateIn="bounceInUp" delay={1550} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'', margin:'', padding:'',  width:'', zIndex:'', textAlign:'',}}> */}
<div style={{position:'relative', top:'', margin:'', padding:'10vh 0 0 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px',}}>
  {/* <Newsignup /> */}




  </div>
{/* </ScrollAnimation> */}

</div>

<div className="post-card" style={{margin:'300px auto 0 auto', alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center', maxWidth:'80%', paddingTop:'1rem', border:'1px solid #111'}} >

{/* <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 0 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>
<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000' }}>Launch Your Web App</span></h2> */}





{/* Ready To Go = Be Up In Minutes<br />
Serverless Cloud Based = FREE<br />
Web Apps = NO Apple or Google
<br />
<span  className="neonText2">User Install Apps = NO Fees<br />
</span> */}
<span style={{color:'', fontSize:'140%'}}>Let's Get Started</span>

Only $99 single pay (NO Recurring Fees)<br />You own it forever - it runs for free, forever
<br /><br />
<button className="neonText" style={{color:'#fff', fontSize:'160%', border:'1px solid', margin:'0 auto', borderRadius:'8px', maxWidth:'300px', padding:'0 2rem'}}>Order Now</button>
<br /><br />
<span style={{color:'', fontSize:'90%'}}>Fast | Flexible | Secure | Featured</span>
<br />

</div>

      </div> 


      <div className="flexcheek mob" style={{padding:'8vh 2rem 0 2rem', maxHeight:'90vh',}}>


          <h1 className="title1">{frontmatter.title}</h1>
          <h2
            className="tagline1"
            sx={{
              color: "",
            }}
          >
            {frontmatter.tagline}
          </h2>

          <div
          style={{}}
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
  
  {/* <br />
          <Link
            to={frontmatter.cta.ctaLink}
            className="button fire actionJackson"
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'600px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center',
              color:'#ccc'
            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>

            
          </Link> */}

<br />
<br />

      </div>



        


      

      
</div>


</article>
</section>







) : (
  ""
)}
{/* end show Info */}


{/* end show Posts */}
{ShowPosts ? (

<div id="posts" name="posts">
        <BlogListHome data={posts} />

        <section style={{height:'auto'}}>
  <Link to="/posts/" style={{display:'block', width:'100%'}}><article className="post-card" style={{height:'50%', display:'flex', flexDirection:'row', justifyContent:'center', border:'1px solid', padding:'2rem', fontSize:'200%', textAlign:'center' }}>
    View More <RiArrowRightSLine style={{fontSize:'50px'}} />
    </article></Link>
    </section>
   </div>

  

   ) : (
    ""
  )}
{/* end show Posts */}




<section id="posts1" name="posts" style={{margin:'4vh 0 0 0'}}>



<div style={{padding:'0 0 0 0',
position:'relative', height:'', width:'100%', overflow:'', margin:'0 auto',
//  outline:'18px dashed rgba(121, 115, 115, 0.3)', 
 borderRadius:'', 
 border:'0px solid rgba(121, 115, 115, 0.3)', 
//  background:'rgba(0, 0, 0, 0.3)',
//  background:'rgba(121, 115, 115, 0.2)',
//  background: 'rgba(196, 189, 179, .9)',
//  background:'rgba(121, 115, 115, 0.5)',
zIndex:'0'
//  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)',
 }}>


 {/* <h3 className="logotype" style={{textAlign:'center', margin:'0 0 0 0', fontSize:'5vw', clear:'right', paddingTop:'0',}}>Examples</h3>
<br /> */}


{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Portfolio />
</ScrollAnimation> */}


<p style={{fontSize:'150%', textAlign:'center', margin:'2rem 0 0 0'}}>See it in action:</p>

<div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'500px', overflow:'hidden', position:'relative',}}>

<div className="RArrow"><span></span></div>

{/* <SimpleReactLightbox>
<SRLWrapper options={options}> */}

<div className="horizontal-scroll-wrapper squares" style={{margin:'0 auto 0 auto', width:'calc(60vw + 1px)', transform: 'rotate(-90deg) translateY(-60vw)', padding:'30px'}}>


{/* <div style={{width:'1000px', height:'1000px'}}></div> */}
<div className="introspacer" style={{}}></div>








<div className="post-card" style={{height:'', padding:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
<ReactPlayer
      className='react-player666'
      url="https://youtu.be/2_Noj7lS-tM"
      width="100%"
      height="350px"
      config={{
        youtube: {
          playerVars: { showinfo:'0', autoplay:true, controls:'0', start:YouTubeStart, end:YouTubeEnd, mute:true, loop:true  }
        },
      }}
      loop
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
      
    <div className="" style={{position:'absolute', bottom:'-50px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'', width:'auto', marginBottom:''}}>
      
    <div className="popped1" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.5rem', fontSize:'2rem',}}><div style={{fontSize:'24px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}><ImPlay style={{margin:'0 auto', width:'', fontSize:'40px'}} />CLICK TO PLAY</div></div>

      </div>
      </button>}
       light="../assets/MyResumeLogo.webp"
      />
            <br />
            <div className="post-card1 button1 logocopy " style={{textAlign:'center', padding:'0 0 .5rem 0', margin:'0'}}>
      {/* <a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}> */}
      Flexible design that adapts to the device
      {/* </a> */}
      </div>
</div> 







<div className="post-card" style={{height:'', padding:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
<ReactPlayer
      className='react-player666'
      url="https://youtu.be/-mYw48uq010"
      width="100%"
      height="350px"
      config={{
        youtube: {
          playerVars: { showinfo:'0', autoplay:true, controls:'0', start:YouTubeStart, end:YouTubeEnd, mute:true  }
        },
      }}
      loop
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
      
    <div className="" style={{position:'absolute', bottom:'-50px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'', width:'auto', marginBottom:''}}>
      
    <div className="popped1" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.5rem', fontSize:'2rem',}}><div style={{fontSize:'24px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}><ImPlay style={{margin:'0 auto', width:'', fontSize:'40px'}} />CLICK TO PLAY</div></div>

      </div>
      </button>}

        light="../assets/MyResumeLogo.webp"
      />
      <br />
            <div className="post-card1 button1 logocopy " style={{textAlign:'center', padding:'0 0 .5rem 0', margin:'0'}}>
      {/* <a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}> */}
      Make changes wherever you want.
      {/* </a> */}
      </div>


</div> 








<div style={{ fontWeight:'bold', marginLeft:'5rem', padding:'0 0 0 30%', fontSize:'2rem', borderLeft:'3px dotted #666', display:'flex', flexDirection:'column', justifyContent: 'center', height:'55vh'}}>
  <div style={{}}>LIVE EXAMPLES:</div>
</div>



<div className="post-card1" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'12px', overflow:'hidden'}}>
    <a className="noexit" href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/MyResumeLogo.webp" alt="Todd Lambert Night photos"  /></a>
   
    <p style={{padding:'1rem 2rem 0 2rem'}}>Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the night like you&apos;ve never seen it before.</p>
   <br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Twilightscapes.com</a></div>
    
    </div>



    <div className="post-card1" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'12px', overflow:'hidden'}}>
    <a className="noexit" href="https://tron.allin60.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/MyResumeLogo.webp" alt="TRON movie in only 60 seconds"  /></a>
    
    <p style={{padding:'1rem 2rem 0 2rem'}}>
    TRON, recreated in a dynamic multimedia format and it's all in 60 seconds. Rediscover your favorite movie in just 60 seconds. Enter the Grid - now.
</p>
   <br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://tron.allin60.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Tron.Allin60.com</a></div>
    
    </div>






    



    <div className="post-card1" style={{height:'50vh', minWidth:'300px', margin:'', display:'flex', flexDirection:'column', justifyContent:'center',}}>
  <Newsignup />
  </div>



{/* {data.allFile.edges.map(edge => {
      return <GatsbyImage
      image={edge.node.childImageSharp.gatsbyImageData}
      srl_gallery_image="true"
      alt={edge.node.name}
      key={edge.node.id}
    />
    })} */}


    </div>
    {/* </SRLWrapper>
    </SimpleReactLightbox> */}

    {/* <Link className="post-card11" state={{modal: true}} to="/legacy/" title="View Todd's Legacy Work" style={{position:'absolute', left:'0', top:'', zIndex:'1', width:'50px', background:'rgba(0, 0, 0, .9)', height:'95%', display:'flex', flexDirection:'column', justifyContent:'center', borderRadius:'0 12px 12px 0', border:'1px solid #999 !important', borderLeft:'none !important', margin:'8px 0'}}>
  <div style={{position:'', left:'', top:'', transform: 'rotate(90deg)', width:'100%', height:'', border:'0px solid red', color:'#fff',  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold', margin:'-120px auto 0 auto'}}>View Legacy Work Here</div>
</Link> */}


</div>
{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Photos />
</ScrollAnimation> */}

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Animation />
</ScrollAnimation> */}
  </div>


</section>



<section className="outer section section--gradient fluff" style={{padding:'0 8%'}} >
      <div className="container" style={{padding: '0 0%'}}>

{/* <h2>Start with the best built website and then make sure it's as fast as can be. Then make some of the most innovative features that nobody else has. Finally, make sure it's virtually hack-proof, easy to use and ready to go!</h2>

<br />
<p>VidSocks use the industry best cloud-based tools for things like user commenting, analytics, and e-commerce.</p> */}









<div id="costs" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'0 0 2rem 0', width:'100%', }}>
              
              

              <p style={{fontSize:'180%', textAlign:'center', margin:'2rem 0 0 0'}}><u>NO</u> Hidden Costs</p>
              
  

              <p style={{fontSize:'180%', textAlign:'center', margin:'0 0 0 0'}}>uses FREE Cloud Based Services</p>

              </div>


{/* <h2 id="costs" className="letter" style={{fontSize:'240%', textAlign:'center'}}>VidSocks Run Free Of Cost</h2>
<p style={{fontSize:'150%', textAlign:'center'}}>VidSocks users have <u>NO</u> monthly costs.

</p>  */}



<div className="flexbutt hover" style={{display:'flex', padding:'0', gap:'20px', color:'#fff'}}>


<div className="flexcheek post-card" style={{width:'33%', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'1px solid #111', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Cloud Hosting</h3>

<div style={{}}>Our sites designed to operate month-to-month for <strong className="highlight">FREE</strong>. 
  <br />
Pay only if your site uses more than 1000gb of data or 100 form submissions a month.<br /> 
 
 <div style={{textDecoration:'underline', textAlign:'center'}}><a href="https://www.netlify.com/pricing/" target="_blank" rel="noreferrer" >View  <strong className="highlight"></strong> Hosting Plan</a></div>
 </div>

</div>

<div className="flexcheek post-card" style={{width:'33%', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'1px solid #111', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Analytics</h3>
<p>Complete integration with Google Analytics. Simply paste your account tracking code into the CMS settings. 
  <br />
  <br />Track your website performance for <strong className="highlight">FREE</strong>!</p>
</div>

<div className="flexcheek post-card" style={{width:'33%', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'1px solid #111', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Document Backup</h3>
<p>All website and files are stored and backed up in txt and multimedia formats with instant rollback. 
<br />
   <br />All document controll using Github for <strong className="highlight">FREE</strong>.</p>
</div>
</div>











<div className="flexbutt hover" style={{display:'flex', marginTop:'20px', padding:'', gap:'20px', color:'#fff'}}>


<div className="flexcheek post-card" style={{width:'33%', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'1px solid #111', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Social Sharing</h3>
<p>Why pay for plugins just to allow for your users to share your content? Social sharing is built-in, along with other great features. <br /><br />All INCLUDED for <strong className="highlight">FREE</strong>.</p>
</div>

<div className="flexcheek post-card" style={{width:'33%', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'1px solid #111', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>AdFree YouTube</h3>
<p>We use AdFree YouTube to remove ads. This means you have complete control of your videos without any ads.
  
  <br /><br />AdFree YouTube <strong className="highlight">FREE!</strong></p>
</div>

{/* <div className="flexcheek" style={{width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.30)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">NFT Features</h3>
<p>Setup countdown timers for your own NFT Drops!  <br /> Embed your Foundation or OpenSea into your posts. Just copy and paste the share code.</p>
</div> */}
<div className="flexcheek post-card" style={{width:'33%', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'1px solid #111', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Fast &amp; Secure</h3>
<p>Designed to run on the global cloud, without a web server so there is NOTHING to attack or affect performance.
  
  <br /><br />100% Uptime for <strong className="highlight" style={{color:''}}>FREE</strong> </p>
</div>


</div>



      </div>
</section>




{/* <StaticImage src="../../static/assets/biloxibay.jpg" alt="Todd Lambert Night photos" style={{height:'auto', width:'100vw', maxHeight:'100%', position:'', left:'0', top:'', zIndex:'', margin:'2vh 0', objectFit:'contain', overflow:'hidden', border:'0px solid red !important'}}  /> */}






<section id="features" className="" style={{padding:'8% 2%'}}>
<div className="flexbutt featurelisting" style={{display:'flex', padding:'2rem', alignItems:'baseline', gap:'30px', color:'#fff'}}>



  <div className="flexcheek" >
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px', textAlign:'left'}}>
        
      {/* <h2
  className="title1 txtshadow-header"
  style={{
   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #0064bb)', border:'1px solid #000', }}>Coast Web includes:</span></h2> */}
          
        <ul className="featurelist" style={{listStyleType:'none'}}>
        <li>User-installable PWA (Progressive Web Apps) which means your resume site can be installed on any device without the need for expensive and complex App Stores.</li>
        <li>Hosted on Global Edge Network (the cloud). Designed to use free tier services, without limiting performance or results.</li>
        <li>Automated backups with intant rollbacks to any version. Uses Github for document tracking and backup.</li>
        <li>FREE - 100GB/Mo Bandwidth</li>
<li>FREE - Up to 100 Form responses a month sent direct to your email.</li>
<li>FREE Secured Socket Layer (SSL) Cert (https://)</li>
<li>Customizable with your own domain name for as 9.99 a year.</li>




</ul>
      </div>
    </div>
  </div>





  <div className="flexcheek hover">
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px'}}>
        {/* <h2 className="vartext txtshadow">VidSocks Features:</h2> */}
        {/* <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', background:'rgba(0,0,0,0.30)', filter:'drop-shadow(0px 0px 10px #0064bb)', border:'1px solid #000', }}>Coast Web sites:</span></h2> */}

        <ul className="featurelist" style={{listStyleType:'none'}}>




        <li>Responsive Design, built with React and Gatsby JS. Serverless Modern and Fastest around.</li>

<li>Customize all content of your resume and/or portfolio. Add / Modify / Delete blog/portfolio posts.</li>

<li>Edit website settings, Add Google Analytics change colors, settings, logos, etc all from within the CMS.</li>


{/* <li>Hide/Show Comments, Social Sharing, or User-interactivity (youtube video changer) on a post-by-post basis</li> */}

<li>Control YouTube videos with starting/stopping times, loop, mute, etc.. and NO ads!</li>

<li>PWA Offline Content (Never be caught without your resume again!). Your resume on all your devices, at all times even without internet.</li>

{/* <li>Drop Timers - Easily create your own Drops. Make posts appear when your NFT drops. Just add the drop date and time</li> */}

<li>Your stuff is SAFE - All stored in native image formats and text files that are downloadable at any time</li>

{/* <li>Auction Timers - Make posts disappear when your auction expires</li> */}

<li>Dark / Light Mode (full support for all web accessibility guidelines)</li>

</ul>
      </div>
    </div>
  </div>

  



  <div className="flexcheek">
    <div className="frontcontent content-lr">
    
      <div className="content-inside" style={{padding:'8px'}}>
        

        {/* <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 10px #222', background:'rgba(0,0,0,0.30)', filter:'drop-shadow(0px 0px 10px #0064bb)', border:'1px solid #000', }}>More Features:</span></h2> */}


        <ul className="featurelist" style={{listStyleType:'none'}}>
        

<li>100% SEO Optimized - Google LOVES My-Resume sites. </li>

<li>Full Privacy Compliance Support (GDPR and CCPA). </li>

<li>Contact Form - integrated contact forms on all pages of the your site, that sends everything right to your email inbox.</li>

{/* <li>E-Newsletter Form - Build your email newsletter by allowing peole to easily sign up</li> */}

<li>Social Media Icons - link to all your sites and allow users to easily share your content</li>

<li>OpenGraph structured data - entire site is structured to be shared with high quality image links on social sites</li>

<li>Twitter Cards meta - Your pages will look great when shared on Twitter</li>

<li>XML Sitemaps - Your entire site is automatically indexed and links provided to search engines.</li>






</ul>
      </div>
    </div>
  </div>
  
</div>
</section>









<div className="container txtshadow " style={{ maxWidth:'1024px', textAlign:'', alignSelf:'', color:'#fff', padding:'0 4%', margin:'0 auto', }}>

<NFTDetails />
</div>


 </div>{/* end scooch */}

      
      


<Footer />

    </Layout>
    </CustomBox>
  )
}

export default HomePage