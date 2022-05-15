import React, {useState} from 'react';
import styles from "./Sections/css/Main.module.css";
import {NavLink} from "react-router-dom";
import LogoY from "./assets/Logo_yellow.png";
import logoY_mobile from "./assets/LogoY_mobile.png";
import video from "./assets/video bg.mp4";
import "./avalanche";
import MobileNavigation from "./Sections/MobileNav/MobileNavigation";
import bg from "./assets/bgNFT.png";
import Fade from "react-reveal";
import logoW from "./assets/2.png";
import gif from "./assets/gif.gif";
import schoes1 from "./assets/shoes1_1.png";
import schoes2 from "./assets/shoes1_2.png";
import schoes3 from "./assets/shoes1_3.png";
import schoes4 from "./assets/shoes1_4.png";
import boxLarge from "./assets/boxLarge.png";
import shoes1 from "./assets/shoes1.png";
import shoes3 from "./assets/shoes3.png";
import shoes2 from "./assets/shoes2.png";
import {AiFillTwitterCircle} from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";
import ConnectWalletModal from "./ConnectWalletModal";

function ScrollLine() {
    setInterval(function (ex, nfs, uniq, chance, genesis) {
        let Item = document.getElementById('Item');
        setTimeout(function ex() {
            Item.textContent = 'EXCLUSIVE COLLECTION'
        }, 2000);
        setTimeout(function nfs(ex) {
            Item.textContent = '10000 NFS BOXES'
            setTimeout(ex, 12000)
        }, 4000);
        setTimeout(function uniq(ex, nfs) {
            Item.textContent = '5000 UNIQUE COLORS'
            setTimeout(nfs, 12000);setTimeout(ex, 12000)
        }, 6000);
        setTimeout(function chance(ex, nfs, uniq) {
            Item.textContent = '5 % CHANCE OF UNCOMMON SNEAKERS'
            setTimeout(nfs, 12000);setTimeout(ex, 12000);setTimeout(uniq, 12000)
        }, 8000);
        setTimeout(function genesis(ex, nfs, uniq, change) {
            Item.textContent = 'GENESIS NFT DROP BOX'
            setTimeout(ex, 12000);setTimeout(nfs, 12000);setTimeout(uniq, 12000);setTimeout(change, 12000)
        }, 10000);
        clearTimeout(ex);clearTimeout(nfs);clearTimeout(uniq);clearTimeout(chance);clearTimeout(genesis)
    }, 12000);
};
ScrollLine();

