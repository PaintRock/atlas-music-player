import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function MusicPlayer() {
  return ( 
    <div className="max-w-5xl mx-auto">
    <CoverArt />
    <SongTitle />
    <PlayControls />
    <VolumeControls />
    <PlayListItem />

    </div>
  )
}
