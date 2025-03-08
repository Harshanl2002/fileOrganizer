import { Box, Typography } from '@mui/material';
import './assets/App.css';
import FolderSelector from './components/FolderSelector';

function App(): JSX.Element {
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Box width={1} display={'flex'} justifyContent={'center'}>
        <Typography
          variant="button"
          sx={{
            fontSize: '1.5rem',
            textTransform: 'none',
            userSelect: 'none',
            fontWeight: 800,
            textAlign: 'center',
          }}
        >
          Folder Orginizer
        </Typography>
      </Box>
      <FolderSelector/>
    </Box>
  );
}

export default App;
