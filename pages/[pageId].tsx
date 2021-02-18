import { domain, isDev } from 'lib/config'

import { NotionPage } from 'components'
import React from 'react'
import { getSiteMaps } from 'lib/get-site-maps'
import { resolveNotionPage } from 'lib/resolve-notion-page'

export const getStaticProps = async (context) => {
  const rawPageId = context.params.pageId as string

  try {
    if (rawPageId === 'sitemap.xml' || rawPageId === 'robots.txt') {
      return {
        redirect: {
          destination: `/api/${rawPageId}`
        }
      }
    }

    const props = await resolveNotionPage(domain, rawPageId)

    if (props.error) {
      if (props.error.statusCode === 404) {
        return { notFound: true }
      }
    }

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, rawPageId, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true
    }
  }

  const siteMaps = await getSiteMaps()

  const ret = {
    paths: siteMaps.flatMap((siteMap) =>
      Object.keys(siteMap.canonicalPageMap).map((pageId) => ({
        params: {
          pageId
        }
      }))
    ),
    // paths: [],
    fallback: true
  }

  console.log(ret.paths)
  return ret
}

export default function NotionDomainDynamicPage(props) {
  return <NotionPage {...props} />
}
