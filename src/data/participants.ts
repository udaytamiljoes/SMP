import { Participant } from '../types/meeting';

export const participants: Participant[] = [
  {
    id: '1',
    name: 'John Smith',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    isVideoOn: true,
    isAudioOn: true,
    isScreenSharing: false,
    isHost: true
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    isVideoOn: true,
    isAudioOn: false,
    isScreenSharing: false,
    isHost: false
  },
  {
    id: '3',
    name: 'Michael Chen',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    isVideoOn: false,
    isAudioOn: true,
    isScreenSharing: false,
    isHost: false
  },
  {
    id: '4',
    name: 'Emma Wilson',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    isVideoOn: true,
    isAudioOn: true,
    isScreenSharing: false,
    isHost: false
  }
];