// YouTubeButton.tsx
import { DialogButton, jsxPluginHooks } from '@mdxeditor/editor';
import React from 'react';


const YouTubeButton: React.FC = () => {
  const insertJsx = jsxPluginHooks.usePublisher('insertJsx');

  return (
    <DialogButton
      tooltipTitle="Insert Youtube video"
      submitButtonTitle="Insert video"
      dialogInputPlaceholder="Paste the youtube video URL"
      buttonContent="YT"
      onSubmit={(url) => {
        const videoId = new URL(url).searchParams.get('v');
        if (videoId) {
          insertJsx({
            name: 'YouTube',
            kind: 'flow',
            props: { id: videoId },
          });
        } else {
          alert('Invalid YouTube URL');
        }
      }}
    />
  );
};

export default YouTubeButton;
