import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  theme?: 'light' | 'dark';
  className?: string;
}

export const LogoEmblem: React.FC<{ theme?: 'light' | 'dark'; className?: string }> = ({
  theme = 'light',
  className = 'w-9 h-9'
}) => {
  const navyColor = theme === 'dark' ? '#FFFFFF' : '#0B2545';
  const goldColor = '#C19854';
  const goldArrowColor = '#D4A85D';

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Chimney */}
      <path
        d="M68 28H76V48L68 40V28Z"
        fill={navyColor}
      />

      {/* Roof Gable Structure with Eaves */}
      <path
        d="M50 8L8 42H18L50 17L82 42H92L50 8Z"
        fill={navyColor}
      />

      {/* Right House Wall */}
      <path
        d="M74 41V78H82V35L74 41Z"
        fill={navyColor}
      />

      {/* Left House Wall Base */}
      <path
        d="M18 41V78H26V35L18 41Z"
        fill={navyColor}
      />

      {/* Navy Letter 'P' Main Stem & Loop */}
      <path
        d="M26 43H48C55.7 43 60 47.5 60 54C60 60.5 55.7 65 48 65H35V78H26V43ZM35 50V58H47C50.5 58 52.5 56.2 52.5 54C52.5 51.8 50.5 50 47 50H35Z"
        fill={navyColor}
      />

      {/* Golden Letter 'A' (Right Leg & Crossbar) */}
      <path
        d="M55 45L78 78H68.5L63.5 70.5H46L41.5 78H33L55 45ZM60 64L54.5 55L49 64H60Z"
        fill={goldColor}
      />

      {/* Dynamic Swooping Upward Growth Arrow rising from 'P' through Roof Peak */}
      <path
        d="M35 65C45 65 50 56 50 42V25L42 33L50 16L58 33L50 25V42C50 62 42 72 26 72V65H35Z"
        fill={goldArrowColor}
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';
  const navyTextClass = isDark ? 'text-white' : 'text-[#0B2545]';
  const subTextClass = isDark ? 'text-neutral-300' : 'text-[#0B2545]';

  if (variant === 'icon') {
    return <LogoEmblem theme={theme} className={className || 'w-8 h-8'} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <LogoEmblem theme={theme} className="w-16 h-16 sm:w-20 sm:h-20 mb-2" />
        <div className={`text-xl sm:text-2xl font-extrabold tracking-wider ${navyTextClass} font-heading leading-tight`}>
          PRESSMART
        </div>
        <div className={`text-[11px] sm:text-xs font-semibold tracking-[0.28em] ${subTextClass} mt-1 uppercase`}>
          ASSOCIATES
        </div>
      </div>
    );
  }

  // Horizontal variant (default for Navbar)
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <LogoEmblem theme={theme} className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
      <div className="flex flex-col justify-center">
        <span className={`text-base sm:text-lg font-extrabold tracking-wider ${navyTextClass} font-heading leading-none`}>
          PRESSMART
        </span>
        <span className={`text-[9px] sm:text-[10px] font-semibold tracking-[0.28em] ${subTextClass} uppercase mt-1 leading-none`}>
          ASSOCIATES
        </span>
      </div>
    </div>
  );
};
