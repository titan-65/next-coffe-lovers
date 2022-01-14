import Head from 'next/head'
import CoffeeCard from '../components/CoffeeCard'
import Hero from '../components/Hero'
import { data } from '../data/data'
// import styles from '../styles/Home.module.css'

export default function Home() {

  const onClick = () => { 
    console.log('Clicked')

  }
  return (
    <div className="container mx-auto">
      <Head>
        <title>Coffee Lovers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Coffee Lovers"
        addTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <section className="text-gray-600 body-font bg-blue-700">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">
              Flair Coffee
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Coffee Locations
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {data.map((item, index) => (
              <CoffeeCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
    // <div classNameName={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main classNameName={styles.main}>
    //     <h1 classNameName={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p classNameName={styles.description}>
    //       Get started by editing{' '}
    //       <code classNameName={styles.code}>pages/index.js</code>
    //     </p>

    //     <div classNameName={styles.grid}>
    //       <a href="https://nextjs.org/docs" classNameName={styles.card}>
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" classNameName={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         classNameName={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         classNameName={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer classNameName={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" classNameName={styles.logo} />
    //     </a>
    //   </footer>
    // </div>
  )
}
