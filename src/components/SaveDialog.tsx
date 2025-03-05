import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import dayjs from 'dayjs'; 

interface SaveDialogProps {
  onSubmit: () => void;
  dayTimes: { [key: string]: { openTime: string | null; closeTime: string | null } };
}

const SaveDialog: React.FC<SaveDialogProps> = ({ onSubmit, dayTimes }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    onSubmit();
    handleClose();
  };

  const formatTime = (time: string | null) => {
    if (!time) return 'Not Set'; 
    return dayjs(time).format('HH:mm');
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Save
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save Changes</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Are you sure you want to save the following times?
          </Typography>
          <div>
            {Object.entries(dayTimes).map(([day, times]) => (
              <div key={day}>
                <Typography variant="body2" color="textSecondary">
                  <strong>{day}:</strong> 
                  {times.openTime ? ` Open: ${formatTime(times.openTime)}` : ' Open: Not Set'}, 
                  {times.closeTime ? ` Close: ${formatTime(times.closeTime)}` : ' Close: Not Set'}
                </Typography>
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SaveDialog;
