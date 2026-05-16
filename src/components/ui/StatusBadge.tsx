import React from 'react';

interface StatusBadgeProps {
  status: 'Dikirim' | 'Dibaca' | 'Diproses' | 'Interview' | 'Tawaran' | 'Ditolak';
}

const statusConfig = {
  'Dikirim': { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-400' },
  'Dibaca': { bg: 'bg-indigo-100', text: 'text-indigo-700', dot: 'bg-indigo-400' },
  'Diproses': { bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-400' },
  'Interview': { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-400' },
  'Tawaran': { bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-400' },
  'Ditolak': { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-400' },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config = statusConfig[status];
  return (
    <span className={`${config.bg} ${config.text} px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
      {status}
    </span>
  );
};
