import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '../../atom/button/Button';

export const ButtonContainer = () => {
  useGSAP(() => {
    gsap.from('.box', { opacity: 0, animationDuration: 1000, stagger: 0.1 });
    gsap.to('.box', { opacity: 1, animationDuration: 1000, stagger: 0.1 });
  });
  return (
    <div>
      <Button className="box" color="primary">
        1
      </Button>
      <Button className="box" color="success">
        2
      </Button>
      <Button className="box" color="neutral">
        3
      </Button>
    </div>
  );
};
