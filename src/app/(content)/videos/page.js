import React from 'react';
import { getChannelVideos } from '@/app/lib/youtube';
import VideosGrid from '@/components/videos/VideosGrid';

export const metadata = {
  title: 'GMT: Coverage + Videos',
};

export const revalidate = 43200;

export default async function Videos() {
  let videos = [];
  let hasError = false;

  try {
    videos = await getChannelVideos();
  } catch (error) {
    console.error('Unable to load YouTube videos:', error);
    hasError = true;
  }

  return (
    <section className="videos-page">
      <div className="videos-shell">
        <div className="videos-header reveal">
          <div className="section-label">GMT Channel</div>
          <h1 className="videos-title">
            Fresh <span>coverage</span>, featured rounds, and behind-the-scenes drops.
          </h1>
          <p className="videos-copy">
            Catch the latest tournament footage, player features, and original GMT stories from
            the course and beyond.
          </p>
          <div className="videos-actions">
            <a
              href="https://www.youtube.com/@GreatestMediaTeam"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Visit the Channel
            </a>
            <a
              href="https://www.youtube.com/@GreatestMediaTeam/videos"
              className="btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Watch All Videos
            </a>
          </div>
        </div>

        {hasError ? (
          <div className="shop-empty">
            <span className="shop-empty-label">Video Feed Offline</span>
            <h2 className="shop-empty-title">We couldn&apos;t load the latest GMT videos.</h2>
            <p className="shop-empty-copy">
              YouTube may be temporarily unavailable. Please try again shortly or visit the
              channel directly.
            </p>
          </div>
        ) : (
          <VideosGrid videos={videos} />
        )}

        {!hasError && videos.length === 0 ? (
          <div className="shop-empty">
            <span className="shop-empty-label">No Videos Yet</span>
            <h2 className="shop-empty-title">The channel is between uploads right now.</h2>
            <p className="shop-empty-copy">
              Check back soon for fresh coverage, new features, and event highlights.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
