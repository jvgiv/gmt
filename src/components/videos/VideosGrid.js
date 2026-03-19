'use client';

import { useState } from 'react';
import Image from 'next/image';

const INITIAL_VISIBLE_COUNT = 9;
const LOAD_MORE_COUNT = 9;

export default function VideosGrid({ videos }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const visibleVideos = videos.slice(0, visibleCount);
  const hasMore = visibleCount < videos.length;

  return (
    <>
      <div className="videos-grid">
        {visibleVideos.map((item) => {
          const { snippet } = item;
          const videoId = snippet.resourceId.videoId;
          const thumbnail =
            snippet.thumbnails.maxres?.url ||
            snippet.thumbnails.high?.url ||
            snippet.thumbnails.medium?.url;

          return (
            <a
              key={videoId}
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noreferrer"
              className="video-card reveal visible"
            >
              <div className="video-card-media">
                {thumbnail ? (
                  <Image
                    src={thumbnail}
                    alt={snippet.title}
                    className="video-card-image"
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                ) : (
                  <div className="video-card-fallback">GMT Video</div>
                )}
                <div className="video-card-overlay" />
                <div className="video-card-play">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="video-card-tag">Watch on YouTube</div>
              </div>

              <div className="video-card-body">
                <p className="video-card-date">
                  {new Date(snippet.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <h2 className="video-card-title">{snippet.title}</h2>
                <span className="shop-card-link">Play Video</span>
              </div>
            </a>
          );
        })}
      </div>

      {hasMore ? (
        <div className="videos-load-more">
          <button
            type="button"
            className="btn-secondary videos-load-more-button"
            onClick={() => setVisibleCount((current) => current + LOAD_MORE_COUNT)}
          >
            Load More
          </button>
        </div>
      ) : null}
    </>
  );
}
