import React, { useState } from 'react';
import { Box, Grid, IconButton, Paper } from '@mui/material';
import { Camera, CameraOff, Mic, MicOff, Phone } from 'lucide-react';

interface VideoTileProps {
  active?: boolean;
}

const VideoTile: React.FC<VideoTileProps> = ({ active = true }) => {
  return (
    <Paper
      sx={{
        aspectRatio: '9/16',
        width: '100%',
        backgroundColor: '#1a1a1a',
        position: 'relative',
        borderRadius: 1,
      }}
    >
      {!active && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#333',
          }}
        />
      )}
    </Paper>
  );
};

const VideoGrid: React.FC = () => {
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#000',
        p: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid container spacing={1} flex={1}>
        <Grid item xs={12}>
          <VideoTile active={cameraOn} />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          py: 2,
        }}
      >
        <IconButton
          onClick={() => setCameraOn(!cameraOn)}
          sx={{
            backgroundColor: cameraOn ? 'rgba(255,255,255,0.1)' : '#ea4335',
            '&:hover': {
              backgroundColor: cameraOn ? 'rgba(255,255,255,0.2)' : '#d33426',
            },
          }}
        >
          {cameraOn ? (
            <Camera color="white" size={24} />
          ) : (
            <CameraOff color="white" size={24} />
          )}
        </IconButton>

        <IconButton
          onClick={() => setMicOn(!micOn)}
          sx={{
            backgroundColor: micOn ? 'rgba(255,255,255,0.1)' : '#ea4335',
            '&:hover': {
              backgroundColor: micOn ? 'rgba(255,255,255,0.2)' : '#d33426',
            },
          }}
        >
          {micOn ? (
            <Mic color="white" size={24} />
          ) : (
            <MicOff color="white" size={24} />
          )}
        </IconButton>

        <IconButton
          sx={{
            backgroundColor: '#ea4335',
            '&:hover': {
              backgroundColor: '#d33426',
            },
          }}
        >
          <Phone color="white" size={24} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default VideoGrid;