export const getNewImageUrl = (size, content) => {
  let https = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/`;
  let reg = new RegExp(https, 'g');
  return content.replace(
    reg,
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/${size}`
  );
};
