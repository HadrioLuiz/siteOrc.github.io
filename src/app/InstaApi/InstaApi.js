"use client"

import axios from "axios";

const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${token}`;

async function fetchInstagramData() {
  try {
    const response = await axios.get(url);
    console.log('Instagram Data:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Instagram data:', error.response ? error.response.data : error.message);
  }
}

export default fetchInstagramData;
