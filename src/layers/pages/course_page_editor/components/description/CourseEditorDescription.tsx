import React, { FC, useEffect } from 'react';
import { useFetcher, useParams } from 'react-router-dom';

const CourseEditorDescription:FC = () => {
  const { courseId } = useParams();
  const fetcher = useFetcher();
  useEffect(() => {
    if(fetcher.state == 'idle' && !fetcher.data && courseId != undefined) {
      fetcher.load(``)
    }
  })
  return (
    <div>
      
    </div>
  );
};

export default CourseEditorDescription;