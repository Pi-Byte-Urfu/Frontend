import React, { FC, useEffect } from 'react';
import { useFetcher, useLocation, useParams } from 'react-router-dom';
import style from './Theory.module.scss';
import { ITheoryData } from '../../../module_page_editor/types/ITheoryData';
import MDXContent from '../../../../modules/mdx/mdx_content/components/content/MDXContent';


const Theory:FC = () => {
  const { stepId } = useParams(); 
  const fetcher = useFetcher<ITheoryData>();
  const location = useLocation();
  useEffect(() => {
    if (fetcher.state == 'idle' && stepId != undefined) {
      fetcher.load(location.pathname)
    }
  }, [stepId])
  
  return (
    <div className={style.theory}>
      <h2 className={style.theoryName}>
        {fetcher.data?.name}
      </h2>
      <MDXContent defaultMarkdown={fetcher.data?.content ?? ''}/>
    </div>
  );
};

export default Theory;