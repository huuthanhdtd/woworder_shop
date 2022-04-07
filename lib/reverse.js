export function reverse(data) {
  const rs = data.sort(function (a, b) {
    return new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt);
  });
  return rs;
}
