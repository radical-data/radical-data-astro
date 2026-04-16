export const THEME_ORDER = [
  "Collective Intelligence",
  "Tools for Postcapitalism",
  "Tecnología Popular",
] as const;

export type ThemeName = (typeof THEME_ORDER)[number];

export const THEME_META: Record<
  ThemeName,
  { slug: string; description: string }
> = {
  "Collective Intelligence": {
    slug: "collective-intelligence",
    description:
      "Systems, methods and experiments for thinking, deciding and organising together.",
  },
  "Tools for Postcapitalism": {
    slug: "tools-for-postcapitalism",
    description:
      "Tools and infrastructures for cooperation, autonomy and life beyond extraction.",
  },
  "Tecnología Popular": {
    slug: "tecnologia-popular",
    description:
      "Community-rooted technology shaped through education, shared learning and collective practice.",
  },
};

export function isTheme(value: unknown): value is ThemeName {
  return typeof value === "string" && THEME_ORDER.includes(value as ThemeName);
}

export function getThemeMeta(theme: unknown) {
  if (!isTheme(theme)) return undefined;

  return THEME_META[theme];
}
