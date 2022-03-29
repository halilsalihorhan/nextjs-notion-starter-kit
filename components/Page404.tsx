import React from 'react'
import * as types from 'lib/types'

import Head from 'next/head'
import Link from 'next/link'
import { PageHead } from './PageHead'
import styles from './styles.module.css'
import { useRouter } from 'next/router'

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || 'Notion Page Not Found'
  const router = useRouter()

  React.useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Page Not Found</h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Make sure that Notion page &quot;{pageId}&quot; is publicly
                accessible.
              </p>
            )
          )}
          <Link href='/'>
            <a>
              <h1>Back to Home</h1>
              <h4>You will be redirected to homepage in 5 seconds.</h4>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <img
                src='/404.png'
                alt='404 Not Found'
                className={styles.errorImage}
              />
            </a>
          </Link>
        </main>
      </div>
    </>
  )
}
