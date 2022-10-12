import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import MuiAlert from '@material-ui/lab/Alert';
function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}
export default function Alerts({ state, setState }) {
  const [transition, setTransition] = React.useState(() => TransitionLeft);

  const handleClose = () => {
    setState(() => {
      return {
        ...state,
        open: false,
      };
    });
  };

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 10000 }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={state.open}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        key={transition ? transition.name : ''}
        autoHideDuration={2000}
        children={
          <MuiAlert elevation={6} variant="filled" severity={state.severity}>
            {state.message}
          </MuiAlert>
        }
      ></Snackbar>
    </div>
  );
}
