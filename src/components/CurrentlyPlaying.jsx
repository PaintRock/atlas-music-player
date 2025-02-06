import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying({ title, artist}) {
    return (
    <div className= "flex flex-col items-center gap-6">
        <CoverArt />
        <SongTitle title={title} artist={artist} />
        <PlayControls />
        <VolumeControls />
    </div>
);
}