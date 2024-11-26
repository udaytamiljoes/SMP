import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Box, IconButton } from '@mui/material';
import { Play, MoreVertical } from 'lucide-react';
import { Song } from '../types/music';

interface PlaylistProps {
  songs: Song[];
  currentSong: Song;
  onSongSelect: (song: Song) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ songs, currentSong, onSongSelect }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'transparent' }}>
      {songs.map((song) => (
        <ListItem
          key={song.id}
          onClick={() => onSongSelect(song)}
          sx={{
            cursor: 'pointer',
            borderRadius: 1,
            mb: 0.5,
            '&:hover': { 
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              '& .play-button': {
                opacity: 1,
              }
            },
          }}
          secondaryAction={
            <IconButton edge="end" sx={{ opacity: 0.5 }}>
              <MoreVertical size={20} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Box sx={{ position: 'relative' }}>
              <Avatar
                variant="rounded"
                src={song.coverUrl}
                alt={song.title}
              />
              <IconButton 
                className="play-button"
                size="small"
                sx={{ 
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0,
                  transition: 'opacity 0.2s',
                  bgcolor: 'primary.main',
                  '&:hover': { bgcolor: 'primary.dark' }
                }}
              >
                <Play size={16} fill="white" />
              </IconButton>
            </Box>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="body1" sx={{ color: song.id === currentSong.id ? 'primary.main' : 'inherit' }}>
                {song.title}
              </Typography>
            }
            secondary={
              <Box component="span" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography component="span" variant="body2" color="text.secondary">
                  {song.artist}
                </Typography>
                <Typography component="span" variant="body2" color="text.secondary">
                  {song.duration}
                </Typography>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Playlist;