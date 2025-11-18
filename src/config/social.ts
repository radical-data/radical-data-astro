// src/config/social.ts

type SocialKey =
  | "twitter"
  | "instagram"
  | "youtube"
  | "linkedin"
  | "tiktok"
  | "github";

interface SocialDefinition {
  handle: string; // Only the variable account identifier
  baseUrl: string; // Fixed base, including any path prefix
  icon: string; // Icon key for <Icon />
  showInNav: boolean;
  showInFooter: boolean;
  url: string; // Derived: `${baseUrl}/${handle}`
}

function defineSocial(opts: {
  handle: string;
  baseUrl: string;
  icon: string;
  showInNav?: boolean;
  showInFooter?: boolean;
}): SocialDefinition {
  const { handle, baseUrl, icon, showInNav = true, showInFooter = true } = opts;
  return {
    handle,
    baseUrl,
    icon,
    showInNav,
    showInFooter,
    get url() {
      return `${baseUrl}/${handle}`;
    },
  };
}

export const SOCIAL: Record<SocialKey, SocialDefinition> = {
  twitter: defineSocial({
    handle: "radical_data",
    baseUrl: "https://twitter.com",
    icon: "twitter-logo",
  }),
  instagram: defineSocial({
    handle: "radical.data",
    baseUrl: "https://instagram.com",
    icon: "instagram-logo",
  }),
  youtube: defineSocial({
    handle: "@radicaldata", // YouTube's weird "@handle"
    baseUrl: "https://www.youtube.com",
    icon: "youtube-logo",
  }),
  linkedin: defineSocial({
    handle: "radicaldata",
    baseUrl: "https://www.linkedin.com/company",
    icon: "linkedin-logo",
  }),
  tiktok: defineSocial({
    handle: "@radical_data",
    baseUrl: "https://www.tiktok.com",
    icon: "tiktok-logo",
  }),
  github: defineSocial({
    handle: "radical-data",
    baseUrl: "https://github.com",
    icon: "github-logo",
  }),
};

export const SOCIAL_FOR_NAV = Object.values(SOCIAL).filter((s) => s.showInNav);

export const SOCIAL_FOR_FOOTER = Object.values(SOCIAL).filter(
  (s) => s.showInFooter
);
