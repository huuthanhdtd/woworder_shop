import React from 'react';
import styles from './styles.module.scss';
import { BsChevronDown } from 'react-icons/bs';
import { orderPrice } from '../../constants/commonData';
import { Button, Paper, Popper, Fade } from '@material-ui/core';

const SelectList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
    console.log(event);
  };

  const handleSelectOrder = () => {};

  return (
    <div className={styles.root}>
      <Button className={styles.toggle} onClick={handleClick('bottom-start')}>
        Giá bán
        <BsChevronDown />
      </Button>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              elevation={1}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 200,
                padding: 5,
              }}
            >
              {orderPrice.map((it, idx) => (
                <Button key={idx} onClick={handleSelectOrder}>
                  {it.name}
                </Button>
              ))}
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default SelectList;
