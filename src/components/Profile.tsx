import React from 'react';
import style from '../style/components/Profile.module.css';

const Profile = () => {
  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/wendellima94.png" alt="Wendel de lima"/>
      <div>
        <strong>Wendel de Lima</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;