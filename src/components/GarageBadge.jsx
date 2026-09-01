import React from 'react';
import { STATUS_MAP } from '../data/mockBookings';
import { CheckCircle2, Clock, Wrench, AlertCircle, Sparkles } from 'lucide-react';

export default function GarageBadge({ status, type = 'status', text, className = '' }) {
  if (type === 'status' && status) {
    const info = STATUS_MAP[status] || {
      labelGu: status,
      color: 'bg-slate-100 text-slate-700 border-slate-300',
      badgeColor: 'bg-slate-500'
    };

    const getIcon = () => {
      switch (status) {
        case 'completed': return <CheckCircle2 className="w-3.5 h-3.5" />;
        case 'started':
        case 'processing': return <Wrench className="w-3.5 h-3.5 animate-spin-slow" />;
        case 'cancelled': return <AlertCircle className="w-3.5 h-3.5" />;
        default: return <Clock className="w-3.5 h-3.5" />;
      }
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${info.color} ${className}`}>
        {getIcon()}
        <span>{info.labelGu}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-garage-blue border border-blue-100 ${className}`}>
      <Sparkles className="w-3 h-3 text-garage-orange" />
      <span>{text}</span>
    </span>
  );
}
