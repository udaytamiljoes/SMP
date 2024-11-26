import React from 'react';
import { Box, Typography } from '@mui/material';
import { Mic, MicOff, Video, VideoOff, MonitorUp } from 'lucide-react';
import { Participant } from '../types/meeting';

interface ParticipantTileProps {
  participant: Participant;
}

const ParticipantTile: React.FC<ParticipantTileProps> = ({ participant }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {participant.isVideoOn ? (
        <img
          src={participant.avatarUrl}
          alt={participant.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="h2" sx={{ color: 'primary.main' }}>
            {participant.name.charAt(0)}
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 1,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body2" sx={{ color: 'white' }}>
          {participant.name} {participant.isHost && '(Host)'}
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {participant.isScreenSharing && (
            <MonitorUp size={16} color="white" />
          )}
          {participant.isAudioOn ? (
            <Mic size={16} color="white" />
          ) : (
            <MicOff size={16} color="red" />
          )}
          {participant.isVideoOn ? (
            <Video size={16} color="white" />
          ) : (
            <VideoOff size={16} color="red" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ParticipantTile;