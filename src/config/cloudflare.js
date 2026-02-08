export const CLOUDFLARE_CONFIG = {
  r2Endpoint: "https://pub-7b57a9f4d799487c9b7389d3540c7e2a.r2.dev",
};

// Helper function to generate Cloudflare R2 URL
export const getR2Url = (path) => {
  return `${CLOUDFLARE_CONFIG.r2Endpoint}/${path}`;
};
