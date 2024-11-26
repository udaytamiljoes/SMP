import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, IconButton } from '@mui/material';
import { PlayCircle, Radio, Mic2, Clock, Plus } from 'lucide-react';

const Sidebar = () => {
  return (
    <Box sx={{ 
      width: 240,
      bgcolor: 'background.paper',
      borderRight: 1,
      borderColor: 'divider',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <List>
        <ListItem button>
          <ListItemIcon><PlayCircle size={20} /></ListItemIcon>
          <ListItemText primary="Now Playing" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Radio size={20} /></ListItemIcon>
          <ListItemText primary="Browse" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Mic2 size={20} /></ListItemIcon>
          <ListItemText primary="Artists" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Clock size={20} /></ListItemIcon>
          <ListItemText primary="Recent" />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ px: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            PLAYLISTS
          </Typography>
          <IconButton size="small">
            <Plus size={20} />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
          Chill Vibes
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
          Workout Mix
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
          Road Trip
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;