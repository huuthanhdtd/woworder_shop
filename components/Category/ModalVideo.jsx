import React, { useContext } from 'react';
import { Context } from '../../constants/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import ReactMarkdown from 'react-markdown';
import styles from './ModalVideo.module.scss';

const ModalVideo = ({ contentVideo }) => {
  const { openVideo, setOpenVideo } = useContext(Context);
  console.log(contentVideo);
  return (
    <>
      {openVideo && (
        <div className={styles.container}>
          <div className={styles.content}>
            <ReactMarkdown source={contentVideo} escapeHtml={false} />
            <AiOutlineCloseSquare
              className={styles.closeBtn}
              onClick={() => setOpenVideo(close)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalVideo;
