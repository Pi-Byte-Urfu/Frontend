import React, { FC } from 'react';
import style from './ToolPanel.module.scss'
import { BlockType, InlineStyle } from '../../config/config';
import { useEditorApi } from '../../context/context';
import Button from '../../../../ui/button/Button';
import { blockTypeNames } from '../const/blockTypeNames';
interface IToolPanelProps {
  styles: string[],
}

const INLINE_STYLES_CODES = Object.values(InlineStyle);
const BLOCK_TYPES_CODES = Object.values(BlockType);

const ToolPanel:FC<IToolPanelProps> = ({ styles }) => {
  const classNames = [style.toolPanel, ...styles].join(' ')
  const { 
    toggleInlineStyle, 
    hasInlineStyle,
    currentBlockType,
    toggleBlockType,
    } = useEditorApi();

  function blockTypeBtnClickhandler(ev: React.MouseEvent<HTMLButtonElement>, blockType: BlockType): void {
    ev.preventDefault();
    toggleBlockType(blockType)
  }

  BLOCK_TYPES_CODES.map(block => console.log(block))
  return (
    <div className={classNames}>
      <div className={style.toolPanelContainer}>
        <div className={style.inlineStyles}>
            {INLINE_STYLES_CODES.map((code) => {
            const onMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              toggleInlineStyle(code);
            };
        
            return (
              <button
                key={code}
                onMouseDown={onMouseDown}
                className={[style.inlineStylesItem, hasInlineStyle(code) ? style.active : ''].join(' ')}
              >
                {code}
              </button>
            );
          })}            
        </div>
        <div className={style.blockTypes}>
          { 
            BLOCK_TYPES_CODES.map((blockType) => 
            <button type='button'
              className={[style.blockTypeBtn, blockType].join(' ')}
              onClick={(ev) => blockTypeBtnClickhandler(ev, blockType)}
            >
              {blockTypeNames[blockType]}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolPanel;