/* eslint-disable radix */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const CountDown = ({ date }) => {
  const { t } = useTranslation();
  const [countDown, setCountDown] = useState('');
  const matchDate = new Date(`${date}`);

  const formatTime = mss => {
    const days = parseInt(mss / (1000 * 60 * 60 * 24));
    const hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = parseInt((mss % (1000 * 60)) / 1000);
    if (days === 0) {
      return `${t('youHave')} ${hours}:${minutes}:${seconds} ${t(
        'leftToPlay',
      )}`;
    }
    return `${t('youHave')} ${days}d ${hours}:${minutes}:${seconds} ${t(
      'leftToPlay',
    )}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = matchDate.getTime() - now.getTime() - 7200000; //  difference - 2 hs
      const count = formatTime(difference);
      setCountDown(count);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <>{countDown}</>;
};

export default CountDown;
