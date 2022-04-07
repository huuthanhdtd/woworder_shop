import { Fab, Zoom } from '@material-ui/core';
import { MdKeyboardArrowUp } from 'react-icons/md';
import React from 'react';
import styles from './ScrollButton.module.scss';

function ButtonToTop({ onClick, show }) {
  return (
    <div className={styles.root}>
      <Zoom in={show}>
        <Fab
          onClick={onClick}
          role="presentation"
          size="small"
          aria-label="scroll back to top"
        >
          <MdKeyboardArrowUp fontSize={20} />
        </Fab>
      </Zoom>
    </div>
  );
}
export default ButtonToTop;
