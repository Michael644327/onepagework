import React from "react";
import homeBlog from "./data/homepage-blog.json"

export default function Home() {
    return <>
        <div className="wide-section">
            <div className="top-title">
                <div className="title-block title-img">
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/Hero%20Section.png" alt="img" width="100%" />
                </div>
                <div className="title-block title-text">
                    <h3>Alyse Wang</h3>
                    <div>前端工程師 & 職涯諮詢師</div>
                </div>
            </div>
            <div className="intro">
                <p>嗨，我是 Alyse 一名深耕前端技術的工程師。</p>
                <p>擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！</p>
                <div className="socialmedia">
                    <a href="#"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon.png" alt="icon" /></a>
                    <a href="#"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-1.png" alt="icon" /></a>
                    <a href="#"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-2.png" alt="icon" /></a>
                    <a href="#"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/icons8-linkedin.png" alt="icon" /></a>
                    <a href="#"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-3.png" alt="icon" /></a>
                </div>
            </div>
        </div>
        <div className="container service">
            <h3>專業服務與方案</h3>
            <div className="section-1 sections">
                <div className="img">
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo.png" alt="photo" />
                </div>
                <div className="des text-block">
                    <h4>履歷健檢</h4>
                    <p>履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。</p>
                </div>
            </div>
            <div className="section-2 sections">
                <div className="img">
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo2.png" alt="photo" />
                </div>
                <div className="des text-block">
                    <h4>線上諮詢</h4>
                    <p>想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。</p></div>
            </div>
            <div className="section-3 sections">
                <div className="img">
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo3.png" alt="photo" />
                </div>
                <div className="des text-block">
                    <h4>網頁開發</h4>
                    <p>想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。</p></div>
            </div>
            <div className="section-4 sections">
                <div className="img">
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo4.png" alt="photo" />
                </div>
                <div className="des text-block">
                    <h4>企業內訓</h4>
                    <p>想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。</p>
                </div>
            </div>
            <div className="section-5 sections">
                <h4>聯繫我，取得更多資訊！</h4>
            </div>
        </div>
        <div className="container">
            <h3>部落格精選</h3>
            <div className="blog">
                {homeBlog.map((v, i) => (
                    <div className="blogs" key={v.id}>
                        <img src={v.image} alt="lesson-photo" />
                        <div className="article">
                            <div className="date">{v.data}</div>
                            <div className="tags">{v.tag} {v.pop ? <span className="pop">人氣文章</span> : ""}</div>
                            <h3>{v.title}</h3>
                            <p className="describe">{v.describe}</p>
                        </div>
                        <button className="readmore"><a href="./blog/page1">閱讀內文</a></button>
                    </div>
                ))}
            </div>
        </div>
        <div className="container">
            <h3>職涯諮詢成功案例</h3>
            <div className="qa">
                <div className="img-block">
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo8.png" alt="photo" />
                </div>
                <div className="para-1 text-block">
                    在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效<span className="blue">突破原有的舒適圈</span>。
                </div>
                <div className="para-2 text-block">
                    <p>期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
                    <button className="readmore"><a href="./blog/page1">立即預約諮詢</a></button>
                </div>

            </div>
            <div className="respons">
                <div className="respon">
                    <div className="photo"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/people.png" alt="img" /></div>
                    <h4>無經驗到前端工程師 Offer</h4>
                    打造前端專案與履歷亮點
                    深度強化面試表現
                    <hr />
                    <button className="readmore"><a href="#">前往聆聽 podcast</a></button>
                </div>
                <div className="respon">
                    <div className="photo"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/people2.png" alt="img" /></div>
                    <h4>轉職迷茫到明確學習規劃</h4>
                    制訂階段性目標與時間安排
                    鼓勵參與前端社群或活動
                    <hr />
                    <button className="readmore"><a href="#">前往聆聽 podcast</a></button>
                </div>
                <div className="respon">
                    <div className="photo"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/people3.png" alt="img" /></div>
                    <h4>面試緊張到從容應對</h4>
                    透過面試模擬找出常犯的邏輯漏洞
                    討論遇到不熟悉議題時的回應方式
                    <hr />
                    <button className="readmore"><a href="#">前往聆聽 podcast</a></button>
                </div>
                <div className="respon">
                    <div className="photo"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/people4.png" alt="img" /></div>
                    <h4>面試緊張到從容應對</h4>
                    擬定進階框架或技術研究目標
                    培養跨團隊溝通與簡報能力
                    <hr />
                    <button className="readmore"><a href="#">前往聆聽 podcast</a></button>
                </div>
            </div>
        </div>
        <div className="news">
            <div className="news-img">
                <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo9.png" alt="img" height="100%" />
            </div>
            <div className="news-block">
                <div className="news-sub">
                    <h3>訂閱電子報</h3>
                    <p>立即訂閱，搶先掌握<span className="blue">前端 x 職涯</span>的獨家資訊！</p>
                    <div><input type="text" id="name" placeholder="請輸入您的大名" /></div>
                    <div><input type="mail" id="email" placeholder="請輸入您的電子信箱" /></div>
                </div>
            </div>
        </div>
        <div className="container contact">
            <h3>與我聯繫</h3>
            <div className="contacts">alysewang@hexschool.com 合作洽談</div>
            <div className="contacts"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon.png" alt="icon" /> Youtube 職涯諮詢室</div>
            <div className="contacts"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-1.png" alt="icon" /> podcast 職涯諮詢室</div>
            <div className="contacts"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-2.png" alt="icon" />Facebook 前端社群</div>
            <div className="contacts"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/icons8-linkedin.png" alt="icon" />linkdin 職涯交流</div>
            <div className="contacts"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-3.png" alt="icon" /> Instagram 日常分享</div>
        </div>
    </>

}