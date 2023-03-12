import { useCallback } from "react";
import S2E8_mp4 from "../assets/S2E8.mp4";

export function Video() {
  const setDefaults = useCallback((x: any) => {
    if (x) {
      x.volume = 0.2;
    }
  }, []);

  return (
    <div>
      <p className="mb-5 text-center underline">
        The Office: Season 2 - Episode 8
      </p>
      <div className="flex justify-center border">
        <video
          ref={setDefaults}
          width="80%"
          controls
          autoPlay={true}
          onEnded={() => {
            //TODO: add logic to autoplay next video
            console.log("---ended---");
          }}
        >
          <source src={S2E8_mp4} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
