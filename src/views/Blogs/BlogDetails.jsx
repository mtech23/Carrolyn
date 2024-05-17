import { React, useEffect, useState } from 'react'
import LayoutTheme from '../Layout'
import { SubHeader } from '../../components/SubHeader'
import dogBanner from '/images/gallery-dog2.png'
import BannerImage from "/images/hero-bg.png";
import { useNavigate, useParams } from 'react-router-dom'


export const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [blogDetail, setBlogDetail] = useState({});

    useEffect(() => {
        const apiDetailUrl = `https://carolynntucciarone.com/admin/wp-json/wp/v2/posts/${id}`;
        document.querySelector('.loaderBox').classList.add('d-block');
        fetch(apiDetailUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setBlogDetail(data);  // Update the state with the fetched data

                if (data.featured_media) {
                    fetch(`https://carolynntucciarone.com/admin/wp-json/wp/v2/media/${data.featured_media}`)
                        .then(response => response.json())
                        .then(mediaData => {
                            // Update the state with the featured image URL
                            setBlogDetail(prevState => ({
                                ...prevState,
                                featuredImageUrl: mediaData.source_url
                            }));
                           
                        });
                } else {
                    // Update the state when there's no featured media
                    
                    setBlogDetail(prevState => ({
                        ...prevState,
                        featuredImageUrl: null
                    }));
                }
                document.querySelector('.loaderBox').classList.remove('d-block');
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, [id]);  // Include 'id' in the dependency array
    return (
        <LayoutTheme>
            <SubHeader
                name='Blog Detail'
                img={BannerImage}
                
            />

            <div className='blogDetails'>
                <div className="row">
                    <div className='col-md-9'>
                        <div className="blogContent">
                            {/* Render your blog detail content */}
                            <h1 dangerouslySetInnerHTML={{ __html: blogDetail.title?.rendered }} />
                            <div dangerouslySetInnerHTML={{ __html: blogDetail.content?.rendered }} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="featuredImage">
                            {/* Render your featured image */}
                            {blogDetail.featuredImageUrl && (
                                <img src={blogDetail.featuredImageUrl} alt="Featured" />
                            )}
                        </div>
                    </div>



                </div>
                <div className="loaderBox">
                    <div class="spinner"></div>
                </div>
            </div>
        </LayoutTheme>
    )
}
