import Head from 'next/head';

import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import style from '../style/pages/Home.module.css'

export default function Home() {
  return (   
    <div className={style.container}>
      <Head>
        <title>Moveit</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
