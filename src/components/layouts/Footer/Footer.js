import { Component, Suspense, lazy } from 'react';

import Popup from 'components/common/Popup/Popup';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './Footer.module.scss';

const Gallery = lazy(() => import('components/features/Gallery/Gallery'));

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupVisible: false
    };
  }

  togglePopupVisibility = (ev) => {
    if (ev) ev.preventDefault();

    this.setState(prevState => ({ isPopupVisible: !prevState.isPopupVisible }));
  }

  render() {
    const {
      isPopupVisible
    } = this.state;

    return (
      <div className={styles.container}>
        <Logo className={styles.logo} />
        2023 React Course
        <button type="button" className={styles.openGalleryBtn} onClick={this.togglePopupVisibility}>
          View the Entire Questionnaire
        </button>
        { isPopupVisible &&
          <Popup close={this.togglePopupVisibility}>
            <Suspense fallback={<div>Loading ...</div>}>
              <Gallery />
            </Suspense>
          </Popup>
        }
      </div>
    );
  }
}

export default Footer;
