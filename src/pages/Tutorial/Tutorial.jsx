import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './tutorial.css';
import tutorial from '../../utils/tutorial';

const Tutorial = () => {
  const { t, i18n } = useTranslation();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    if (user) {
      i18n.changeLanguage(user?.userData?.language);
    }
  }, [user]);

  return (
    <div className="container fix bodyPaging mt-2">
      <div className="howToPlayMobil">{t('howToPlayMobil')}</div>
      <hr />
      <div>
        <div className="tutorialDivMobil">
          <div className="innerDivTextMobil">{t('tuto1')}</div>
          <div className="innerDivPhotoMobil">
            <img className="img" src={tutorial[0].img} alt="tutorialImg" />
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="tutorialDivMobil">
          <div className="innerDivTextMobil">{t('tuto2')}</div>
          <div className="innerDivPhotoMobil">
            <img className="img" src={tutorial[1].img} alt="tutorialImg" />
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="tutorialDivMobil">
          <div className="innerDivTextMobil">{t('tuto3')}</div>
          <div className="innerDivPhotoMobil">
            <img className="img" src={tutorial[2].img} alt="tutorialImg" />
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="tutorialDivMobil">
          <div className="innerDivTextMobil">{t('tuto4')}</div>
          <div className="innerDivPhotoMobil">
            <img className="img" src={tutorial[3].img} alt="tutorialImg" />
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="tutorialDivMobil">
          <div className="innerDivTextMobil">{t('tuto5')}</div>
          <div className="innerDivPhotoMobil">
            <img className="img" src={tutorial[4].img} alt="tutorialImg" />
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="tutorialDivMobil">
          <div className="innerDivTextMobil">{t('tuto6')}</div>
          <div className="innerDivPhotoMobil">
            <img className="img" src={tutorial[5].img} alt="tutorialImg" />
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="tutorialDivMobil">
          <div className="innerDivTextMobil">{t('tuto7')}</div>
          <div className="innerDivPhotoMobil">
            <img className="img" src={tutorial[6].img} alt="tutorialImg" />
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="tutorialDivMobil">
          <div className="innerDivTextMobil">{t('tuto8')}</div>
          <div className="innerDivPhotoMobil">
            <img className="img" src={tutorial[7].img} alt="tutorialImg" />
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="tutorialDivMobil">
          <div className="innerDivTextMobil">{t('tuto9')}</div>
          <div className="innerDivPhotoMobil">
            <img className="img" src={tutorial[8].img} alt="tutorialImg" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Tutorial;
