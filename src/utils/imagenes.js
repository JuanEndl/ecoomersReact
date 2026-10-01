const images = import.meta.glob(
  "../assets/img/**/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export const getImage = (path) => {
  const imagePath = path.replace("/src/assets", "..");

  return images[imagePath];
};