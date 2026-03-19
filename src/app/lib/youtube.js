export async function getChannelVideos() {
  const channelId = process.env.YOUTUBE_CHANNEL_ID
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    throw new Error('Missing YouTube API key in environment variables');
  }

  // Step 1: Get uploads playlist ID
  const channelRes = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`,
    { cache: 'force-cache' } // optional: cache this forever if channel rarely changes
  );

  if (!channelRes.ok) {
    throw new Error(`Failed to fetch channel: ${channelRes.status}`);
  }

  const channelData = await channelRes.json();

  if (!channelData.items?.length) {
    throw new Error('Channel not found');
  }

  const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

  // Step 2: Get videos (add pagination later if needed)
  const playlistRes = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${uploadsPlaylistId}&key=${apiKey}`,
    { next: { revalidate: 3600 } } // revalidate every hour (ISR style)
  );

  if (!playlistRes.ok) {
    throw new Error(`Failed to fetch playlist items: ${playlistRes.status}`);
  }

  const playlistData = await playlistRes.json();

  return playlistData.items || [];
}