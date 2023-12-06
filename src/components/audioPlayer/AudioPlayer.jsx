import { atom, useRecoilState } from 'recoil';
import { useEffect, useRef, useState } from 'react';

const playState = atom({
  key: 'playState',
  default: false,
});

function AudioPlayer() {
  const myRef = useRef(null);
  const [play, setPlay] = useRecoilState(playState);
  const [audioSource, setAudioSource] = useState('');

  useEffect(() => {
    const fetchAudioSource = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();
        setAudioSource(data.audioPath);
      } catch (error) {
        console.error('Error fetching audio source:', error);
      }
    };

    fetchAudioSource();
  }, []);

  useEffect(() => {
    if (!myRef.current) return;

    myRef.current.src = audioSource;

    if (play) {
      myRef.current.play();
    } else {
      myRef.current.pause();
    }
  }, [play, audioSource]);

  return (
    <>
      <h1>AudioPlayer</h1>
      <audio ref={myRef} controls loop></audio>
      <br />
      <br />
      {play ? (
        <button onClick={() => setPlay(false)}>Pause</button>
      ) : (
        <button onClick={() => setPlay(true)}>Play</button>
      )}
    </>
  );
}

export default AudioPlayer;
