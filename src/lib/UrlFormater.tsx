function UrlFormater(url: string) {
  if (url && process.env.NODE_ENV === "production") {
    return `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${url}`;
  }
  return url;
}

export default UrlFormater;
