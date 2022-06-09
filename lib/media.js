import { getStrapiURL } from './api';

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
}

export function getMediaFollowSize(media) {
  if (media) {
    const { url } = media;
    const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
    return imageUrl;
  }
}
