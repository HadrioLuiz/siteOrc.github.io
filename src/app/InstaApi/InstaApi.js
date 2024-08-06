"use client"

import axios from "axios";

const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

async function fetchInstagramData() {
  try {
    const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${token}`);
    console.log('Instagram Data:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Instagram data:', error.response ? error.response.data : error.message);
    return [];
  }
}

export default fetchInstagramData;
