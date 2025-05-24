
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, BookOpen, GraduationCap } from 'lucide-react';
import CaseStudyCard from '@/components/CaseStudyCard';
import casesData from '@/data/cases.json';

const Index: React.FC = () => {
  const navigate = useNavigate();

  const handleStartCase = (caseId: string) => {
    navigate(`/case/${caseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Stethoscope className="w-16 h-16 mr-4" />
              <h1 className="text-5xl font-bold">MedCase Interactive</h1>
            </div>
            <p className="text-xl text-red-100 mb-4 max-w-3xl mx-auto">
              Master clinical decision-making through interactive case studies designed for medical students and healthcare professionals
            </p>
            <div className="flex items-center justify-center gap-6 text-red-100">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Evidence-Based Cases</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                <span>Interactive Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-800 mb-4">Why Choose MedCase Interactive?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform provides immersive clinical scenarios that mirror real-world patient encounters
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-lg border border-red-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-2">Realistic Patient Cases</h3>
              <p className="text-gray-600">Authentic clinical scenarios with comprehensive patient histories and vital signs</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-lg border border-red-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-2">Step-by-Step Learning</h3>
              <p className="text-gray-600">Progressive decision-making process with immediate feedback and explanations</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-lg border border-red-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-2">Educational Insights</h3>
              <p className="text-gray-600">Key learning points and clinical pearls to enhance your medical knowledge</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-800 mb-4">Interactive Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our curated collection of clinical cases and start your interactive learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casesData.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                id={caseStudy.id}
                title={caseStudy.title}
                description={caseStudy.description}
                patientAge={caseStudy.patient_info.age}
                patientGender={caseStudy.patient_info.gender}
                chiefComplaint={caseStudy.patient_info.chief_complaint}
                onStartCase={handleStartCase}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-red-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-200">
            © 2024 MedCase Interactive. Designed for medical education and clinical training.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
