import React from 'react';
import style from '../style/components/CompletedChallenges.module.css';

const CompletedChallenges = () => {
  return (
    <div className={style.CompletedChallengesContainer}>
      <span>Desafios completos</span>
      <span>00</span>
    </div>
  )
}

export default CompletedChallenges