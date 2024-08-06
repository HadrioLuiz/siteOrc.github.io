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
            const data = await fetchInstagramData();
            setPosts(data);
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
                {posts.map(post => (
                    <div key={post.id} className='text-center pb-16 pt-10'>
                        {post.media_type === 'IMAGE' && (
                            <img
                                src={post.media_url}
                                alt={post.caption}
                                className='ml-40 rounded-xl h-[550px] w-[1100px]' />
                        )}
                        {post.media_type === 'VIDEO' && (
                            <video controls>
                                <source src={post.media_url} type="video/mp4" />
                            </video>
                        )}
                        <div className='text-5xl mt-[-80px] text-[#f0f3df] p-0 text-left ml-52'>
                            <h1 className={open_sans.className}>{post.caption}</h1>                   
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default InstagramCarousel;
