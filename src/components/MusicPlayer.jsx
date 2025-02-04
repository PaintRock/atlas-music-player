import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function MusicPlayer() {
  return ( 
    <div className="flex flex-col items-center gap=4">
    <CoverArt />
    <SongTitle />
    <PlayControls />
    <VolumeControls />
    <PlayListItem />

    </div>
  )
}
