import React from 'react'
import './News.css'

function News() {
    return (
        <div className="news-div">
            <div className="news-heading">
                <p>NEWS</p>
            </div>
            <div className="news-joined">
                <div className="news-column-left">
                    <div className="news-image">
                        <img className="news-photo" src="/img/images.png" alt='pic'></img>
                    </div>
                    <div className="news-title">
                        <p>LIFESTYLE</p>
                    </div>
                    <div className="news-quote">
                        <a href="http://jointplug.com/post-details.html"><p>Best Template Website For HTML CSS</p></a>
                    </div>
                    <div className="news-details">
                        <a className="news-details-1" href="http://jointplug.com/post-details.html"><p>Admin</p></a>
                        <a className="news-details-2" href="http://jointplug.com/post-details.html"><p>May 31, 2020</p></a>
                        <a className="news-details-3" href="http://jointplug.com/post-details.html"><p>12 Comments</p></a>
                    </div>
                    <div className="news-description"><p>Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. Contact TemplateMo for more info. Thank you.</p></div>
                    <div className="news-tags">
                        <div className="news-tags-1"><a href="http://jointplug.com/blog#" ><p>Beauty</p></a></div>
                        <div className="news-tags-2"><a href="http://jointplug.com/blog#"><p>Nature</p></a></div>
                        <div className="news-tags-facebook"><a href="http://jointplug.com/blog#"><p>Facebook</p></a></div>
                        <div className="news-tags-twitter"><a href="http://jointplug.com/blog#"><p>Twitter</p></a></div>
                    </div>
                </div>
                <div className="news-column-right">
                    <div className="news-search">
                        <input className="news-search-box" type="text" placeholder="Type to search"></input>
                            <a href="http://jointplug.com/post-details.html"><i class="fas fa-search"></i></a>
                    </div>
                    <div className="news-recent-post">
                        <p>RECENT POSTS</p>
                    </div>
                    <div className="news-text-1"><h3>Vestibulum id turpis porttitor sapien facilisis scelerisque</h3><a href="http://jointplug.com/post-details.html"><p>May 31, 2020</p></a></div>
                    <div className="news-text-2"><h3>Suspendisse et metus nec libero ultrices varius eget in risus</h3><a href="http://jointplug.com/post-details.html"><p>May 28, 2020</p></a></div>
                    <div className="news-text-3"><h3>Swag hella echo park leggings, shaman cornhole ethical coloring</h3><a href="http://jointplug.com/post-details.html"><p>May 14, 2020</p></a></div>
                </div>
            </div>
        </div>
    )
}

export default News
