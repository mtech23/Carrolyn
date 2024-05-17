import React, { useState, useEffect } from "react";
import LayoutTheme from "../Layout";
import { SubHeader } from "../../components/SubHeader";
import dogBanner from "/images/gallery-dog2.png";
import { Link } from "react-router-dom";
import BannerImage from "/images/hero-bg.png";

import {
  facebookIcon,
  twitterIcon,
  instaIcon,
  linkedinIcon,
  scrollIcon,
} from "../../../public/images";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const apiUrl = "https://carolynntucciarone.com/admin/wp-json/wp/v2/posts/";
    document.querySelector(".loaderBox").classList.add("d-block");

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Fetch and attach featured images for each post
        const fetchFeaturedImages = data.map((post) => {
          if (post.featured_media) {
            return fetch(
              `https://carolynntucciarone.com/admin/wp-json/wp/v2/media/${post.featured_media}`
            )
              .then((response) => response.json())
              .then((mediaData) => {
                return {
                  ...post,
                  featuredImageUrl: mediaData.source_url,
                };
              });
          } else {
            return { ...post, featuredImageUrl: null };
          }
        });

        Promise.all(fetchFeaturedImages)
          .then((postsWithFeaturedImages) => {
            document.querySelector(".loaderBox").classList.remove("d-block");
            setPosts(postsWithFeaturedImages);
          })
          .catch((error) => {
            console.error("Error fetching featured images:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <LayoutTheme>
      <SubHeader name="Blogs" img={BannerImage} subHeading="our blogs" />
      <div className="blogListing">
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4">
              <div className="blogBox">
                {post.featuredImageUrl && (
                  <img src={post.featuredImageUrl} alt={post.title.rendered} />
                )}
                <div className="blogBox_content">
                  <span className="blog_date">{post?.date}</span>
                  <h4>{post.title.rendered}</h4>
                  <div
                    className="blogContent"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <div className="readMore">
                    <Link to={`/blogs/${post.slug}/${post.id}`} className="btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="loaderBox">
          <div class="spinner"></div>
        </div>
      </div>
    </LayoutTheme>
  );
};

export default BlogPosts;
