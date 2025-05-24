
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PatientInfo from '@/components/PatientInfo';
import CaseStep from '@/components/CaseStep';
import CaseSummary from '@/components/CaseSummary';
import ProgressTracker from '@/components/ProgressTracker';
import casesData from '@/data/cases.json';

const CaseStudy: React.FC = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const navigate = useNavigate();
  const [currentCase, setCurrentCase] = useState<any>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  useEffect(() => {
    const caseData = casesData.find(c => c.id === caseId);
    if (caseData) {
      setCurrentCase(caseData);
    } else {
      navigate('/');
    }
  }, [caseId, navigate]);

  const handleAnswer = (selectedOption: string, nextStep: string) => {
    setUserAnswers([...userAnswers, selectedOption]);
    
    if (nextStep === 'final') {
      setIsComplete(true);
    } else {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setIsComplete(false);
    setUserAnswers([]);
  };

  const handleNewCase = () => {
    navigate('/');
  };

  if (!currentCase) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-800 mb-4">Loading Case...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-red-300 text-red-700 hover:bg-red-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cases
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patient Information Sidebar */}
          <div className="lg:col-span-1">
            <PatientInfo patientInfo={currentCase.patient_info} />
          </div>

          {/* Main Case Content */}
          <div className="lg:col-span-2 space-y-6">
            <ProgressTracker
              currentStep={isComplete ? currentCase.steps.length : currentStepIndex + 1}
              totalSteps={currentCase.steps.length}
              caseTitle={currentCase.title}
            />

            {isComplete ? (
              <CaseSummary
                summary={currentCase.final.summary}
                learningPoints={currentCase.final.learning_points}
                onRestart={handleRestart}
                onNewCase={handleNewCase}
              />
            ) : (
              <CaseStep
                step={currentCase.steps[currentStepIndex]}
                onAnswer={handleAnswer}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
