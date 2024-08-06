"use client"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fetchInstagramData from '@/app/InstaApi/InstaApi';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
    weight: '800',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap'
});

const InstagramCarousel = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
          try {
            const data = await fetchInstagramData();
            console.log('Fetched Instagram Data:', data); 
            setPosts(data || []);
          } catch (error) {
            console.error('Error fetching Instagram data:', error);
            setPosts([]);
          }
        }
        getData();
      }, []);

    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className='bg-slate-400 overflow-hidden'>
            <Slider {...settings}>
                {posts.map(posts => (
                    <div key={posts.id} className='text-center pb-16 pt-10'>
                        {posts.media_type === 'IMAGE' && (
                            <img
                                src={posts.media_url}
                                alt={posts.caption}
                                className='ml-40 rounded-xl h-[550px] w-[1100px]' />
                        )}
                        {posts.media_type === 'VIDEO' && (
                            <video controls>
                                <source src={posts.media_url} type="video/mp4" />
                            </video>
                        )}
                        <div className='text-5xl mt-[-80px] text-[#f0f3df] p-0 text-left ml-52'>
                            <h1 className={open_sans.className}>{posts.caption}</h1>                   
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default InstagramCarousel;
