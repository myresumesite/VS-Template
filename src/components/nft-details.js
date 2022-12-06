
import * as React from "react"
import styled from "styled-components"
// import { Link } from 'gatsby'
import { CgInfo, CgRatio  } from "react-icons/cg"
// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'

import { RiSecurePaymentLine } from "react-icons/ri"
import { HiOutlineScale } from "react-icons/hi"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
const CustomBox = styled.div`

// .infomenu11{

//    border-radius:12px;
//    filter: drop-shadow(0px 0px 10px rgba(155,155,155,.5)); 
//    background:rgba(0,0,0,0.08) !important;
// }

`

const NFTDetails = () => (

<CustomBox style={{color:'#fff'}}>



<Tabs className="infomenu" style={{minHeight:'20vh', width:'100%', maxWidth:'', overflow:'hidden', marginTop:'0',}}>

<h2 className="logotype" style={{fontSize:'170%', textAlign:'center', margin:'0', textTransform:'none',  background: 'rgba(0,0,0,0.75)', padding:'.5rem', borderRadius:'12px 12px 0 0'}}>MyResume Website Applications </h2>

    <TabList style={{width:'100%', background: 'rgba(0,0,0,0.55)', padding:'10px 0 0 0', borderRadius:'0 0 12px 12px', display:'flex', justifyContent:'space-around', textShadow:'2px 2px 10px #222', background:'rgba(0,0,0,0.30)', background: 'linear-gradient(180deg, rgb(27, 45, 50) 10%, rgb(81, 119, 138) 80%)', border:'1px solid #111',}}>

    <Tab><div className="iconmenu"><RiSecurePaymentLine/><span>Features</span></div></Tab>
    <Tab><div className="iconmenu"><CgRatio /><span>FAQ</span></div></Tab>
    
    <Tab><div className="iconmenu"><HiOutlineScale/><span>Standards</span></div></Tab>
      {/* <Tab><div className="iconmenu"><FiCamera /><span>Tech</span></div></Tab> */}
      <Tab><div className="iconmenu"><CgInfo /><span>Free Services</span></div></Tab>
      
    </TabList>
 

  <br />



    <TabPanel style={{width:'100%', background: 'rgba(0,0,0,0.25)', padding:'0', borderRadius:'12px'}}>
    <section id="features" className="" style={{padding:'0', margin:'0',}}>
<div className="flexbutt featurelisting" style={{display:'flex', padding:'2rem', alignItems:'baseline', gap:'10px', color:'#fff'}}>



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

    </TabPanel>

    <TabPanel style={{width:'100%', background: 'rgba(0,0,0,0.75)', padding:'2rem', borderRadius:'12px'}}>
            <strong style={{fontSize:'1.5rem'}}>FAQ</strong><br /><br />

            <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>So, what do I get?</p>
            <p style={{}}>Upon completion of your purchase, you will receive access to your new website. It will be hosted with Netlify.com and thus will have an address like mynewsite.netlify.app <br />You can point any domain names if you wish or purchase a new one to assign it.</p>

            {/* <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>What CAN I do with these websites?</p>
            <p style={{}}>Almost anything that you want. Use it for your main website to show off your art or your business, you name it! You can also use it only for the blog features by assigning it to a sub domain like blog.existingwebsite.com</p> */}

            <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>What CAN’T I do with these websites?</p>
            <p style={{}}>Basically, don’t be a Dick or a Karen.
            <br />
            Oh, and don't use it for things like hate speech or starting a terrorist group. Things like that. You can read more about the terms of use on our hosting partners website Netlify.com/terms
            </p>

            <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>Do I get the website right away?</p>
            <p style={{}}>Yes, upon completion of transaction and once your account has been created you will receive an email with the details of logging into your new website.</p>

            <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>What if I lose the email, or I forget my details?</p>
            <p style={{}}>Once your account is setup with Netlify, your account information no longer passes through us. You can retrieve any of your account details by contacting Netlify.com</p>

            

            <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>Do I own this website and site copyright or can I claim it as mine?</p>
            <p style={{}}>Yes, you own all of the content that you display on your website and you own the accounts used for the site if there are any (for instance: Netlify account or Google Analytics account )
            <br /><br />
             The intellectual rights and copyrights associated with the website coding and platform itself, are NOT transferred in any way and will remain the sole property of MyResume.</p>

            

            

            {/* <p style={{fontWeight:'bold'}}></p>
            <p style={{}}></p> */}




    </TabPanel>


    <TabPanel style={{width:'100%', background: 'rgba(0,0,0,0.75)', padding:'2rem', borderRadius:'12px'}}>
    <strong style={{fontSize:'1.5rem'}}>Built Right In All The Right Spots</strong><br /><br />

{/* 
    <strong style={{fontSize:'1.3rem'}}>The MyResume Platform was built for the specific needs of photographers and other creative artists because it was built by one.</strong> */}
<ol style={{margin:'1rem 3rem'}}>
<li style={{}}>A complete CMS including video blog with unlimited posts, and customizable resume integrated contact forms.</li>
<br />
<li style={{}}>Built right in the right places. The site is built from the ground up to utelize modern technologies and yet do so in the correct way and one that Google likes. </li>
<br />
<li style={{}}>Top Scores out of the box - Accessibility, SEO, Best Practices, oh.. and its a full-blown Web App too!</li>
<br />
<li style={{}}>Automated backups with intant rollbacks to any version. Site is automatically load-balanced and served from a Global Edge Network so your site is lightning fast no matter where your visitors come from.</li>

<br />
{/* <li style={{}}>Need more? The MyResume Platform also has complete E-Commerce integration with Shopify. Not only will you be able to sell your products right from your blog pages, but we utelize Shopify's Developer API which means it only costs $9 a month to run a full featured store. This saves you almost $20 off their normal base $28 monthly fee.</li> */}

<li style={{}}>Seo? Social? It's in the bag. Our entire content management system(CMS) is designed to make producing top-notch SEO-minded content that ranks incredibly well in Google page rankings. Also, every page and every post has custom graphics for default social image previews and custom page titles and descriptions on social media sites. Our sites kick butt. Don't believe us? Check out how we do with <a href="https://pagespeed.google.com" target="_blank" rel="noreferrer" nofollow>Google Page Speed</a>.</li> 
</ol>



<blockquote className="frontquote" style={{width:'70%', margin:'2rem auto'}}>
<p>Beyond just the best industry-leading performance and visibility, each MyResume Platform has tons of great built-in features such as image zooming, tab panels, custom color options for both light and dark themes. The sites are also user installable PWA (Progressive Web Apps) which means your site can be installed on any device without any need for expensive and complex App Stores.  </p>

<div style={{textAlign:'right', marginRight:'20%', marginTop:'20px'}}> – 
</div></blockquote>


            <p style={{textAlign:'center', fontSize:'130%', margin:'2rem 0',}}>
              {/* <Link to="/legal/" style={{color:'inherit'}}>View License Agreement</Link> */}
            
   
           <br />

            </p>



           
    </TabPanel>




    {/* <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
          <strong>Technology</strong><br /><br />
          <p>
          Twilightscapes were shot using: <br /><br />
          Canon 5D series<br /><br />
          Sony A7S series<br /><br />
          Sony A7R series <br /><br />
          </p>
    </TabPanel> */}


<TabPanel style={{width:'100%', background: 'rgba(0,0,0,0.35)', padding:'2rem', borderRadius:'12px'}}>
           {/* <strong style={{fontSize:'1.5rem'}}>MyResume use metered web services wherever possible</strong><br /><br />
           <p>
           MyResume are built using distributed web services and use these metered services for delivery<br /> <br />
           Because metered use of a small portion of a specific transaction is very small, they incure very little or no costs in actual usage.<br /> <br />
           Of course, if your site becomes very active or gets swamped with traffic, the metered costs will kick in and you will be charged according to the providers use accounting.<br /> <br />

           MyResume takes advantage of free-tier user packages available from a variety of providers and you will need to open/have your own accounts here: 
           <br /><br />
           <span style={{fontSize:'1.4rem'}}>
            - <a target="_blank" rel="noreferrer" style={{textDecoration:'underline'}} href="https://netlify.com/">Netlify.com</a> for web hosting <br />(we set this up for you and transfer ownership to you)<br />
            - <a target="_blank" rel="noreferrer" style={{textDecoration:'underline'}} href="https://google.com/">Google.com</a> for Analytics <br />(Only needed if you want to use Google Analytics)
</span>
           </p> */}

<section className="outer section section--gradient fluff" style={{padding:'0'}} >
      <div className="container" style={{padding: '0 2%'}}>

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
           
    </TabPanel>



   

  </Tabs>


</CustomBox>
  
)

export default NFTDetails