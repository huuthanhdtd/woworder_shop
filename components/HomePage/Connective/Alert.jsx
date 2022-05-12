import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

export default function ActionAlerts({
  openSuccess,
  setOpenSuccess,
  setOpenError,
  openError,
}) {
  return (
    <div
    // style={{
    //   position: 'absolute',
    //   width: '50px',
    // }}
    >
      {openSuccess && (
        <Snackbar
          style={{ postion: 'relative' }}
          open={true}
          autoHideDuration={3000}
          onClose={() => setOpenSuccess(false)}
        >
          <Alert
          //  onClose={() => setOpenSuccess(false)}
          >
            Bạn đã đăng ký nhận tin tức thành công!
          </Alert>
        </Snackbar>
      )}
      {openError && (
        <Snackbar
          open={openError}
          autoHideDuration={3000}
          // onClose={() => setOpenError(false)}
        >
          <Alert severity="error" onClose={() => setOpenError(false)}>
            Có lỗi. Vui lòng thử lại!
          </Alert>
        </Snackbar>
      )}
      {/* <Snackbar
        // open={openError}
        autoHideDuration={5000}
        onClose={() => setOpenError(false)}
      >
        <Alert severity="error" onClose={() => setOpenError(false)}>
          Có lỗi. Vui lòng thử lại!
        </Alert>
      </Snackbar> */}
    </div>
  );
}
