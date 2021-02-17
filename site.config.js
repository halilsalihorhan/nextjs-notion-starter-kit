module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: process.env.NEXT_PUBLIC_rootNotionPageId,

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: process.env.NEXT_PUBLIC_rootNotionSpaceId || null,

  // basic site info (required)
  name: process.env.NEXT_PUBLIC_name,
  domain: process.env.NEXT_PUBLIC_domain,
  author: process.env.NEXT_PUBLIC_author,

  // open graph metadata (optional)
  description: process.env.NEXT_PUBLIC_description,
  socialImageTitle: process.env.NEXT_PUBLIC_socialImageTitle,
  socialImageSubtitle: process.env.NEXT_PUBLIC_socialImageSubtitle,

  // social usernames (optional)
  twitter: process.env.NEXT_PUBLIC_twitter,
  github: process.env.NEXT_PUBLIC_github,
  linkedin: process.env.NEXT_PUBLIC_linkedin,

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: process.env.NEXT_PUBLIC_defaultPageIcon || null,
  defaultPageCover: process.env.NEXT_PUBLIC_defaultPageCover || null,
  defaultPageCoverPosition: JSON.parse(
    process.env.NEXT_PUBLIC_defaultPageCoverPosition
  ),

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: process.env.NEXT_PUBLIC_imageCDNHost || null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: process.env.NEXT_PUBLIC_utterancesGitHubRepo || null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: JSON.parse(process.env.NEXT_PUBLIC_pageUrlOverrides)
}
