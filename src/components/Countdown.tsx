import React, { useEffect, useState } from 'react';
import styles from '../style/components/Countdown.module.css';

//variavel global para parar a execução do timer.
let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);


  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesLeft, minutesRigth] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true);  
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false)
    setTime(0.1 * 60);
  }

  //função de contagem do timer 
  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false)
    }
  }, [isActive, time] )

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRigth}</span>
        </div>
          <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRigth}</span>
        </div>
      </div>

      {hasFinished ? (
        <button 
          disabled
          className={styles.countdownButton}
        > 
          Ciclo Encerrado
        </button>
      ) : (
        <>
      {isActive ? (
        <button 
          onClick={resetCountdown}
          type='button' 
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
        > 
        Abandonar ciclo
        </button>
      ) : (
        <button 
          onClick={startCountdown}
          type='button' 
          className={styles.countdownButton}
        > 
         Iniciar ciclo
        </button>
      ) }
        </>
      )}

    </div>
  );
}

export default Countdown;