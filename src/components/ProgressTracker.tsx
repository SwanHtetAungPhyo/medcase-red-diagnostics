
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface ProgressTrackerProps {
  currentStep: number;
  totalSteps: number;
  caseTitle: string;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  currentStep,
  totalSteps,
  caseTitle,
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-red-800 truncate">{caseTitle}</h2>
        <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300">
          Step {currentStep} of {totalSteps}
        </Badge>
      </div>
      <Progress 
        value={progress} 
        className="h-2 bg-red-100"
      />
      <p className="text-sm text-gray-600 mt-2">
        Progress: {Math.round(progress)}% complete
      </p>
    </div>
  );
};

export default ProgressTracker;
