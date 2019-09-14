import React, { useState } from 'react';
import ListenLayout from '../../layout/ListenLayout';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

import Comments from '../../listen/Comments';
import Player from '../../listen/Player';

type NullableFile = FileList | null;

const Listen: React.FC = () => {

  const [file, setFile] = useState<string>('');

  const handleFileUpload = (selectorFiles: NullableFile): void => {
    if (selectorFiles != null ) {
      const f = selectorFiles.item(0);
      if (f != null) {
        setFile(URL.createObjectURL(f));
      }
    }
  }

  if (file !== "" ) {
    return (
      <ListenLayout>
        <Player source={file}/>
        <Comments groupId="TODO"/>
      </ListenLayout>
    );
  } else {
    return (
      <ListenLayout>
        <Form>
          <FormGroup>
            <h4> Select a file and start listening! </h4>
            <FontAwesomeIcon icon={faFileUpload} /> Upload a local file
            <Input type="file" accept="audio/*" onChange={ (e) => handleFileUpload(e.target.files) } />
            <br />
            <FontAwesomeIcon icon={faGoogleDrive} /> URL of Audio File
            <Input onChange={ (e) => setFile(e.target.value) }/>
          </FormGroup>
        </Form>
      </ListenLayout>
    );
  }
}

export default Listen;