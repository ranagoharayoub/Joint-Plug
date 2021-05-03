import React from 'react'
import './Blog.css'

function Blog() {
    return (
        <div className="blog-div">
            <div className="blog-heading">
                <p>BLOGS</p>
            </div>
            <div className="joined">
                <div className="blog-column-left">
                    <div className="blog-image">
                        <img className="photo" src="/img/blog-post-01.jpg" alt="network error"></img>
                    </div>
                    <div className="blog-title">
                        <p>LIFESTYLE</p>
                    </div>
                    <div className="blog-quote">
                        <a href="http://jointplug.com/post-details.html"><p>Best Template Website For HTML CSS</p></a>
                    </div>
                    <div className="blog-details">
                        <a className="blog-details-1" href="http://jointplug.com/post-details.html"><p>Admin</p></a>
                        <a className="blog-details-2" href="http://jointplug.com/post-details.html"><p>May 31, 2020</p></a>
                        <a className="blog-details-3" href="http://jointplug.com/post-details.html"><p>12 Comments</p></a>
                    </div>
                    <div className="blog-description"><p>Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. Contact TemplateMo for more info. Thank you.</p></div>
                    <div className="tags">
                        <div className="blog-tags-1"><a href="http://jointplug.com/blog#" ><p>Beauty</p></a></div>
                        <div className="blog-tags-2"><a href="http://jointplug.com/blog#"><p>Nature</p></a></div>
                        <div className="blog-tags-facebook"><a href="http://jointplug.com/blog#"><p>Facebook</p></a></div>
                        <div className="blog-tags-twitter"><a href="http://jointplug.com/blog#"><p>Twitter</p></a></div>
                    </div>
                </div>
                <div className="blog-column-right">
                    <div className="blog-search">
                        <input className="search-box" type="text" placeholder="Type to search"></input>
                            <a href="http://jointplug.com/post-details.html"><i class="fas fa-search"></i></a>
                    </div>
                    <div className="recent-post">
                        <p>RECENT POSTS</p>
                    </div>
                    <div className="text-1"><h3>Vestibulum id turpis porttitor sapien facilisis scelerisque</h3><a href="http://jointplug.com/post-details.html"><p>May 31, 2020</p></a></div>
                    <div className="text-2"><h3>Suspendisse et metus nec libero ultrices varius eget in risus</h3><a href="http://jointplug.com/post-details.html"><p>May 28, 2020</p></a></div>
                    <div className="text-3"><h3>Swag hella echo park leggings, shaman cornhole ethical coloring</h3><a href="http://jointplug.com/post-details.html"><p>May 14, 2020</p></a></div>
                </div>
            </div>
        </div>
    )
}

export default Blog
