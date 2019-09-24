import React, { useState, useContext } from 'react';
import ListenLayout from '../../layout/ListenLayout';
import { Form, FormGroup, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';


import Comments from '../../listen/Comments';
import Player from '../../listen/Player';

type NullableFile = FileList | null;

const Listen: React.FC = () => {
  const [file, setFile] = useState<string>('');
  const [seconds, setSeconds] = useState<number>(0);

  const handleFileUpload = (selectorFiles: NullableFile): void => {
    if (selectorFiles != null) {
      const f = selectorFiles.item(0);
      if (f != null) {
        setFile(URL.createObjectURL(f));
      }
    }
  }

  const parseURL = (url: string): string => {
    if (url.includes("drive.google.com")) {
      return parseGdrive(url);
    } else {
      return url;
    }
  }

  const parseGdrive = (url: string): string => {
    let id = url.split("id=")[1];
    return `https://docs.google.com/uc?export=download&id=${id}`;
  }

  if (file !== "") {
    return (
      <ListenLayout>
        <Player source={file} seconds={seconds} setSeconds={setSeconds} />
        <Comments groupId="TODO" seconds={seconds} setSeconds={setSeconds} />
      </ListenLayout>
    );
  } else {
    return (
      <ListenLayout>
        <Form>
          <FormGroup>
            <h4> Select a file and start listening! </h4>
            <FontAwesomeIcon icon={faFileUpload} /> Upload a local file
            <Input type="file" accept="audio/*" onChange={(e) => handleFileUpload(e.target.files)} />
            <br />
            <FontAwesomeIcon icon={faGoogleDrive} /> URL of Audio File
            <Input onChange={(e) => setFile(parseURL(e.target.value))} />
          </FormGroup>
        </Form>
      </ListenLayout>
    );
  }
}

export default Listen;