import React from 'react';
import { ArrowUp } from 'iconsax-react';
import ScrollToTop from 'react-scroll-up'


export default function BackToTop() {
  const [screen, setScreen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      window.addEventListener('scroll', handleScroll);
      if (window.scrollY > 0) {
        setScreen(true);
      } else {
        setScreen(false);
      }
    };


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full text-right z-20 cursor-pointer`}>
      <div
        className="animate-bounce fixed right-10 bottom-10 z-40 shadow-md rounded-full w-14 h-14 flex items-center justify-center bg-slate-50 border-[0.2px] border-blue-100 text-center text-lg font-[600]"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      >
        <ScrollToTop showUnder={160}>
          <span><ArrowUp /></span>
        </ScrollToTop> 
        <ArrowUp />
      </div>
    </div>
  );
}
