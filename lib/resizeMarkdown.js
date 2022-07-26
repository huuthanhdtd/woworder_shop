export const getNewImageUrl = (size, content) => {
  let https = `/uploads/`;
  let reg = new RegExp(https, 'g');
  return content.replace(
    reg,
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/${size}`
  );
};
