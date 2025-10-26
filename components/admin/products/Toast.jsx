'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function Toast({ show, message, type }) {
  if (!show) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="h-6 w-6" />;
      case 'error':
        return <ExclamationCircleIcon className="h-6 w-6" />;
      default:
        return <InformationCircleIcon className="h-6 w-6" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        exit={{ opacity: 0, y: -50, x: '-50%' }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className={`flex items-center gap-3 px-6 py-3 rounded-lg shadow-lg ${getBackgroundColor()} text-white`}>
          {getIcon()}
          <span className="font-medium">{message}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
