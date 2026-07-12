import { NextResponse } from "next/server";

export async function GET(request) {

  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q");
  const country = searchParams.get("country") || "IN";

  let url;

  if (q) {
    url =
      `https://www.googleapis.com/youtube/v3/search` +
      `?part=snippet` +
      `&type=video` +
      `&maxResults=10` +
      `&regionCode=${country}` +
      `&q=${encodeURIComponent(q)}` +
      `&key=${process.env.YOUTUBE_API_KEY}`;
  } else {
    url =
      `https://www.googleapis.com/youtube/v3/videos` +
      `?part=snippet` +
      `&chart=mostPopular` +
      `&maxResults=10` +
      `&regionCode=${country}` +
      `&key=${process.env.YOUTUBE_API_KEY}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  const videos = (data.items || []).map((item) => ({
    videoId: item.id.videoId || item.id,
    title: item.snippet.title,
    channel: item.snippet.channelTitle,
    thumbnail: item.snippet.thumbnails.high.url,
  }));

  return NextResponse.json({ videos });
}