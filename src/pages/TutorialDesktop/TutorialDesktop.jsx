import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './tutorialDesktop.css';
import tutorial from '../../utils/tutorial';
import Siderbars from '../../commons/Siderbars/Siderbars.jsx';

const TutorialDesktop = () => {
  const { t, i18n } = useTranslation();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    if (user) {
      i18n.changeLanguage(user?.userData?.language);
    }
  }, [user]);

  return (
    <div className="father">
      <div className="menu col-1">
        <Siderbars dropdown={false} adm={false} />
      </div>
      <div className="children">
        <div className="container fix bodyPaging">
          <div className="howToPlay">{t('howToPlay')}</div>
          <hr />
          <div>
            <div className="tutorialDiv">
              <div className="innerDivText">{t('tuto1')}</div>
              <div className="innerDivPhoto">
                <img className="img" src={tutorial[0].img} alt="tutorialImg" />
              </div>
            </div>
            <hr />
          </div>
          <div>
            <div className="tutorialDiv">
              <div className="innerDivText">{t('tuto2')}</div>
              <div className="innerDivPhoto">
                <img className="img" src={tutorial[1].img} alt="tutorialImg" />
              </div>
            </div>
            <hr />
          </div>
          <div>
            <div className="tutorialDiv">
              <div className="innerDivText">{t('tuto3')}</div>
              <div className="innerDivPhoto">
                <img className="img" src={tutorial[2].img} alt="tutorialImg" />
              </div>
            </div>
            <hr />
          </div>
          <div>
            <div className="tutorialDiv">
              <div className="innerDivText">{t('tuto4')}</div>
              <div className="innerDivPhoto">
                <img className="img" src={tutorial[3].img} alt="tutorialImg" />
              </div>
            </div>
            <hr />
          </div>
          <div>
            <div className="tutorialDiv">
              <div className="innerDivText">{t('tuto5')}</div>
              <div className="innerDivPhoto">
                <img className="img" src={tutorial[4].img} alt="tutorialImg" />
              </div>
            </div>
            <hr />
          </div>
          <div>
            <div className="tutorialDiv">
              <div className="innerDivText">{t('tuto6')}</div>
              <div className="innerDivPhoto">
                <img className="img" src={tutorial[5].img} alt="tutorialImg" />
              </div>
            </div>
            <hr />
          </div>
          <div>
            <div className="tutorialDiv">
              <div className="innerDivText">{t('tuto7')}</div>
              <div className="innerDivPhoto">
                <img className="img" src={tutorial[6].img} alt="tutorialImg" />
              </div>
            </div>
            <hr />
          </div>
          <div>
            <div className="tutorialDiv">
              <div className="innerDivText">{t('tuto8')}</div>
              <div className="innerDivPhoto">
                <img className="img" src={tutorial[7].img} alt="tutorialImg" />
              </div>
            </div>
            <hr />
          </div>
          <div>
            <div className="tutorialDiv">
              <div className="innerDivText">{t('tuto9')}</div>
              <div className="innerDivPhoto">
                <img className="img" src={tutorial[8].img} alt="tutorialImg" />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialDesktop;
