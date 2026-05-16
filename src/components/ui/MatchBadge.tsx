import React from 'react';

interface MatchBadgeProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export const MatchBadge: React.FC<MatchBadgeProps> = ({ score, size = 'md' }) => {
  let colorClass = 'text-gray-600 border-gray-300 bg-gray-50';
  if (score >= 80) colorClass = 'text-green-600 border-green-400 bg-green-50';
  else if (score >= 70) colorClass = 'text-amber-600 border-amber-400 bg-amber-50';

  const sizeClasses = {
    sm: 'w-10 h-10 text-[10px]',
    md: 'w-12 h-12 text-xs',
    lg: 'w-16 h-16 text-sm',
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClass} rounded-full border-2 flex flex-col items-center justify-center font-bold`}>
      <span>{score}%</span>
      <span className="text-[8px] uppercase tracking-tighter -mt-0.5">Match</span>
    </div>
  );
};
