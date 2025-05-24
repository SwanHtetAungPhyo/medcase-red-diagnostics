
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface CaseStepProps {
  step: {
    id: string;
    content: string;
    question: string;
    options: string[];
    correct_option: string;
    next_step_map: { [key: string]: string };
  };
  onAnswer: (selectedOption: string, nextStep: string) => void;
}

const CaseStep: React.FC<CaseStepProps> = ({ step, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowFeedback(true);
    
    // Auto-proceed after showing feedback
    setTimeout(() => {
      const nextStep = step.next_step_map[option];
      onAnswer(option, nextStep);
    }, 2000);
  };

  const getOptionIcon = (option: string) => {
    if (!showFeedback) return null;
    
    if (option === step.correct_option) {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    } else if (option === selectedOption) {
      return <XCircle className="w-5 h-5 text-red-600" />;
    }
    return null;
  };

  const getOptionStyle = (option: string) => {
    if (!showFeedback) {
      return "border-gray-200 hover:border-red-300 hover:bg-red-50 cursor-pointer";
    }
    
    if (option === step.correct_option) {
      return "border-green-500 bg-green-50";
    } else if (option === selectedOption) {
      return "border-red-500 bg-red-50";
    }
    return "border-gray-200 bg-gray-50";
  };

  return (
    <Card className="border-red-200 bg-gradient-to-br from-white to-red-50">
      <CardHeader>
        <CardTitle className="text-red-800 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Clinical Decision Point
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-white p-4 rounded-lg border border-red-200">
          <p className="text-gray-800 text-lg leading-relaxed">{step.content}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-red-800 mb-4">{step.question}</h3>
          <div className="space-y-3">
            {step.options.map((option, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${getOptionStyle(option)}`}
                onClick={() => !showFeedback && handleOptionSelect(option)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-medium">{option}</span>
                  {getOptionIcon(option)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showFeedback && (
          <div className="bg-white p-4 rounded-lg border border-red-200">
            {selectedOption === step.correct_option ? (
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Correct!</span>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-red-700">
                  <XCircle className="w-5 h-5" />
                  <span className="font-semibold">Incorrect</span>
                </div>
                <p className="text-sm text-gray-600">
                  The correct answer is: <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">{step.correct_option}</Badge>
                </p>
              </div>
            )}
            <p className="text-sm text-gray-600 mt-2">Proceeding to next step...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CaseStep;
