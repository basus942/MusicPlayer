import React, { useRef, useEffect } from "react";

import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsRepeat1 } from "react-icons/bs";
import { ImPrevious } from "react-icons/im";
import { BsPauseCircle } from "react-icons/bs";
import { BiSkipNextCircle } from "react-icons/bi";
import { BsShuffle } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";

const MusicPlayer = () => {
  const [liked, setLiked] = React.useState(false);
  const [pause, setPause] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(null);
  const songEl = useRef("null");

  let song = {
    name: "Kaise jiyun",
    artist: "The Local Train",
    image:
      "https://imgs.search.brave.com/1xSC9jolcM9BywHjy6IF3LpVOpaMyYK4uPW4JTwTwn0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS82/MDYvQWFsYXMtS2Et/UGVkaC1IaW5kaS0y/MDE1LTUwMHg1MDAu/anBn",
  };

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Math.round(songEl.current.currentTime));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [songEl.current.currentTime]);

  useEffect(() => {
    if (pause) {
      songEl.current.play();
    } else {
      songEl.current.pause();
    }
  }, [pause]);

  return (
    <div>
      <Card
        isBlurred
        className="border-none bg-indigo-800/60 dark:bg-default-100/50 max-w-[610px] rounded-2xl"
        shadow="sm"
      >
        <audio src="./thelocaltrain.mp3" ref={songEl} />
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="Album cover"
                className="object-cover"
                height={200}
                shadow="md"
                src={song.image}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h1 className="text-xl font-bold ">{song.name}</h1>
                  <h1 className="text-white/70">{song.artist}</h1>
                </div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                  onPress={() => setLiked((v) => !v)}
                >
                  {liked ? (
                    <AiOutlineHeart size={30} />
                  ) : (
                    <AiFillHeart size={30} />
                  )}
                </Button>
              </div>

              <div className="flex flex-col mt-3 gap-1">
                <Progress
                  aria-label="Music progress"
                  classNames={{
                    indicator: "bg-default-800 dark:bg-white",
                    track: "bg-default-500/30",
                  }}
                  color="default"
                  size="sm"
                  value={
                    (Math.round(songEl.current.currentTime) /
                      Math.round(songEl.current.duration)) *
                    100
                  }
                />
                <div className="flex justify-between">
                  <p className="text-small">{formatTime(currentTime)}</p>
                  <p className="text-small text-foreground/50">
                    {formatTime(songEl.current.duration)}
                  </p>
                </div>
              </div>

              <div className="flex w-full items-center justify-center">
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                >
                  <BsRepeat1 className="mr-2" size={30} />
                </Button>
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                >
                  <ImPrevious className="mx-1" size={30} />
                </Button>
                <Button
                  isIconOnly
                  className="w-auto h-auto data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                  onPress={() => setPause((v) => !v)}
                >
                  {pause ? (
                    <BsPauseCircle className="mx-1" size={30} />
                  ) : (
                    <BsPlayCircle className="mx-1" size={30} />
                  )}
                </Button>
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                >
                  <BiSkipNextCircle className="mx-1" size={33} />
                </Button>
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                >
                  <BsShuffle className="ml-2" size={25} />
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MusicPlayer;
