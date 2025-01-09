import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import 'reactjs-popup/dist/index.css';
import { Box, Button, Modal } from '@mui/material';
import DrawerAppBar from './Header'
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleAccept = (value) => {
    setMessage(`Call correctly booked: ${value.format('DD/MM/YYYY HH:mm')}`);
  }

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <DrawerAppBar />
        <img src={logo} className="App-logo" alt="logo" />
        <TypeAnimation
          sequence={[
              "Hi, I'm Laura...",
              () => {
              console.log('Sequence completed');
              },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '40px', display: 'inline-block', fontWeight: "bold" }}
        />
        <p>A passionate Data Engineer collaborating with tech companies</p>
        <div>
          <Button variant="outlined" onClick={() => setIsOpen(true)}>
            Book a call
          </Button>
          <Modal open={isOpen} onClose={handleCancel}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDateTimePicker
                  orientation="landscape" 
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  onAccept={handleAccept}
                  onClose={handleCancel}
                  shouldDisableConfirm={!selectedDate}
                />
              </LocalizationProvider>
            </Box>
          </Modal>
            {message &&<p style={{ color: 'green', fontSize:'16px' }}>{message}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
