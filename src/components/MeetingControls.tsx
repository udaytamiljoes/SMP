import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { 
  Mic, Video, MonitorUp, Users, MessageCircle, 
  PhoneOff, MicOff, VideoOff
} from 'lucide-react';

interface MeetingControlsProps {
  isAudioOn: boolean;
  isVideoOn: boolean;
  onAudioToggle: () => void;
  onVideoToggle: () => void;
  onEndCall: () => void;
}

const MeetingControls: React.FC<MeetingControlsProps> = ({
  isAudioOn,
  isVideoOn,
  onAudioToggle,
  onVideoToggle,
  onEndCall,
}) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
        display: 'flex',
        justifyContent: 'center',
        gap: 1,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Tooltip title={isAudioOn ? 'Mute' : 'Unmute'}>
        <IconButton
          onClick={onAudioToggle}
          sx={{
            bgcolor: isAudioOn ? 'rgba(255,255,255,0.1)' : 'error.main',
            '&:hover': {
              bgcolor: isAudioOn ? 'rgba(255,255,255,0.2)' : 'error.dark',
            },
          }}
        >
          {isAudioOn ? <Mic /> : <MicOff />}
        </IconButton>
      </Tooltip>

      <Tooltip title={isVideoOn ? 'Stop Video' : 'Start Video'}>
        <IconButton
          onClick={onVideoToggle}
          sx={{
            bgcolor: isVideoOn ? 'rgba(255,255,255,0.1)' : 'error.main',
            '&:hover': {
              bgcolor: isVideoOn ? 'rgba(255,255,255,0.2)' : 'error.dark',
            },
          }}
        >
          {isVideoOn ? <Video /> : <VideoOff />}
        </IconButton>
      </Tooltip>

      <Tooltip title="Share Screen">
        <IconButton
          sx={{
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
          }}
        >
          <MonitorUp />
        </IconButton>
      </Tooltip>

      <Tooltip title="Participants">
        <IconButton
          sx={{
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
          }}
        >
          <Users />
        </IconButton>
      </Tooltip>

      <Tooltip title="Chat">
        <IconButton
          sx={{
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
          }}
        >
          <MessageCircle />
        </IconButton>
      </Tooltip>

      <Tooltip title="End Call">
        <IconButton
          onClick={onEndCall}
          sx={{
            bgcolor: 'error.main',
            '&:hover': { bgcolor: 'error.dark' },
          }}
        >
          <PhoneOff />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
export default MeetingControls;
