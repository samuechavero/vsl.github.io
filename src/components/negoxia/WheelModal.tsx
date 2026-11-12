import React from 'react';
import { PrizeWheel } from './PrizeWheel';

interface WheelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaim?: () => void;
}

export const WheelModal: React.FC<WheelModalProps> = ({ isOpen, onClose, onClaim }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[#060E32]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-md bg-[#FFF9F2] rounded-3xl p-6 sm:p-8 border border-[#EDE3D5] shadow-2xl my-auto fade-in">
        <PrizeWheel onClose={onClose} onClaim={onClaim} />
      </div>
    </div>
  );
};
