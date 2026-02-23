import { H3HoverInfo, PopupPixelPosition } from '@/types';
import { css } from '@styled-system/css';
import closeIcon from '@/assets/close_24dp.svg';

const hoverInfoStyles = css({
  position: 'fixed',
  backgroundColor: 'gray.900',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '4px',
  zIndex: 1000,
  transform: 'translate(12px, 12px)',
});

const textXsStyles = css({
  fontSize: 'xs',
  color: 'gray.300',
});

interface TooltipProps {
  selectedHexagonInfo: H3HoverInfo;
  popupPixelPosition: PopupPixelPosition;
  onClickClose: () => void;
}

export const Tooltip = ({
  selectedHexagonInfo,
  popupPixelPosition,
  onClickClose: handleClickClose,
}: TooltipProps) => {
  return (
    <div
      className={hoverInfoStyles}
      style={{
        left: popupPixelPosition.x,
        top: popupPixelPosition.y,
      }}
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        })}
      >
        <button
          className={css({
            cursor: 'pointer',
          })}
          onClick={handleClickClose}
        >
          <img src={closeIcon} alt="close" className={css({ width: '16px', height: '16px' })} />
        </button>
      </div>
      <div>{selectedHexagonInfo.engName}</div>
      <div className={textXsStyles}>h3 index: {selectedHexagonInfo.h3Index}</div>
    </div>
  );
};
