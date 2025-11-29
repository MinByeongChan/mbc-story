import { DefaultButton } from '@components/shared/Button/DefaultButton';
import { GridTitle } from '@components/shared/gridTitle';
import { css } from '@styled-system/css';

export const AttendanceInfo = () => {
  return (
    <section>
      <GridTitle>Attendance</GridTitle>

      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: '10',
          borderBottom: '1px dashed',
          borderColor: 'primary',
        })}
      >
        <p className={css({ fontWeight: 'bold', fontSize: 'lg' })}>참석 정보</p>
      </div>

      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          my: '16',
        })}
      >
        <p className={css({ lineHeight: '2' })}>참석의 부담은 가지지 말아주시고,</p>
        <p className={css({ lineHeight: '2' })}>정성껏 준비하기 위해 여쭙는 것이니,</p>
        <p className={css({ lineHeight: '2' })}>참석 정보를 알려주시면 감사하겠습니다.</p>

        <div className={css({ mt: 16 })}>
          <DefaultButton>참석 정보 전달하기</DefaultButton>
        </div>

        <p className={css({ mt: '16', fontWeight: 'bold', fontSize: 'lg', lineHeight: '2' })}>
          화환은 정중히 사양합니다.
        </p>
        <p className={css({ lineHeight: '2' })}>축하해 주시는 마음만 감사히 받겠습니다.</p>
      </div>
    </section>
  );
};
