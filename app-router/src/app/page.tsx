'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <main className={styles.main}>
      {!session && <button onClick={() => signIn('google')}>Login with google</button>}

      <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      {session && (
        <p>
          Email: {session?.user?.email} | Name: {session?.user?.name}
        </p>
      )}
      {!session && <button onClick={() => signIn('github')}>Login with github</button>}

      {session && <button onClick={() => signOut()}>Sign out</button>}
    </main>
  )
}
