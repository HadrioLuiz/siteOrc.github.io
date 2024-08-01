"use client"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
    weight: '800',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap'
});

export const fetchInstagramPosts = async () => {
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`;

    try {
        const response = await axios.get(url);
        return response.data.data; // Retorna os dados das publicações
    } catch (error) {
        console.error('Erro ao buscar dados do Instagram:', error);
        return [];
    }
};


const InstagramCarousel = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchInstagramPosts();
            setPosts(data);
        };
        getPosts();
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='bg-slate-400'>
            {posts.length > 0 ? (
                <Slider {...settings}>
                    {posts.map(post => (
                        <div key={post.id} className='text-center pb-16 pt-10'>
                            {post.media_type === 'IMAGE' && (
                                <img
                                    src={post.media_url}
                                    alt={post.caption}
                                    className='ml-40 rounded-xl h-[550px] w-[1100px]'
                                />
                            )}
                            {post.media_type === 'VIDEO' && (
                                <video controls className='ml-40 rounded-xl h-[550px] w-[1100px]'>
                                    <source src={post.media_url} type="video/mp4" />
                                </video>
                            )}
                            <div className='text-5xl mt-[-80px] text-[#f0f3df] p-0 text-left ml-64'>
                                <h1 className={open_sans.className}>{post.caption}</h1>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default InstagramCarousel;

