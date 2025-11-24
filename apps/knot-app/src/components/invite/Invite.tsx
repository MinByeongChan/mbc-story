import { GridTitle } from '@components/shared/gridTitle/GridTitle';
import { css } from '@styled-system/css';

const articleStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const contentWrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6',
  textAlign: 'center',
});

const paragraphStyles = css({
  lineHeight: '2',
});

const bottomTitleWrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',
  mt: '10',
  gap: '2',
});

const bottomIntroStyles = css({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '115px 50px 50px',
  gap: '2',
  alignItems: 'center',
});

export const Invite = () => {
  return (
    <article className={articleStyles}>
      <GridTitle>Invite you</GridTitle>

      <div className={contentWrapperStyles}>
        <div>
          <p className={paragraphStyles}>우리가 함께한 시간은 </p>
          <p className={paragraphStyles}>언제나 평범한 듯 특별했고,</p>
          <p className={paragraphStyles}>특별한 날들 속에서 '함께'라는 단어가 </p>
          <p className={paragraphStyles}>더욱 소중해졌습니다.</p>
        </div>

        <div>
          <p className={paragraphStyles}>그 시간들이 차곡차곡 쌓여,</p>
          <p className={paragraphStyles}>앞으로의 모든 평범한 날들을</p>
          <p className={paragraphStyles}>이 사람과 함께하고 싶어졌습니다.</p>
        </div>

        <div>
          <p className={paragraphStyles}>사랑이 일상이 되는 첫날,</p>
          <p className={paragraphStyles}>소중한 여러분과 함께하고 싶습니다.</p>
          <p className={paragraphStyles}>우리의 기쁨을 함께 나눠주세요.</p>
        </div>
      </div>

      <div className={bottomTitleWrapperStyles}>
        <p className={bottomIntroStyles}>
          <span className={css({ fontWeight: 'bold' })}>아버지 • 어머니</span>
          <span>의 아들</span>
          <span className={css({ fontWeight: 'bold' })}>민병찬</span>
        </p>
        <p className={bottomIntroStyles}>
          <span className={css({ fontWeight: 'bold' })}>아버지 • 어머니</span>
          <span>의 &nbsp;딸</span>
          <span className={css({ fontWeight: 'bold' })}>박보영</span>
        </p>
      </div>

      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '10',
        })}
      >
        <button
          className={css({ px: '4', py: '2', borderRadius: 'md', backgroundColor: 'primary' })}
        >
          연락하기
        </button>
      </div>
    </article>
  );
};
