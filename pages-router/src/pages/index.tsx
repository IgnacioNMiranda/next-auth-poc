import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!session && <button onClick={() => signIn('google')}>Login with google</button>}

        <div className={styles.center}>
          <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div>{' '}
        </div>
        {session && (
          <p>
            Email: {session?.user?.email} | Name: {session?.user?.name}
          </p>
        )}
        {!session && <button onClick={() => signIn('github')}>Login with github</button>}

        {session && <button onClick={() => signOut()}>Sign out</button>}
      </main>
    </>
  )
}
