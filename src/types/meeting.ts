export interface Participant {
  id: string;
  name: string;
  avatarUrl: string;
  isVideoOn: boolean;
  isAudioOn: boolean;
  isScreenSharing: boolean;
  isHost: boolean;
}