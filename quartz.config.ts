import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "자유로운 기록 보관소",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://ryu8926.github.io/Jayuroun",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#f8fafc", // Slate 50
          lightgray: "#e2e8f0", // Slate 200
          gray: "#94a3b8", // Slate 400
          darkgray: "#475569", // Slate 600
          dark: "#1e293b", // Slate 800
          secondary: "#2563eb", // Blue 600
          tertiary: "#3b82f6", // Blue 500
          highlight: "rgba(59, 130, 246, 0.1)", // Blue 500 with opacity
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#0f172a", // Slate 900
          lightgray: "#1e293b", // Slate 800
          gray: "#475569", // Slate 600
          darkgray: "#cbd5e1", // Slate 30slate 300
          dark: "#f1f5f9", // Slate 100
          secondary: "#60a5fa", // Blue 400
          tertiary: "#3b82f6", // Blue 500
          highlight: "rgba(59, 130, 246, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
