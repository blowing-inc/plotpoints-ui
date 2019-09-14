import React, { useState } from 'react';
import ListenLayout from '../../layout/ListenLayout';

import Comments from '../../listen/Comments';

type NullableFile = FileList | null;

const Listen: React.FC = () => {

  const [file, setFile] = useState<string>('');

  const handleChange = (selectorFiles: NullableFile): void => {
    if (selectorFiles != null ) {
      const f = selectorFiles.item(0);
      if (f != null) {
        setFile(URL.createObjectURL(f));
      }
    }
  }

  return (
    <ListenLayout>
      <input type="file" accept="audio/*" onChange={ (e) => handleChange(e.target.files) } />
      <Comments groupId="TODO"/>
    </ListenLayout>
  );
}

export default Listen;