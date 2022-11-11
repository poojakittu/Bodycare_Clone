import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "../AllStyles/Caraousel.module.css"

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        autoplay:true,
        autoplaySpeed:2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        
          
            <Slider className={styles.firsttop} {...settings}>

              

                <div style={{display:"flex"}} className={styles.first}>
                    <div  className={styles.firstinner}>
                        

                        <h1 style={{fontWeight:"bolder"}} >The subscription management platform that enabled Slidebean to slide into 30+ countries.</h1>
                        <p style={{color:"rgb(68, 62, 62)"}} >Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
                        
                        
                        <div style={{display:"flex"}}>
                        <Link to= {"/GetADemo"}>
                            <button style={{backgroundColor:"#5400af",padding:"15px",width:"170px",color:"white",fontWeight:"bolder",border:"none",borderRadius:"25px"}} >Get a Demo →</button>
                            </Link>
                            <Link to= {"/Register"}>
                            <button style={{backgroundColor:"white",padding:"15px",width:"170px",fontWeight:"bold",marginLeft:"30px",border:"0.5px solid black",borderRadius:"25px"}}>Sign up for Free →</button>
                       </Link>
                        </div>

                    </div>

                    <div className={styles.secondinner}>
                       <img src="https://webstatic.chargebee.com/assets/web/529/images/home/coc/customers/rahul-gandhi.webp" alt="" />
                        <h3 style={{ transform: "rotate(28deg)"}}>Rahul Gandhi,</h3>
                        <p style={{ transform: "rotate(28deg)"}}>CEO-Make Space</p>
                    </div>
                </div>





                <div style={{display:"flex"}} className={styles.first}>
                    <div  className={styles.firstinner}>
                        

                        <h1 style={{fontWeight:"bolder"}} >The revenue engine that powered MakeSpace to launch a B2B model overnight.</h1>
                        <p style={{color:"rgb(68, 62, 62)"}} >Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
                        
                        
                        <div style={{display:"flex"}}>
                        <Link to= {"/GetADemo"}>
                            <button style={{backgroundColor:"#5400af",padding:"15px",width:"170px",color:"white",fontWeight:"bolder",border:"none",borderRadius:"25px"}} >Get a Demo →</button>
                           </Link>
                           <Link to= {"/Register"}>
                            <button style={{backgroundColor:"white",padding:"15px",width:"170px",fontWeight:"bold",marginLeft:"30px",border:"0.5px solid black",borderRadius:"25px"}}>Sign up for Free →</button>
                            </Link>
                        </div>

                    </div>

                    <div className={styles.secondinner}>
                       <img src="https://webstatic.chargebee.com/assets/web/529/images/home/coc/customers/jose-bolanos.webp" alt="" />
                        <h3 style={{ transform: "rotate(28deg)"}}>Joes Bolenose</h3>
                        <p style={{ transform: "rotate(28deg)"}}> CTO-Slide Bean</p>
                    </div>
                </div>





                <div style={{display:"flex"}} className={styles.first}>
                    <div  className={styles.firstinner}>
                        

                        <h1 style={{fontWeight:"bolder"}} >The billing platform that gives Superfoods the freedom to test, iterate, and roll-back.</h1>
                        <p style={{color:"rgb(68, 62, 62)"}} >Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
                        
                        
                        <div style={{display:"flex"}}>
                        <Link to= {"/GetADemo"}>
                            <button style={{backgroundColor:"#5400af",padding:"15px",width:"170px",color:"white",fontWeight:"bolder",border:"none",borderRadius:"25px"}} >Get a Demo →</button>
                            </Link>
                            <Link to= {"/Register"}>
                            <button style={{backgroundColor:"white",padding:"15px",width:"170px",fontWeight:"bold",marginLeft:"30px",border:"0.5px solid black",borderRadius:"25px"}}>Sign up for Free →</button>
                            </Link>
                        </div>

                    </div>

                    <div className={styles.secondinner}>
                       <img src="https://webstatic.chargebee.com/assets/web/529/images/home/coc/customers/paul-kapsner.webp" alt="" />
                        <h3 style={{ transform: "rotate(28deg)"}} >Paul Capsner,</h3>
                        <p style={{ transform: "rotate(28deg)"}}>DFO-Superfoods</p>
                    </div>
                </div>





                <div style={{display:"flex"}} className={styles.first}>
                    <div  className={styles.firstinner}>
                        

                        <h1 style={{fontWeight:"bolder"}} >The revenue toolkit that allowed Yousign to enter a new market that now drives 15% MRR.</h1>
                        <p style={{color:"rgb(68, 62, 62)"}} >Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
                        
                        
                        <div style={{display:"flex"}}>
                        <Link to= {"/GetADemo"}>
                            <button style={{backgroundColor:"#5400af",padding:"15px",width:"170px",color:"white",fontWeight:"bolder",border:"none",borderRadius:"25px"}} >Get a Demo →</button>
                           </Link>
                           <Link to= {"/Register"}>
                            <button style={{backgroundColor:"white",padding:"15px",width:"170px",fontWeight:"bold",marginLeft:"30px",border:"0.5px solid black",borderRadius:"25px"}}>Sign up for Free →</button>
                       </Link>
                        </div>

                    </div>

                    <div className={styles.secondinner}>
                       <img src="https://webstatic.chargebee.com/assets/web/529/images/home/coc/customers/antoine-louiset.webp" alt="" />
                        <h3 style={{ transform: "rotate(28deg)"}}>Antonie Louiset,</h3>
                        <p style={{ transform: "rotate(28deg)"}}>CTO-Yousign</p>
                    </div>
                </div>





                <div style={{display:"flex"}} className={styles.first}>
                    <div  className={styles.firstinner}>
                        

                        <h1 style={{fontWeight:"bolder"}} >The infrastructure that allows Rise Vision to ask "What Does This Make Possible?"</h1>
                        <p style={{color:"rgb(68, 62, 62)"}} >Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
                        
                        
                        <div style={{display:"flex"}}>
                            <Link to= {"/GetADemo"}>
                            <button style={{backgroundColor:"#5400af",padding:"15px",width:"170px",color:"white",fontWeight:"bolder",border:"none",borderRadius:"25px"}} >Get a Demo →</button>
                            </Link>
                            <Link to= {"/Register"}>
                            <button style={{backgroundColor:"white",padding:"15px",width:"170px",fontWeight:"bold",marginLeft:"30px",border:"0.5px solid black",borderRadius:"25px"}}>Sign up for Free →</button>
                            </Link>
                        </div>

                    </div>

                    <div className={styles.secondinner}>
                       <img src="https://webstatic.chargebee.com/assets/web/529/images/home/coc/customers/debbie-barrafato.webp" alt="" />
                        <h3 style={{ transform: "rotate(28deg)"}}>Debbie Barrafato,</h3>
                        <p style={{ transform: "rotate(28deg)"}}>CFO - Rise Vision</p>
                    </div>
                </div>


               


            </Slider>
       
    );
}