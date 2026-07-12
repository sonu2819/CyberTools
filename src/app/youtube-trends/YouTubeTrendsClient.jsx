"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function YouTubeTrendsClient() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("IN");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    if (!query.trim()) return;

    setLoading(true);

    const res = await fetch(
      `/api/youtube-trends?q=${encodeURIComponent(query)}&country=${country}`
    );

    const data = await res.json();

    setVideos(data.videos || []);

    setLoading(false);
  };

  return (
    <main className="app tool-page">
      <Navbar />

      <section className="hero">
        <h1>YouTube Trend Finder</h1>

        <p>Discover trending YouTube videos by keyword.</p>
      </section>

      <section className="layout">
        <div className="card">

          <input
            type="text"
            placeholder="Search niche..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

         <select
  value={country}
  onChange={(e) => setCountry(e.target.value)}
>
  <option value="IN">🇮🇳 India</option>
  <option value="US">🇺🇸 United States</option>
  <option value="GB">🇬🇧 United Kingdom</option>
  <option value="CA">🇨🇦 Canada</option>
  <option value="AU">🇦🇺 Australia</option>
  <option value="JP">🇯🇵 Japan</option>
  <option value="KR">🇰🇷 South Korea</option>
  <option value="DE">🇩🇪 Germany</option>
  <option value="FR">🇫🇷 France</option>
  <option value="IT">🇮🇹 Italy</option>
  <option value="ES">🇪🇸 Spain</option>
  <option value="BR">🇧🇷 Brazil</option>
  <option value="MX">🇲🇽 Mexico</option>
  <option value="AR">🇦🇷 Argentina</option>
  <option value="RU">🇷🇺 Russia</option>
  <option value="TR">🇹🇷 Türkiye</option>
  <option value="SA">🇸🇦 Saudi Arabia</option>
  <option value="AE">🇦🇪 United Arab Emirates</option>
  <option value="EG">🇪🇬 Egypt</option>
  <option value="ZA">🇿🇦 South Africa</option>
  <option value="NG">🇳🇬 Nigeria</option>
  <option value="PK">🇵🇰 Pakistan</option>
  <option value="BD">🇧🇩 Bangladesh</option>
  <option value="LK">🇱🇰 Sri Lanka</option>
  <option value="NP">🇳🇵 Nepal</option>
  <option value="ID">🇮🇩 Indonesia</option>
  <option value="MY">🇲🇾 Malaysia</option>
  <option value="SG">🇸🇬 Singapore</option>
  <option value="TH">🇹🇭 Thailand</option>
  <option value="PH">🇵🇭 Philippines</option>
  <option value="VN">🇻🇳 Vietnam</option>
</select>

          <button
            className="main-btn"
            onClick={search}
            disabled={loading}
          >
            {loading ? "Searching..." : "Find Trends"}
          </button>

          <div className="video-list">
            {videos.map((video) => (
              <div key={video.videoId} className="video-card">

                <img
                  src={video.thumbnail}
                  alt={video.title}
                />

                <a
                  className="video-title"
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>{video.title}</h3>
                </a>

                <p>{video.channel}</p>

              </div>
            ))}
          </div>

        </div>
      </section>



      <section className="info-section">

  <h2>What is a YouTube Trend Finder?</h2>

  <p>
    A YouTube Trend Finder helps creators discover popular videos and trending
    content within a specific niche. Search any topic, choose a country, and
    instantly explore videos that are performing well on YouTube. It is a quick
    way to research ideas, analyze competitors and find inspiration for your
    next upload.
  </p>

  <h2>Why Use CyberTools YouTube Trend Finder?</h2>

  <ul>
    <li>Search trending YouTube videos by keyword</li>
    <li>Filter results by country</li>
    <li>Discover popular creators in your niche</li>
    <li>Find content ideas before creating videos</li>
    <li>Research competitors quickly</li>
    <li>Works directly in your browser</li>
    <li>Fast, simple and free to use</li>
    <li>No registration required</li>
  </ul>

  <h2>How to Use the Tool</h2>

  <ol>
    <li>Enter a niche or keyword.</li>
    <li>Select your preferred country.</li>
    <li>Click <strong>Find Trends</strong>.</li>
    <li>Browse the results and open any video by clicking its title.</li>
  </ol>

  <h2>Frequently Asked Questions</h2>

  <h3>What does this tool do?</h3>

  <p>
    It searches YouTube for popular videos related to your keyword, helping you
    discover trending content and creators in your niche.
  </p>

  <h3>Can I search videos from different countries?</h3>

  <p>
    Yes. Select a country from the dropdown before searching to get results
    relevant to that region.
  </p>

  <h3>Do I need a YouTube account?</h3>

  <p>
    No. Anyone can use the tool without signing in to YouTube.
  </p>

  <h3>Is this YouTube Trend Finder free?</h3>

  <p>
    Yes. CyberTools YouTube Trend Finder is completely free and works directly
    in your browser.
  </p>

</section>

      <Footer />
    </main>
  );
}