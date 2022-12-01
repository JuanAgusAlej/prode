import React, { useEffect, useState } from 'react';
import './prizes.css';
import { useSelector } from 'react-redux';

const Prizes = () => {
  const tournament = useSelector((state) => state.tournament.tournament);
  const [prizes, setPrizes] = useState([]);
  useEffect(() => {
    if (tournament) {
      setPrizes(tournament.prizes);
    }
  }, [tournament]);

  return (
    <div className='bodyPaging'>
      {prizes.length ? (
        <div className='Price container'>
          <div>
            <img
              className='cup'
              src='https://images.vexels.com/media/users/3/210857/isolated/preview/ce92c9e49422ae82a9f2125d5b3713c0-premio-copa-primer-piso.png'
              alt=''
            />
          </div>
          <div className='firstPriceText'>{prizes[0].prize}!!</div>
          <div>
            <img className='img' src={prizes[0].img} alt='firstPrice' />
          </div>
          <div>
            <img
              className='secondPrizeMedal'
              src='https://cdn-icons-png.flaticon.com/512/1021/1021217.png'
              alt=''
            />
          </div>
          <div className='secondPriceText'>{prizes[1].prize}!!</div>
          <div>
            <img className='img2' src={prizes[1].img} alt='firstPrice' />
          </div>
          <div>
            <img
              className='thirdPrizeMedal'
              src='https://cdn-icons-png.flaticon.com/512/1435/1435687.png'
              alt=''
            />
          </div>
          <div className='thirdPriceText'>{prizes[2].prize}!!</div>
          <div>
            <img className='img3' src={prizes[2].img} alt='firstPrice' />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Prizes;
