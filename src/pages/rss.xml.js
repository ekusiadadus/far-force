import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "絶望ドメイン | Blog",
    description: "絶望ドメイン",
    site: "https://tokyonight.dev",
    items: import.meta.glob("./**/*.md"),
    customData: `<language> ja </language>`,
  });
