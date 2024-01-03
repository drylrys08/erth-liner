export default function myImageLoader({ src, width, quality }:any) {
    return `https://drylrys08.github.io/erth-liner/${src}?w=${width}&q=${quality || 75}`
  }