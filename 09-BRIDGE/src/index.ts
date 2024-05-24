import Facebook from "./Platforms/Facebook";
import TwitchTV from "./Platforms/TwitchTV";
import Youtube from "./Platforms/Youtube";
import IPlatform from "./Platforms/interfaces/IPlatform";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform){
    console.log("Aguarde...");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

function startAdvancedLive(platform: IPlatform){
    startLive(platform);
    const live = new AdvancedLive(platform);
    live.subtitles();
    live.comments();
    console.log("\\------------------------------------/");
}

startLive(new Youtube());
startLive(new TwitchTV());
startLive(new Facebook());
startAdvancedLive(new Youtube());
startAdvancedLive(new TwitchTV());
startAdvancedLive(new Facebook());