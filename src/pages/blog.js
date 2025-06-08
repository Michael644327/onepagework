import React from "react";
import blogArticle from "./data/article.json"
import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <>
            <div className="wide-section">
                <div className="top-title">
                    <div className="title-block title-img">
                        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/Hero%20Section.png" alt="img" width="100%" />
                    </div>
                    <div className="title-block title-text">
                        <h3>BLOG</h3>
                        <div>前端工程師 & 職涯諮詢師</div>
                    </div>
                </div>
                <div className="top-title">
                    <div className="title-block img-block">
                        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/blog/About%20Section.png" alt="img" width="100%" />
                    </div>
                    <div className="title-block">
                        <div className="section">
                            <div className="article">
                                <div className="date">2024/10/11</div>
                                <div className="tags">#React #入門基礎 </div>
                                <h3>React 入門不再迷惘：三步驟帶你上手核心概念</h3>
                                <p className="describe">嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！</p>
                            </div><Link className="readmore" to="/blog/page1">閱讀內文</Link></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="searchbar">
                    <input type="text" className="searchbox" placeholder="搜尋你感興趣的文章" />
                </div>
                <div className="blogs">
                    {blogArticle.map((v, i) => (
                        <div className="article" key={v.id}>
                            <img src={v.image} alt="lesson-photo" />
                            <div className="article-title">
                                <div className="date">{v.data}</div>
                                <div className="tags">{v.tag} {v.pop ? <span className="pop">人氣文章</span> : ""}</div>
                                <h3 className="article-title">{v.title}</h3>
                                <p className="describe">{v.describe}</p>
                            </div>
                            <Link className="readmore" to="/blog/page1">閱讀內文</Link>
                        </div>
                    ))}
                </div>
                <ul className="pagination">
                    <li className="arrow">
                        <Link href="#">&lt;</Link>
                    </li>
                    <li className="page active">
                        <Link to="#">1</Link>
                    </li>
                    <li className="page">
                        <Link to="#">2</Link>
                    </li>
                    <li className="page">
                        <Link to="#">3</Link>
                    </li>
                    <li className="page">
                        <Link to="#">4</Link>
                    </li>
                    <li className="page">
                        <Link to="#">5</Link>
                    </li>
                    <li className="dots">
                        <Link to="#">...</Link>
                    </li>
                    <li className="arrow">
                        <Link to="#">&gt;</Link>
                    </li>
                </ul>

            </div>
        </>
    );
}