/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import { Footer } from "../components/footer"
// import { GoArrowDown } from "react-icons/go"
import ScrollAnimation from 'react-animate-on-scroll'
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
      <div className="flexcheek " style={{padding:'0 2rem', maxHeight:'90vh',}}>


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



        


      <div className="flexcheek" style={{position:'relative', maxHeight:'70vh', overflow:'', marginBottom:'', borderRadius:'0 0 12px 12px'}}>
 
 


 <div style={{margin:'0 30px', zIndex:'', borderRadius:'12px', maxHeight:'70vh', overflow:'', position:'relative', display:'', justifyContent:'', alignItems:'', flexDirection:'column'}}>
   




           {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="post-card"
              style={{border:'0px solid red', width:'100%', height:'', maxHeight:'70vh',  borderRadius:'12px !important', position:'absolute', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0'}}
            />
          ) : (
            ""
          )}





<ScrollAnimation className="" animateIn="bounceInUp" delay={1550} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'', margin:'', padding:'',  width:'', zIndex:'', textAlign:'',}}>
<div style={{position:'relative', top:'', margin:'', padding:'10vh 0 0 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px',}}>
  {/* <Newsignup /> */}


  </div>
</ScrollAnimation>

</div>

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
       light="../assets/icon-512x512.png"
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

        light="../assets/icon-512x512.png"
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



<div className="post-card" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'12px', overflow:'hidden'}}>
    <a className="noexit" href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/icon-512x512.png" alt="Todd Lambert Night photos"  /></a>
   
    <p style={{padding:'1rem 2rem 0 2rem'}}>Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the night like you&apos;ve never seen it before.</p>
   <br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Twilightscapes.com</a></div>
    
    </div>



    <div className="post-card" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'12px', overflow:'hidden'}}>
    <a className="noexit" href="https://tron.allin60.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/icon-512x512.png" alt="TRON movie in only 60 seconds"  /></a>
    
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


 </div>{/* end scooch */}

      
      


<Footer />

    </Layout>
    </CustomBox>
  )
}

export default HomePage