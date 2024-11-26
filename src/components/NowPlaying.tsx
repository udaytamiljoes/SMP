import React from 'react';
import { Box, Typography, IconButton, Slider } from '@mui/material';
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { Song } from '../types/music';

interface NowPlayingProps {
  currentSong: Song;
}

const NowPlaying: React.FC<NowPlayingProps> = ({ currentSong }) => {
  return (
    <Box sx={{ 
      bgcolor: 'background.paper',
      borderTop: 1,
      borderColor: 'divider',
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <img 
          src={currentSong.coverUrl}
          alt={currentSong.title}
          style={{ width: 60, height: 60, borderRadius: 8 }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {currentSong.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currentSong.artist}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
          <IconButton size="small">
            <Shuffle size={20} />
          </IconButton>
          <IconButton>
            <SkipBack size={24} />
          </IconButton>
          <IconButton sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}>
            <Play size={24} fill="white" color="white" />
          </IconButton>
          <IconButton>
            <SkipForward size={24} />
          </IconButton>
          <IconButton size="small">
            <Repeat size={20} />
          </IconButton>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption">0:00</Typography>
          <Slider
            size="small"
            defaultValue={0}
            sx={{ flex: 1 }}
          />
          <Typography variant="caption">{currentSong.duration}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Volume2 size={20} />
        <Slider size="small" defaultValue={70} sx={{ width: 100 }} />
      </Box>
    </Box>
  );
};

export default NowPlaying;