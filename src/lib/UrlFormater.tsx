function UrlFormater(url: string) {
  if (url && process.env.NODE_ENV === "production") {
    return `https://drylrys08.github.io/erth-liner/${url}`;
  }
  return url;
}

export default UrlFormater;
