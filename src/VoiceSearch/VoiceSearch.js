import React, { useRef } from 'react';
import { Button, message } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useMediaRecorder, useReactMediaRecorder } from 'react-media-recorder';

const VoiceSearch = ({ onTranscription }) => {
  const { startRecording, stopRecording, mediaRecorderRef, status } = useReactMediaRecorder({
    audio: true, // Ensure you specify audio
    onStop: (blobUrl, blob) => {
      handleAudioUpload(blob);
    },
  });

  const handleAudioUpload = async (blob) => {
    const audioFile = new File([blob], 'recording.mp3', { type: 'audio/mp3' });

    const formData = new FormData();
    formData.append('file', audioFile);
    console.log("Files : ", formData);
    try {
      const response = await axios.post('http://localhost:8004/assistant/speech-to-text', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const transcribedText = response.data.text; // Adjust based on your API response
      onTranscription(transcribedText);
    } catch (error) {
      message.error('Error processing audio file');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <Button
        type="primary"
        shape="circle"
        icon={<AudioOutlined />}
        size="large"
        onClick={status === 'recording' ? stopRecording : startRecording}
        className={`border ${status === 'recording' ? 'bg-red-500' : 'bg-blue-500'}`}
      >
        {status === 'recording' ? 'Stop Recording' : 'Start Recording'}
      </Button>
      <div className="text-center">
        {status === 'recording' ? (
          <p className="text-red-600">Recording... Hold the button to continue.</p>
        ) : (
          <p>Hold the mic button to start recording</p>
        )}
      </div>
    </div>
  );
};

export default VoiceSearch;