const Site = () => {
    let [amountOfBoxes, setAmountOfBoxes] = useState(0);
    const [isOpenConnectWalletModal, setIsOpenConnectWalletModal] = useState(false)
    const maxAmountOfBoxes = 15;
    const costPerBox = 1;
    const increment = () => {
        if (amountOfBoxes < maxAmountOfBoxes) setAmountOfBoxes(amountOfBoxes + 1);
    }
    const decrement = () => {
        if (amountOfBoxes > 0) return (setAmountOfBoxes(amountOfBoxes - 1));
    }
    const sliderOnChange = (sliderArgs) => setAmountOfBoxes(parseInt(sliderArgs.target.value));

    const openConnectWalletModal = () => setIsOpenConnectWalletModal(true);
    const closeConnectWalletModal = () => setIsOpenConnectWalletModal(false);

    return (
        <>
            <ConnectWalletModal onClose={closeConnectWalletModal} show={isOpenConnectWalletModal}/>
            <header className={styles.Header}>
                <div className={styles.Navigation}>
                    <NavLink to='/' className={styles.Header_Logo}>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={LogoY} alt="image" className={styles.Header_Logo_Yellow}/>
                        <img src={logoY_mobile} alt="image" className={styles.Header_Logo_Yellow_mobile}/>
                    </NavLink>
                    <div className={styles.Header_centerText}>
                        GENESIS NFT DROP BOX
                    </div>
                    <div className={styles.flex_column}>
                        <div className={styles.select_background}>
                            <select name="wallet" id="yiof0991dhf8" className={styles.select}>
                                <option value="Metamask" onChange='' id="1">Metamask</option>
                                <option value="" id="2">Wallet connect</option>
                            </select>
                        </div>
                        <div className={styles.Header_BtnWallet} onClick={openConnectWalletModal}>
                            Connect wallet
                        </div>
                    </div>
                </div>
                <video muted autoPlay={"autoplay"} preLoad="auto" loop className={styles.Header_BGVideo}
                       id="BgVideo">
                    <source src={video}/>
                </video>
                <MobileNavigation/>
            </header>
            <section className={styles.MainFrame}>
                <div className={styles.Navigation_Bottom}>
                    <div className={styles.Bottom_LeftText}>
                        RUN — EARN — RUN
                    </div>
                    <div className={styles.Bottom_CenterText}>
                        SCROLL
                    </div>
                    <div className={styles.Bottom_LeftText}>
                        <NavLink to='#' className={styles.active}>
                            EN
                        </NavLink>
                        <NavLink to='#'>
                            中文
                        </NavLink>
                        <div id="volumeBtn">MUSIC : OFF</div>
                    </div>
                </div>
            </section>
            <section className={styles.NFT}>
                <div style={{backgroundImage: `url(${bg})`}}>
                    <div className={styles.NFT_UpperText}>
                        <Fade left>
                            <div id="Item" className={styles.Item}>
                                GENESIS NFT DROP BOX
                            </div>
                        </Fade>
                    </div>
                    <div className={styles.NFT_Flex}>
                        <div className={styles.NFT_Flex__Gif_Flex}>
                            <div className={styles.NFT_Flex__Gif_LogoW}>
                                <img src={logoW} alt={logoW} className={styles.NFT_Flex__Gif_LogoW_img}/>
                            </div>
                            <div className={styles.NFT_Flex__Gif}>
                                <div>
                                    <img autoPlay={"autoplay"} preLoad="auto" loop src={gif}
                                         className={styles.NFT_Flex__Gif_img}>
                                    </img>
                                </div>
                                <div className={styles.NFT_Flex__Gif_Text}>10,000 NFT BOXES</div>
                            </div>
                        </div>
                        <div className={styles.NFT_Flex__LimitedScroll}>
                            <div className={styles.NFT_Flex__LimitedScroll_Flex}>
                                <div className={styles.NFT_Flex__LimitedScroll_Text}>Limited Sale</div>
                                <div className={styles.NFT_Flex__LimitedScroll_SchoesFlex}>
                                    <div className={styles.NFT_Flex__LimitedScroll_Schoes_first}>
                                        <img src={schoes1} alt=""/>
                                    </div>
                                    <div className={styles.NFT_Flex__LimitedScroll_Schoes_second}>
                                        <img src={schoes2} alt=""/>
                                    </div>
                                    <div className={styles.NFT_Flex__LimitedScroll_Schoes_third}>
                                        <img src={schoes3} alt=""/>
                                    </div>
                                    <div className={styles.NFT_Flex__LimitedScroll_Schoes_four}>
                                        <img src={schoes4} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.NFT_Flex__LimitedScroll_Avaliable}>
                                <div className={styles.NFT_Flex__LimitedScroll_Logo}>
                                    <img src={boxLarge} alt="boxLarge"
                                         className={styles.NFT_Flex__LimitedScroll_Logo_In}/>
                                </div>
                                <div className={styles.NFT_Flex__LimitedScroll_Flex} style={{flexDirection: 'column'}}>
                                    <div className={styles.NFT_Flex__LimitedScroll_Flex_Price}>Price Per Box</div>
                                    <div className={styles.NFT_Flex__LimitedScroll_Flex_AVAX}>{costPerBox} AVAX</div>
                                </div>
                            </div>
                            <div className={styles.NFT_Flex__LimitedScroll_Scroller}>
                                <div className={styles.NFT_Flex__LimitedScroll_Scroller_Btn_decrement}
                                     onClick={decrement}>-
                                </div>
                                <div className={styles.NFT_Flex__LimitedScroll_Scroller_Text}>{amountOfBoxes}</div>
                                <div className={styles.NFT_Flex__LimitedScroll_Scroller_Btn_increment}
                                     onClick={increment}>+
                                </div>
                            </div>
                            <div className={styles.NFT_Flex__LimitedScroll_Scroll}>
                                <input value={amountOfBoxes} onChange={sliderOnChange} type="range" min={0} max={15}
                                       id='range'/>
                            </div>
                            <hr/>
                            <div className={styles.NFT_Flex__LimitedScroll_Flex_Flex}>
                                <div className={styles.NFT_Flex__LimitedScroll_Total}>Total</div>
                                <div className={styles.NFT_Flex__LimitedScroll_Max}>{amountOfBoxes} AVAX</div>
                            </div>
                            <hr style={{paddingBottom: '30px'}}/>

                            <div className={styles.NFT_Flex__LimitedScroll_ConnectWallet} onClick={openConnectWalletModal}>Connect Wallet</div>

                            <div className={styles.NFT_Flex__LimitedScroll_buy}>{amountOfBoxes} / 10, 000</div>
                        </div>
                    </div>
                    <div className={styles.NFT_UnderText}>
                        Sales begin May 12
                    </div>
                </div>
            </section>
            <div className={styles.BlackTransition}>
                <div className={styles.BlackTransition_YellowUpper}>
                    <svg viewBox="0 0 1440 81" fill="none" xmlns="http://www.w3.org/2000/svg"
                         style={{paddingTop: '160px'}}>
                        <path d="M0 80.2749H1440.97V39.6658L720.973 0.274902L0 39.6658V80.2749Z" fill="#F9D449"/>
                    </svg>
                </div>
                <div className={styles.BlackTransition_YellowDown}>
                    <svg viewBox="0 0 1440 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 80.2749H1440.97V39.6658L720.973 0.274902L0 39.6658V80.2749Z" fill="#F9D449"/>
                    </svg>
                </div>
            </div>
            <section style={{
                top: '-2vh'
                , position: 'relative'
            }}>
                <div className={styles.Info}>
                    <Fade left>
                        <div className={styles.Info_LargeText} id="TextAnimate">
                            This is a glorious day not only for us, but
                            for the entire StepAPP community. The first
                            GENESIS NFT DROP will take place in the second
                            quarter of 2022, just as it was stated in the
                            project roadmap. Presently, everything is
                            going in accordance with our roadmap, and we
                            are happy that the deadlines don't move. It's
                            an achievement of our entire community.
                        </div>
                        <div className={styles.Info_CenterText} id="TextAnimate">
                            We are pleased to present to you the first 10,000 NFT BOXES. Our designers have worked long
                            hours to
                            create style varieties and develop sneaker color selections. Now, we have 5,000 sneaker
                            style
                            varieties. The NFT BOX you open will feature sneakers with a random set of aspects and a
                            random
                            style. This is the first StepApp limited-edition collection, which will serve as a big step
                            toward
                            developing the ecosystem.
                        </div>
                    </Fade>
                    <div className={styles.Info_Shoes}>
                        <img src={shoes1} alt="shoes"/>
                    </div>
                    <Fade right>
                        <div className={styles.Info_RightText} id="TextAnimate">
                            In addition to a unique pair of sneakers, each of you will get a<br/>
                            chance to get Uncommon.
                        </div>
                    </Fade>
                    <Fade left>
                        <div className={styles.Info_LeftText} id="TextAnimate">
                            The strategic plan is to fill the market with the first green sneakers<br/>
                            in a short period of time, so we increased the Uncommon drop<br/>
                            percentage to 5% in this box drop. In the future, the percentage<br/>
                            will be reduced to 1%.
                        </div>
                    </Fade>

                    <div className={styles.Info_Shoes}>
                        <img src={shoes3} alt="shoes"/>
                    </div>
                    <Fade right>
                        <div className={styles.Info_RightText} id="TextAnimate">
                            The price of 1 box is 4.9 AVAX.<br/>
                            The maximum number of boxes you can buy is 10.
                        </div>
                    </Fade>
                    <Fade left>
                        <div className={styles.Info_LeftText} id="TextAnimate">
                            Detailed technical documentation describing the aspects and<br/>
                            implementation of the features of all types of sneakers will be<br/>
                            published within 5 days after the sales are closed.
                        </div>
                    </Fade>
                    <div className={styles.Info_Shoes}>
                        <img src={shoes2} alt=""/>
                    </div>
                    <Fade right>
                        <div className={styles.Info_RightText} id="TextAnimate">
                            Just like our community, we can't wait to find out what kind and<br/>
                            color of sneakers will become unique after all. And good luck<br/>
                            to everyone with getting Uncommon sneakers.
                        </div>
                    </Fade>
                    <Fade left>
                        <div className={styles.Info_RER} id="TextAnimate">
                            Run-Earn-Run
                        </div>
                    </Fade>
                </div>
            </section>
            <footer style={{top: '-2vh', position: 'relative'}}>
                <div className={styles.Footer_matrix}>
                    <svg viewBox="0 0 1440 81" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className={styles.Footer_matrix_path}>
                        <path d="M0 80.2749H1440.97V39.6658L720.973 0.274902L0 39.6658V80.2749Z" fill="black"/>
                    </svg>
                </div>
                <div className={styles.Footer_Logo}>
                    <img src={LogoY} alt="img" className={styles.Footer_Logo_img}/>
                </div>
                <div className={styles.Footer_Text}>
                    We are pleased to present to you the first <br/>
                    10,000 NFT BOXES.
                </div>
                <div className={styles.Footer_Flex}>
                    <AiFillTwitterCircle className={styles.Footer_Flex_icons}/>
                    <FaTelegram className={styles.Footer_Flex_icons}/>
                </div>
                <div style={{backgroundColor: 'black'}}>
                    <div className={styles.Footer_Copyright}>
                        © 2022 step.app. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Site;