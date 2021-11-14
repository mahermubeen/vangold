import React from "react";
import { Link } from "react-router-dom";

import headerLogo from "../img/header-brand-logo.png";

import logo from "../img/footer-brand-logo.png";
import send from "../img/send.png";
import basket from "../img/basket.png";
import twitter from "../img/twitter.png";
import insta from "../img/insta.png";
import youtube from "../img/youtube.png";
import roadmapBG from "../img/roadmap-bg.png";
import roadmapBGMob from "../img/road-mob-bg.png";
import locationIcon from "../img/location-img.png";
import locationIconMob from "../img/loc-icon-mob.png";
import line1 from "../img/line1.png";
import line1Mob from "../img/line1-mob.png";
import line2 from "../img/line2.png";
import line2Mob from "../img/line2-mob.png";
import line3 from "../img/line3.png";
import line3Mob from "../img/line3-mob.png";
import line4 from "../img/line4.png";
import line4Mob from "../img/line4-mob.png";
import line5 from "../img/line5.png";
import line5Mob from "../img/line5-mob.png";
import clickBG from "../img/click-bg.png";

import down from "../img/arrow-down.png";
import up from "../img/up.png";
import menuIcon from "../img/menu.png";

export default class Roadmap extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      menu5: false,
      menu6: false,
      menu7: false,
      community: false,
      developers: false,
      individuals: false,
      menu: false,
      subMenu1: false,
      subMenu2: false,
      subMenu3: false,
    };
    this.toggleBtn = this.toggleBtn.bind(this);
    this.menu1 = this.menu1.bind(this);
    this.menu2 = this.menu2.bind(this);
    this.menu3 = this.menu3.bind(this);
    this.menu4 = this.menu4.bind(this);
    this.menu5 = this.menu5.bind(this);
    this.menu6 = this.menu6.bind(this);
    this.menu7 = this.menu7.bind(this);
    this.community = this.community.bind(this);
    this.developers = this.developers.bind(this);
    this.individuals = this.individuals.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.subMenu1 = this.subMenu1.bind(this);
    this.subMenu2 = this.subMenu2.bind(this);
    this.subMenu3 = this.subMenu3.bind(this);
  }

  toggleBtn() {
    this.setState({ toggle: !this.state.toggle });
  }

  menu1() {
    this.setState({ menu1: !this.state.menu1 });
  }

  menu2() {
    this.setState({ menu2: !this.state.menu2 });
  }

  menu3() {
    this.setState({ menu3: !this.state.menu3 });
  }

  menu4() {
    this.setState({ menu4: !this.state.menu4 });
  }
  menu5() {
    this.setState({ menu5: !this.state.menu5 });
  }
  menu6() {
    this.setState({ menu6: !this.state.menu6 });
  }
  menu7() {
    this.setState({ menu7: !this.state.menu7 });
  }

  community() {
    this.setState({ community: !this.state.community });
    console.log("asdfasfd");
  }

  developers() {
    this.setState({ developers: !this.state.developers });
  }

  individuals() {
    this.setState({ individuals: !this.state.individuals });
  }

  handleMenu() {
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

  render() {
    return (
      <div>
        <div className="roadmap">
          <div className="header">
            <div className="container">
              <Link to="/" className="l-div">
                <img src={headerLogo} alt="asdf" />
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
                      <a href="https://drive.google.com/file/d/1RnIm59CoclsjOOtYGOBii8aZ_2TL3w_x/view?usp=drivesdk">
                        Whitepaper
                      </a>
                      <Link to="/roadmap">Roadmap</Link>
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
                      <Link to="/terms">Terms</Link>
                      <Link to="/cookie-policy">Cookie Policy</Link>
                      <Link to="/landing-page">Landing Page</Link>
                      <Link to="/privacy-policy">Privacy Policy</Link>
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

          <div className="main-content">
            <div className="sec1">
              <img className="bg-img" src={roadmapBG} />

              <div className="toggle-wrap">
                <div className="toggle-btn">
                  <label class="toggler__label">
                    <input type="checkbox" hidden onClick={this.toggleBtn} />
                    <div class="toggler"></div>
                  </label>
                </div>

                <div className="click-wrap">
                  <img src={clickBG} />
                  <span>Click</span>
                </div>
              </div>

              <div className="row1-wrap">
                <div className="row1">
                  <img
                    className="loc-icon"
                    onClick={this.menu1}
                    src={locationIcon}
                  />
                  <span>Vangold Service Roadmap</span>
                </div>

                <div className="click-wrap">
                  <img src={clickBG} />
                  <span>Click</span>
                </div>

                {this.state.menu1 ? (
                  <div className="menu1-wrap">
                    <div className="p-wrap">
                      <p className="p1">
                        The Vangold share screen feature will be a huge leap for
                        Vangold’s freelancer platform with many functionalities,
                        including video call support, group chat, and
                        conferencing support. The features will provide the best
                        experience for business users, cutting across user
                        experience to build more professional and trust-inclined
                        relationships.
                      </p>
                    </div>
                    <button>Vangold Share Screen Integeration</button>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="row2">
                <img className="line1" src={line1} />
              </div>
              <div className="img-icon2-wrap">
                {this.state.toggle ? (
                  <div className="left-icon-wrap">
                    <img
                      src={locationIcon}
                      onClick={this.menu7}
                      className="loc-icon"
                    />
                    <span>Vangold Swap Roadmap</span>

                    {this.state.menu7 ? (
                      <div className="menu7-wrap">
                        <div className="p-wrap">
                          <p className="p1">
                            The Vangold decentralized exchange will have a
                            remarkable remodeling in a few weeks. On the list
                            for the Roadmap is the introduction of the Vangold
                            lottery system and a huge burn. And we'll see the
                            layered-farming feature too. Vangold’s lottery
                            campaign will offer rewards for matching tickets and
                            numbers. We'll list Vangold Swap on Coinmarketcap
                            and have an audit with Techrate, adopting Vangold
                            Swap tokens as rewards within the Vangold platforms.
                          </p>
                        </div>
                        <button>VGD Swap Roadmap</button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}

                <img
                  src={locationIcon}
                  onClick={this.menu2}
                  className="loc-icon"
                />
                <img className="line2" src={line2} />

                {this.state.menu2 ? (
                  <div className="menu2-wrap">
                    <div className="p-wrap">
                      <p className="p1">
                        Before now, the platform could only support the transfer
                        of tokens from buyers to sellers after purchasing a
                        service. The introduction of this feature will allow
                        users to perform inter-account transactions
                        effortlessly. Team/members will also share tokens
                        amongst themselves easily. Further modifications to this
                        feature will allow group or companies owners to pay
                        bills through a secured payroll system.
                      </p>
                    </div>
                    <button>Token Support Protocol</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="img-icon3-wrap">
                <img
                  src={locationIcon}
                  onClick={this.menu3}
                  className="loc-icon"
                />
                <img className="line3" src={line3} />

                {this.state.menu3 ? (
                  <div className="menu3-wrap">
                    <div className="p-wrap">
                      <p className="p1">
                        Vangold Services will introduce the mobile app for its
                        freelance sourcing service to give a more personalized
                        usage. Subsequently, the company will add newer features
                        to enable easy usage and flexible customization of the
                        app’s dashboard.
                      </p>
                    </div>
                    <button>Mobile App Launch</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="img-icon4-wrap">
                <img
                  className="img1 loc-icon"
                  onClick={this.menu4}
                  src={locationIcon}
                />
                <img className="line4" src={line4} />

                {this.state.menu4 ? (
                  <div className="menu4-wrap">
                    <div className="p-wrap">
                      <p className="p1">
                        Vangold reselling tool is a special web aid tool that’ll
                        help developers, designers, and other freelancers ease
                        their jobs and complete more tasks with ease.
                      </p>
                    </div>
                    <button>VGD Reselling Tool</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="img-icon5-wrap">
                <img
                  className="loc-icon"
                  onClick={this.menu5}
                  src={locationIcon}
                />
                <img className="line5" src={line5} />

                {this.state.menu5 ? (
                  <div className="menu5-wrap">
                    <div className="p-wrap">
                      <p className="p1">
                        Vangold Services will introduce the metaverse into its
                        platform to allow users to host virtual reality meetings
                        and virtual conferences. The metaverse will also connect
                        workers from the same category who share similar
                        interests. Vangold will also make further modifications
                        to allow users to exchange funds, own houses and lands,
                        and even get different jobs within the metaverse.
                      </p>
                    </div>
                    <button>Metaverse Introduction</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="last-img">
                <img
                  className="loc-icon"
                  onClick={this.menu6}
                  src={locationIcon}
                />

                {this.state.menu6 ? (
                  <div className="menu6-wrap">
                    <div className="p-wrap">
                      <p className="p1">
                        This initiative is a combination of social media,
                        gaming, and the metaverse. It creates a room where users
                        with similar interests meet and communicate within a
                        social media/business virtual environment. Users can
                        share ideas within the metaverse. Companies can create a
                        virtual environment where they manage their team.
                      </p>
                    </div>
                    <button>Gamification Support</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="container">
              <div className="col1">
                <Link to="/" className="brand-wrap">
                  <img className="brand-img" src={logo} />
                  <span>Vangold</span>
                </Link>
                <p className="p1">Copyright © 2021 Vangold Finance.</p>
                <p className="p2">All rights reserved</p>
                <div className="socials">
                  <a
                    href="https://instagram.com/vangoldfinance?r=nametag"
                    className="circle"
                  >
                    <img src={insta} />
                  </a>
                  <a href="https://vangold.finance/" className="circle">
                    <img src={basket} />
                  </a>
                  <a
                    href="https://twitter.com/vangoldfinance"
                    className="circle"
                  >
                    <img src={twitter} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCpRE6nyI3DVxIYz6uDBJwkw"
                    className="circle"
                  >
                    <img src={youtube} />
                  </a>
                </div>
              </div>
              <div className="col2">
                <h6>Company</h6>
                <Link to="/about">About us</Link>
                <a href="https://vangoldfinance.medium.com/">Blog</a>
                <a href="Mailto:vangoldtoken@vangold.finance">Contact us</a>
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
                <label for="email" className="e-input">
                  <input
                    id="email"
                    type="text"
                    placeholder="Your email address"
                  />
                  <img src={send} />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="roadmap-mobile">
          <div className="header">
            <div className="container">
              <Link to="/" className="l-div">
                <img src={headerLogo} alt="asdf" />
                <span>Vangold</span>
              </Link>
              <div className="r-div">
                <a href="https://t.me/vangoldtoken1" className="join-btn">
                  Join the Network
                </a>
                <img onClick={this.handleMenu} src={menuIcon} />
              </div>
            </div>
          </div>

          {this.state.menu === true ? (
            <div className="menu">
              <div className="menu-wrap">
                <Link className="a1" to="/about">
                  About
                </Link>
                <div onClick={() => this.subMenu1()} className="menu-head">
                  {" "}
                  <p>Community</p>
                  {this.state.subMenu1 === true ? (
                    <img src={up} />
                  ) : (
                    <img src={down} />
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
                    <img src={up} />
                  ) : (
                    <img src={down} />
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
                    <img src={up} />
                  ) : (
                    <img src={down} />
                  )}
                </div>
                {this.state.subMenu3 === true ? (
                  <div className="menu-items">
                    <a href="https://vangoldswap.finance/">Stake & Farm</a>
                    <a href="https://pancakeswap.finance/swap?outputCurrency=0x487ecd4cFa635D1a9409E86Cd22d33d5abEb7b44">
                      Buy VGD
                    </a>
                    <Link to="/terms">Terms</Link>
                    <Link to="/cookie-policy">Cookie Policy</Link>
                    <Link to="/landing-page">Landing Page</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
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
          ) : (
            <div>
              <div className="main-content">
                <div className="container">
                  <div className="main-content">
                    <div className="sec1">
                      <img className="bg-img" src={roadmapBG} />

                      <div className="toggle-wrap">
                        <div className="toggle-btn">
                          <label class="toggler__label">
                            <input
                              type="checkbox"
                              hidden
                              onClick={this.toggleBtn}
                            />
                            <div class="toggler"></div>
                          </label>
                        </div>

                        <div className="click-wrap">
                          <img src={clickBG} />
                          <span>Click</span>
                        </div>
                      </div>

                      <div className="row1-wrap">
                        <div className="row1">
                          <img
                            className="loc-icon"
                            onClick={this.menu1}
                            src={locationIconMob}
                          />
                          <span>Vangold Service Roadmap</span>
                        </div>

                        <div className="click-wrap">
                          <img src={clickBG} />
                          <span>Click</span>
                        </div>

                        {this.state.menu1 ? (
                          <div className="menu1-wrap">
                            <div className="p-wrap">
                              <p className="p1">
                                The Vangold share screen feature will be a huge
                                leap for Vangold’s freelancer platform with many
                                functionalities, including video call support,
                                group chat, and conferencing support. The
                                features will provide the best experience for
                                business users, cutting across user experience
                                to build more professional and trust-inclined
                                relationships.
                              </p>
                            </div>
                            <button>Vangold Share Screen Integeration</button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="row2">
                        <img className="line1" src={line1Mob} />
                        {this.state.toggle ? (
                          <div className="left-icon-wrap">
                            <img
                              src={locationIconMob}
                              onClick={this.menu7}
                              className="loc-icon"
                            />
                            <span>Vangold Swap Roadmap</span>

                            {this.state.menu7 ? (
                              <div className="menu7-wrap">
                                <div className="p-wrap">
                                  <p className="p1">
                                    The Vangold decentralized exchange will have
                                    a remarkable remodeling in a few weeks. On
                                    the list for the Roadmap is the introduction
                                    of the Vangold lottery system and a huge
                                    burn. And we'll see the layered-farming
                                    feature too. Vangold’s lottery campaign will
                                    offer rewards for matching tickets and
                                    numbers. We'll list Vangold Swap on
                                    Coinmarketcap and have an audit with
                                    Techrate, adopting Vangold Swap tokens as
                                    rewards within the Vangold platforms.
                                  </p>
                                </div>
                                <button>VGD Swap Roadmap</button>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="img-icon2-wrap">
                        <img
                          src={locationIconMob}
                          onClick={this.menu2}
                          className="loc-icon"
                        />
                        <img className="line2" src={line2Mob} />

                        {this.state.menu2 ? (
                          <div className="menu2-wrap">
                            <div className="p-wrap">
                              <p className="p1">
                                Before now, the platform could only support the
                                transfer of tokens from buyers to sellers after
                                purchasing a service. The introduction of this
                                feature will allow users to perform
                                inter-account transactions effortlessly.
                                Team/members will also share tokens amongst
                                themselves easily. Further modifications to this
                                feature will allow group or companies owners to
                                pay bills through a secured payroll system.
                              </p>
                            </div>
                            <button>Token Support Protocol</button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="img-icon3-wrap">
                        <img
                          src={locationIconMob}
                          onClick={this.menu3}
                          className="loc-icon icon"
                        />
                        <img className="line3" src={line3Mob} />

                        {this.state.menu3 ? (
                          <div className="menu3-wrap">
                            <div className="p-wrap">
                              <p className="p1">
                                Vangold Services will introduce the mobile app
                                for its freelance sourcing service to give a
                                more personalized usage. Subsequently, the
                                company will add newer features to enable easy
                                usage and flexible customization of the app’s
                                dashboard.
                              </p>
                            </div>
                            <button>Mobile App Launch</button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="img-icon4-wrap">
                        <img
                          className="img1 loc-icon"
                          onClick={this.menu4}
                          src={locationIconMob}
                        />
                        <img className="line4" src={line4Mob} />

                        {this.state.menu4 ? (
                          <div className="menu4-wrap">
                            <div className="p-wrap">
                              <p className="p1">
                                Vangold reselling tool is a special web aid tool
                                that’ll help developers, designers, and other
                                freelancers ease their jobs and complete more
                                tasks with ease.
                              </p>
                            </div>
                            <button>VGD Reselling Tool</button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="img-icon5-wrap">
                        <img
                          className="loc-icon"
                          onClick={this.menu5}
                          src={locationIconMob}
                        />
                        <img className="line5" src={line5Mob} />

                        {this.state.menu5 ? (
                          <div className="menu5-wrap">
                            <div className="p-wrap">
                              <p className="p1">
                                Vangold Services will introduce the metaverse
                                into its platform to allow users to host virtual
                                reality meetings and virtual conferences. The
                                metaverse will also connect workers from the
                                same category who share similar interests.
                                Vangold will also make further modifications to
                                allow users to exchange funds, own houses and
                                lands, and even get different jobs within the
                                metaverse.
                              </p>
                            </div>
                            <button>Metaverse Introduction</button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="last-img">
                        <img
                          className="loc-icon"
                          onClick={this.menu6}
                          src={locationIconMob}
                        />

                        {this.state.menu6 ? (
                          <div className="menu6-wrap">
                            <div className="p-wrap">
                              <p className="p1">
                                This initiative is a combination of social
                                media, gaming, and the metaverse. It creates a
                                room where users with similar interests meet and
                                communicate within a social media/business
                                virtual environment. Users can share ideas
                                within the metaverse. Companies can create a
                                virtual environment where they manage their
                                team.
                              </p>
                            </div>
                            <button>Gamification Support</button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer">
                <div className="container">
                  <div className="col1">
                    <Link to="/" className="brand-wrap">
                      <img className="brand-img" src={logo} />
                      <span>Vangold</span>
                    </Link>

                    <h6>Stay up to date</h6>
                    <label for="email" className="e-input">
                      <input
                        id="email"
                        type="text"
                        placeholder="Your email address"
                      />
                      <img src={send} />
                    </label>

                    <p className="p1">Copyright © 2021 Vangold Finance.</p>
                    <p className="p2">All rights reserved</p>
                    <div className="socials">
                      <a
                        href="https://instagram.com/vangoldfinance?r=nametag"
                        className="circle"
                      >
                        <img src={insta} />
                      </a>
                      <a href="https://vangold.finance/" className="circle">
                        <img src={basket} />
                      </a>
                      <a
                        href="https://twitter.com/vangoldfinance"
                        className="circle"
                      >
                        <img src={twitter} />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCpRE6nyI3DVxIYz6uDBJwkw"
                        className="circle"
                      >
                        <img src={youtube} />
                      </a>
                    </div>
                  </div>
                  <div className="col2">
                    <h6>Company</h6>
                    <div className="links">
                      <Link to="/">About us</Link>
                      <Link to="/">Blog</Link>
                      <Link to="/">Contact us</Link>
                      <Link to="/">Pricing</Link>
                      <Link to="/">Testimonials</Link>
                    </div>
                  </div>
                  <div className="col3">
                    <h6>Support</h6>
                    <div className="links">
                      <Link to="/">Help center</Link>
                      <Link to="/">Terms of service</Link>
                      <Link to="/">Legal</Link>
                      <Link to="/">Privacy policy</Link>
                      <Link to="/">Status</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
