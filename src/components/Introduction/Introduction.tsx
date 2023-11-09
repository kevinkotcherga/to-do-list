import desktopApp from '../../assets/desktop-app.png';
import mobileApp from '../../assets/mobile-app.png';

import { Player } from '@lottiefiles/react-lottie-player';

const Introduction = () => {
  return (
    <section className='introduction container'>
      <Player src='https://lottie.host/e41c04fa-d681-4d19-81cc-937b20345bcc/hpS7ozT2SP.json' loop
        autoplay speed={0.6} style={{ marginTop: "-150px", height: "800px" }} />
      <div className="introduction__images">
        <img className="introduction__desktop-image" src={desktopApp} />
        <div className="introduction__mobile">
          <img className="introduction__mobile-image" src={mobileApp} />
          <div className="introduction__mobile-top"></div>
        </div>
      </div>
    </section >
  );
};

export default Introduction;
