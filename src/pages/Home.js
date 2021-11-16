import React from "react";
import Particles from "react-tsparticles";
import {  Link } from "react-router-dom";

import Slider from "./slider";

import headerLogo from "../img/header-brand-logo.png";
import sec1Bg from "../img/bg3.png";
import chart from "../img/Chart.png";
import binance from "../img/binance-log.png";
import greenUp from "../img/green-arrow-up.png";
import sec3Bg from "../img/bg2.png";
import sec4Bg from "../img/bg1.png";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import icon5 from "../img/icon5.png";
import icon6 from "../img/icon6.png";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import sec7Img1 from "../img/Your Photo Here.png";
import sec7Img2 from "../img/unsplash_Zyx1bK9mqmA.png";

import logo from "../img/footer-brand-logo.png";
import send from "../img/send.png";
import basket from "../img/basket.png";
import twitter from "../img/twitter.png";
import insta from "../img/insta.png";
import youtube from "../img/youtube.png";

import down from "../img/arrow-down.png";
import up from "../img/up.png";
import menuIcon from "../img/menu.png";
import newImg from "../img/new-img.jpeg";
import newImg1 from "../img/new-img1.jpeg";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: false,
      subMenu1: false,
      subMenu2: false,
      subMenu3: false,
      community: false,
      developers: false,
      individuals: false,
    };
    this.menu = this.menu.bind(this);
    this.subMenu1 = this.subMenu1.bind(this);
    this.subMenu2 = this.subMenu2.bind(this);
    this.subMenu3 = this.subMenu3.bind(this);
    this.community = this.community.bind(this);
    this.developers = this.developers.bind(this);
    this.individuals = this.individuals.bind(this);
  }

  menu() {
    this.setState({ menu: !this.state.menu });
    console.log("menu-cliccked");
  }

  subMenu1() {
    this.setState({ subMenu1: !this.state.subMenu1 });
  }

  subMenu2() {
    this.setState({ subMenu2: !this.state.subMenu2 });
  }

  subMenu3() {
    this.setState({ subMenu3: !this.state.subMenu3 });
  }

  community() {
    this.setState({ community: !this.state.community });
    this.setState({ developers: false });
    this.setState({ individuals: false });
  }

  developers() {
    this.setState({ developers: !this.state.developers });
    this.setState({ community: false });
    this.setState({ individuals: false });
  }

  individuals() {
    this.setState({ individuals: !this.state.individuals });
    this.setState({ developers: false });
    this.setState({ community: false });
  }

  render() {
    const particlesInit = (main) => {
      console.log(main);
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };

    const images = [
      {
        img: card1,
        goo: "https://vangoldfinance.medium.com/titans-ventures-is-excited-to-host-the-next-ama-with-vangold-finance-b48c8828c119",
      },
      {
        img: card2,
        goo: "https://vangoldfinance.medium.com/vangold-v2-official-airdrop-live-aec9f33f914d",
      },
      {
        img: card3,
        goo: "https://vangoldfinance.medium.com/dva-will-host-ama-vangold-in-room-d-va-community-26-september-2pm-utc-50-for-top-10-314783716e1a",
      },
    ];

    return (
      <>
        <div className="home">
          <div className="header">
            <div className="container">
              <Link to="/" className="l-div">
                <img alt="asdfd" src={headerLogo} />
                <span>Vangold</span>
              </Link>

              <div className="r-div">
                <Link className="a1" to="/about">
                  About
                </Link>
                <div className="link-wrap">
                  <span onClick={this.community} className="a1">
                    Community
                  </span>
                  {this.state.community ? (
                    <div className="link-menu">
                      <a href="https://t.me/vangoldtoken1">Telegram</a>
                      <a href="https://twitter.com/vangoldfinance">Twitter</a>
                      <a href="https://www.reddit.com/user/vangoldtoken">
                        Reddit
                      </a>
                      <a href="https://discord.gg/s3vVfBEFrc">Discord</a>
                      <a href="https://www.youtube.com/channel/UCpRE6nyI3DVxIYz6uDBJwkw">
                        Youtube
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="link-wrap doc-menu">
                  <span onClick={this.developers} className="a1">
                    Documentation
                  </span>

                  {this.state.developers ? (
                    <div className="link-menu doc-menu">
                      <a href="https://drive.google.com/file/d/1RnIm59CoclsjOOtYGOBii8aZ_2TL3w_x/view?usp=drivesdk">
                        Whitepaper
                      </a>
                      <Link to="/roadmap">Roadmap</Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="link-wrap">
                  <span onClick={this.individuals} className="a1">
                    Markets
                  </span>
                  {this.state.individuals ? (
                    <div className="link-menu markets">
                      <a
                        href="https://vangoldswap.finance/"
                        className="stake-p"
                      >
                        Stake & Farm
                      </a>
                      <a href="https://pancakeswap.finance/swap?outputCurrency=0x487ecd4cFa635D1a9409E86Cd22d33d5abEb7b44">
                        Buy VGD
                      </a>
                      {/* <Link to="/terms">Terms</Link>
                      <Link to="/cookie-policy">Cookie Policy</Link>
                      <Link to="/landing-page">Landing Page</Link>
                      <Link to="/privacy-policy">Privacy Policy</Link> */}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <a className="a1" href="Mailto:vangoldtoken@vangold.finance">
                  Contact
                </a>
                <a href="https://t.me/vangoldtoken1" className="join-btn">
                  Join the Network
                </a>
              </div>
            </div>
          </div>

          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#0d47a1",
                },
              },
              fpsLimit: 60,
              interactivity: {
                modes: {
                  bubble: {
                    distance: 4000,
                    duration: 1.2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 2000,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 1.4,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 1800,
                  },
                  value: 50,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 8,
                },
              },
              detectRetina: true,
            }}
          />

          <div className="main-content">
            <div className="container">
              <div className="sec1">
                <div className="l-sec">
                  <h2>Making Payment Easier for Everyone</h2>
                  <p>
                    Vangold is a blockchain-platform solution for freelancers
                    and creators worldwide, decentralizing payments and making
                    them easier and better through smart contracts.
                  </p>
                  <a className="join-btn" href="https://t.me/vangoldtoken1">
                    Join the Network
                  </a>
                </div>
                <div className="r-sec">
                  <img alt="asdfd" src={sec1Bg} />
                </div>
              </div>

              <div className="sec2">
                <div className="contain1">
                  <div className="top-div">
                    <div className="left-box">
                      <div className="up-d">
                        <div className="brand-wrap">
                          <figure>
                            <img alt="asdfd" src={newImg1} />
                          </figure>
                          <span>Vangold</span>
                        </div>
                        <img alt="asdfd" src={chart} />
                      </div>
                      <div className="down-d">
                        <span className="span1">$0.001402</span>
                        <div className="text-wrap">
                          <img alt="asdfd" src={greenUp} />
                          <span>3.87%</span>
                        </div>
                      </div>
                    </div>
                    <div className="right-box">
                      <div className="up-d">
                        <div className="brand-wrap">
                          <figure>
                            <img alt="asdfd" src={newImg} />
                          </figure>
                          <span>Vangoldswap</span>
                        </div>
                        <img alt="asdfd" src={chart} />
                      </div>
                      <div className="down-d">
                        <span className="span1">$0.001402</span>
                        <div className="text-wrap">
                          <img alt="asdfd" src={greenUp} />
                          <span>3.87%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-div">
                    <h2>Trusted by our beloved partners</h2>
                    <div className="lower-d">
                      <div className="bin-wrap">
                        <img alt="asdfd" src={binance} />
                        <span>Binance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sec3">
                <div className="left-fig">
                  <img alt="asdfd" src={sec3Bg} />
                </div>

                <div className="r-div">
                  <h2>
                    What is <span>Vangold Finance</span>?
                  </h2>
                  <p>
                    Vangold Finance is an ecosystem powering one of the world’s
                    first Freelance Services built on the Binance Smart Chain
                    (BSC) network.
                  </p>
                </div>
              </div>

              <div className="sec4">
                <div className="r-div">
                  <h2>
                    A New Era for <span>Payment</span>
                  </h2>
                  <p>
                    Today, millions of freelancers and creatives are finding it
                    difficult to get paid all over the world. Vangold
                    decentralized finance (DeFi) makes that possible now. You
                    can pay creatives or get paid as a creative, designer or a
                    software developer.
                  </p>
                </div>

                <div className="left-fig">
                  <img alt="asdfd" src={sec4Bg} />
                </div>
              </div>

              <div className="sec5">
                <h2>
                  Powering the Vangold
                  <br />
                  Network
                </h2>
                <div className="boxes">
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon1} />
                    </figure>
                    <h4>Vangold Freelance</h4>
                    <p>
                      Create and fulfill professional job postings and orders
                      instantly on the Vangold Freelance Service.
                    </p>
                  </div>
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon2} />
                    </figure>
                    <h4>Vangold Pay</h4>
                    <p>
                      A fully decentralized payment service powered by smart
                      contracts. Send and recieve payments instantly.
                    </p>
                  </div>
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon3} />
                    </figure>
                    <h4>Vangold NFT</h4>
                    <p>
                      A marketplace for digital curating arts and collectibles.
                      Powered by the Binance Smart Chain (BSC) network.
                    </p>
                  </div>
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon4} />
                    </figure>
                    <h4>Vangold Mart</h4>
                    <p>
                      An online eCommerce marketplace for buying and selling
                      products and services. Get the best deals.
                    </p>
                  </div>
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon5} />
                    </figure>
                    <h4>Vangold Metaverse</h4>
                    <p>
                      Explore the world of enhanced AR/VR technologies in the
                      Vangold Metaverse.
                    </p>
                  </div>
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon6} />
                    </figure>
                    <h4>Vangold Web3.0</h4>
                    <p>
                      The future of the internet is nearer than ever. Vangold
                      Web 3.0 will power a decentralized internet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sec6">
                <h2>Keep Up With Our Latest Events</h2>

                <div className="carousall-wrap">
                  <Slider
                    options={{
                      autoPlay: 4000,
                      pauseAutoPlayOnHover: true,
                      wrapAround: true,
                    }}
                  >
                    {images.map((image, index) => (
                      <a
                        className="carousel-cell"
                        style={{
                          width: "39%",
                          height: "186px",
                        }}
                        key={index}
                        href={image.goo}
                      >
                        <img src={image.img} alt="" />
                      </a>
                    ))}
                  </Slider>
                </div>
              </div>

              <div className="sec7">
                <div className="contain">
                  <div className="left-d">
                    <h3>Become a member of this growing communtity</h3>
                    <a href="https://t.me/vangoldtoken1">Join the community</a>
                  </div>
                  <div className="right-d">
                    <img alt="asdfd" className="img1" src={sec7Img1} />
                    <img alt="asdfd" className="img2" src={sec7Img2} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="container">
              <div className="col1">
                <Link to="/" className="brand-wrap">
                  <img alt="asdfd" className="brand-img" src={logo} />
                  <span>Vangold</span>
                </Link>
                <p className="p1">Copyright © 2021 Vangold Finance.</p>
                <p className="p2">All rights reserved</p>
                <div className="socials">
                  <a
                    href="https://instagram.com/vangoldfinance?r=nametag"
                    className="circle"
                  >
                    <img alt="asdfd" src={insta} />
                  </a>
                  <a href="https://vangold.finance/" className="circle">
                    <img alt="asdfd" src={basket} />
                  </a>
                  <a
                    href="https://twitter.com/vangoldfinance"
                    className="circle"
                  >
                    <img alt="asdfd" src={twitter} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCpRE6nyI3DVxIYz6uDBJwkw"
                    className="circle"
                  >
                    <img alt="asdfd" src={youtube} />
                  </a>
                </div>
              </div>
              <div className="col2">
                <h6>Company</h6>
                <Link to="/about">About us</Link>
                <a href="https://vangoldfinance.medium.com/">Blog</a>
                <Link to="/contact-us">Contact us</Link>
                <Link to="/">Pricing</Link>
                <Link to="/">Testimonials</Link>
              </div>
              <div className="col3">
                <h6>Support</h6>
                <a href="Mailto:vangoldtoken@vangold.finance">Help center</a>
                <Link to="/terms">Terms of service</Link>
                <Link to="/cookie-policy">Cookie Policy</Link>
                <Link to="/privacy-policy">Privacy policy</Link>
              </div>
              <div className="col4">
                <h6>Stay up to date</h6>
                <label htmlFor="email" className="e-input">
                  <input
                    id="email"
                    type="text"
                    placeholder="Your email address"
                  />
                  <img alt="asdfd" src={send} />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="home-mobile">
          {this.state.menu && (
            <div>
              <div className="header">
                <div className="container">
                  <Link to="/" className="l-div">
                    <img alt="asdfd" src={headerLogo} />
                    <span>Vangold</span>
                  </Link>
                  <div className="r-div">
                    <a href="https://t.me/vangoldtoken1" className="join-btn">
                      Join the Network
                    </a>
                    <img alt="menu-off" onClick={this.menu} src={menuIcon} />
                  </div>
                </div>
              </div>
              <div className="menu">
                <div className="menu-wrap">
                  <Link className="a1" to="/about">
                    About
                  </Link>
                  <div onClick={() => this.subMenu1()} className="menu-head">
                    {" "}
                    <p>Community</p>
                    {this.state.subMenu1 === true ? (
                      <img alt="asdfd" src={up} />
                    ) : (
                      <img alt="asdfd" src={down} />
                    )}
                  </div>
                  {this.state.subMenu1 === true ? (
                    <div className="menu-items">
                      <a href="https://t.me/vangoldtoken1">Telegram</a>
                      <a href="https://twitter.com/vangoldfinance">Twitter</a>
                      <a href="https://www.reddit.com/user/vangoldtoken">
                        Reddit
                      </a>
                      <a href="https://discord.gg/s3vVfBEFrc">Discord</a>
                      <a href="https://www.youtube.com/channel/UCpRE6nyI3DVxIYz6uDBJwkw">
                        Youtube
                      </a>
                    </div>
                  ) : (
                    ""
                  )}

                  <div onClick={() => this.subMenu2()} className="menu-head">
                    <p>Documentation</p>
                    {this.state.subMenu2 === true ? (
                      <img alt="asdfd" src={up} />
                    ) : (
                      <img alt="asdfd" src={down} />
                    )}
                  </div>
                  {this.state.subMenu2 === true ? (
                    <div className="menu-items doc-menu">
                      <a href="https://drive.google.com/file/d/1RnIm59CoclsjOOtYGOBii8aZ_2TL3w_x/view?usp=drivesdk">
                        Whitepaper
                      </a>
                      <Link to="/roadmap">Roadmap</Link>
                    </div>
                  ) : (
                    ""
                  )}
                  <div onClick={() => this.subMenu3()} className="menu-head">
                    <p>Markets</p>
                    {this.state.subMenu3 === true ? (
                      <img alt="asdfd" src={up} />
                    ) : (
                      <img alt="asdfd" src={down} />
                    )}
                  </div>
                  {this.state.subMenu3 === true ? (
                    <div className="menu-items">
                      <a href="https://vangoldswap.finance/">Stake & Farm</a>
                      <a href="https://pancakeswap.finance/swap?outputCurrency=0x487ecd4cFa635D1a9409E86Cd22d33d5abEb7b44">
                        Buy VGD
                      </a>
                      {/* <Link to="/terms">Terms</Link>
                    <Link to="/cookie-policy">Cookie Policy</Link>
                    <Link to="/landing-page">Landing Page</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link> */}
                    </div>
                  ) : (
                    ""
                  )}
                  <a className="a1" href="mailto:vangoldtoken@vangold.finance">
                    Contact{" "}
                  </a>
                  <button>Create Account</button>
                </div>
              </div>
            </div>
          )}

          <div className="header">
            <div className="container">
              <Link to="/" className="l-div">
                <img alt="asdfd" src={headerLogo} />
                <span>Vangold</span>
              </Link>
              <div className="r-div">
                <a href="https://t.me/vangoldtoken1" className="join-btn">
                  Join the Network
                </a>
                <img alt="menu-off" onClick={this.menu} src={menuIcon} />
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="container">
              <div className="sec1">
                <div className="l-sec">
                  <h2>Making Payment Easier for Everyone</h2>
                  <p>
                    Vangold is a blockchain-platform solution for freelancers
                    and creators worldwide, decentralizing payments and making
                    them easier and better through smart contracts.
                  </p>
                  <a href="https://t.me/vangoldtoken1" className="join-btn">
                    Join the Network
                  </a>
                </div>
              </div>

              <div className="sec2">
                <div className="contain1">
                  <div className="top-div">
                    <div className="left-box">
                      <div className="up-d">
                        <div className="brand-wrap">
                          <figure>
                            <img alt="asdfd" src={newImg1} />
                          </figure>
                          <span>Vangold</span>
                        </div>
                        <img alt="asdfd" src={chart} />
                      </div>
                      <div className="down-d">
                        <span className="span1">$0.001402</span>
                        <div className="text-wrap">
                          <img alt="asdfd" src={greenUp} />
                          <span>3.87%</span>
                        </div>
                      </div>
                    </div>
                    <div className="right-box">
                      <div className="up-d">
                        <div className="brand-wrap">
                          <figure>
                            <img alt="asdfd" src={newImg} />
                          </figure>
                          <span>Vangoldswap</span>
                        </div>
                        <img alt="asdfd" src={chart} />
                      </div>
                      <div className="down-d">
                        <span className="span1">$0.001402</span>
                        <div className="text-wrap">
                          <img alt="asdfd" src={greenUp} />
                          <span>3.87%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-div">
                    <h2>
                      Trusted by our beloved
                      <br />
                      partners
                    </h2>
                    <div className="lower-d">
                      <div className="bin-wrap">
                        <img alt="asdfd" src={binance} />
                        <span>Binance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sec3">
                <div className="r-div">
                  <h2>
                    What is <span>Vangold Finance</span>?
                  </h2>
                  <p>
                    Vangold Finance is an ecosystem powering one of the world’s
                    first Freelance Services built on the Binance Smart Chain
                    (BSC) network.
                  </p>
                </div>

                <div className="left-fig">
                  <img alt="asdfd" src={sec3Bg} />
                </div>
              </div>

              <div className="sec4">
                <div className="r-div">
                  <h2>
                    A New Era for <span>Payment</span>
                  </h2>
                  <p>
                    Today, millions of freelancers and creatives are finding it
                    difficult to get paid all over the world. Vangold
                    decentralized finance (DeFi) makes that possible now. You
                    can pay creatives or get paid as a creative, designer or a
                    software developer.
                  </p>
                </div>

                <div className="left-fig">
                  <img alt="asdfd" src={sec4Bg} />
                </div>
              </div>

              <div className="sec5">
                <h2>
                  Powering the Vangold
                  <br />
                  Network
                </h2>
                <div className="boxes">
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon1} />
                    </figure>
                    <h4>Vangold Freelance</h4>
                    <p>
                      Create and fulfill professional job postings and orders
                      instantly on the Vangold Freelance Service.
                    </p>
                  </div>
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon2} />
                    </figure>
                    <h4>Vangold Pay</h4>
                    <p>
                      A fully decentralized payment service powered by smart
                      contracts. Send and recieve payments instantly.
                    </p>
                  </div>
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon3} />
                    </figure>
                    <h4>Vangold NFT</h4>
                    <p>
                      A marketplace for digital curating arts and collectibles.
                      Powered by the Binance Smart Chain (BSC) network.
                    </p>
                  </div>
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon4} />
                    </figure>
                    <h4>Vangold Mart</h4>
                    <p>
                      An online eCommerce marketplace for buying and selling
                      products and services. Get the best deals.
                    </p>
                  </div>
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon5} />
                    </figure>
                    <h4>Vangold Metaverse</h4>
                    <p>
                      Explore the world of enhanced AR/VR technologies in the
                      Vangold Metaverse.
                    </p>
                  </div>
                  <div className="box">
                    <figure>
                      <img alt="asdfd" src={icon6} />
                    </figure>
                    <h4>Vangold Web3.0</h4>
                    <p>
                      The future of the internet is nearer than ever. Vangold
                      Web 3.0 will power a decentralized internet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sec6">
                <h2>Keep Up With Our Latest Events</h2>

                <div className="carousall-wrap">
                  <Slider
                    options={{
                      autoPlay: 4000,
                      pauseAutoPlayOnHover: true,
                      wrapAround: true,
                    }}
                  >
                    {images.map((image, index) => (
                      <a
                        className="carousel-cell"
                        style={{
                          width: "52%",
                        }}
                        key={index}
                        href={image.goo}
                      >
                        <img src={image.img} alt="" />
                      </a>
                    ))}
                  </Slider>
                </div>
              </div>

              <div className="sec7">
                <div className="contain">
                  <div className="left-d">
                    <h3>Become a member of this growing communtity</h3>
                    <a href="https://t.me/vangoldtoken1">Join the community</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="container">
              <div className="col1">
                <Link to="/" className="brand-wrap">
                  <img alt="asdfd" className="brand-img" src={logo} />
                  <span>Vangold</span>
                </Link>
                <p className="p1">Copyright © 2021 Vangold Finance.</p>
                <p className="p2">All rights reserved</p>
                <div className="socials">
                  <a
                    href="https://instagram.com/vangoldfinance?r=nametag"
                    className="circle"
                  >
                    <img alt="asdfd" src={insta} />
                  </a>
                  <a href="https://vangold.finance/" className="circle">
                    <img alt="asdfd" src={basket} />
                  </a>
                  <a
                    href="https://twitter.com/vangoldfinance"
                    className="circle"
                  >
                    <img alt="asdfd" src={twitter} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCpRE6nyI3DVxIYz6uDBJwkw"
                    className="circle"
                  >
                    <img alt="asdfd" src={youtube} />
                  </a>
                </div>
              </div>
              <div className="col2">
                <h6>Company</h6>
                <div className="links">
                  <Link to="/about">About us</Link>
                  <a href="https://vangoldfinance.medium.com/">Blog</a>
                  <Link to="/contact-us">Contact us</Link>
                  <Link to="/">Pricing</Link>
                  <Link to="/">Testimonials</Link>
                </div>
              </div>
              <div className="col3">
                <h6>Support</h6>
                <div className="links">
                  <a href="Mailto:vangoldtoken@vangold.finance">Help center</a>
                  <Link to="/terms">Terms of service</Link>
                  <Link to="/cookie-policy">Cookie Policy</Link>
                  <Link to="/privacy-policy">Privacy policy</Link>
                </div>
              </div>
              <div className="col4">
                <h6>Stay up to date</h6>
                <label htmlFor="email" className="e-input">
                  <input
                    id="email"
                    type="text"
                    placeholder="Your email address"
                  />
                  <img alt="asdfd" src={send} />
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
