
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, BookOpen, GraduationCap, TrendingUp } from 'lucide-react';
import CaseStudyCard from '@/components/CaseStudyCard';
import SearchAndFilter from '@/components/SearchAndFilter';
import casesData from '@/data/cases.json';

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterComplaint, setFilterComplaint] = useState<string | null>(null);

  const handleStartCase = (caseId: string) => {
    navigate(`/case/${caseId}`);
  };

  // Get unique chief complaints for filtering
  const availableComplaints = useMemo(() => {
    const complaints = casesData.map(caseStudy => caseStudy.patient_info.chief_complaint);
    return [...new Set(complaints)];
  }, []);

  // Filter cases based on search and filter criteria
  const filteredCases = useMemo(() => {
    return casesData.filter(caseStudy => {
      const matchesSearch = searchQuery === '' || 
        caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseStudy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseStudy.patient_info.chief_complaint.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter = filterComplaint === null || 
        caseStudy.patient_info.chief_complaint === filterComplaint;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filterComplaint]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Enhanced Header with animations */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center mb-8 animate-scale-in">
              <div className="bg-white bg-opacity-20 p-4 rounded-full mr-4">
                <Stethoscope className="w-20 h-20" />
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                MedCase Interactive
              </h1>
            </div>
            <p className="text-xl text-red-100 mb-6 max-w-4xl mx-auto leading-relaxed">
              Master clinical decision-making through immersive, interactive case studies designed for medical students and healthcare professionals
            </p>
            <div className="flex items-center justify-center gap-8 text-red-100 flex-wrap">
              <div className="flex items-center gap-3 hover-scale">
                <BookOpen className="w-6 h-6" />
                <span className="font-medium">Evidence-Based Cases</span>
              </div>
              <div className="flex items-center gap-3 hover-scale">
                <GraduationCap className="w-6 h-6" />
                <span className="font-medium">Interactive Learning</span>
              </div>
              <div className="flex items-center gap-3 hover-scale">
                <TrendingUp className="w-6 h-6" />
                <span className="font-medium">Clinical Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-red-800 mb-6">Why Choose MedCase Interactive?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform provides immersive clinical scenarios that mirror real-world patient encounters, 
              helping you develop critical thinking skills essential for medical practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-200 hover-scale animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-red-800 mb-4">Realistic Patient Cases</h3>
              <p className="text-gray-600 leading-relaxed">Authentic clinical scenarios with comprehensive patient histories, vital signs, and progressive decision points that reflect real medical practice.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-200 hover-scale animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-red-800 mb-4">Step-by-Step Learning</h3>
              <p className="text-gray-600 leading-relaxed">Progressive decision-making process with immediate feedback, detailed explanations, and clinical reasoning guidance at every step.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-200 hover-scale animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-red-800 mb-4">Educational Insights</h3>
              <p className="text-gray-600 leading-relaxed">Key learning points, clinical pearls, and evidence-based medicine principles to enhance your medical knowledge and clinical skills.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section with Search */}
      <div className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-red-800 mb-6">Interactive Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our curated collection of clinical cases and start your interactive learning journey. 
              Use the search and filter tools to find cases that match your learning objectives.
            </p>
          </div>
          
          <SearchAndFilter
            onSearch={setSearchQuery}
            onFilterByComplaint={setFilterComplaint}
            availableComplaints={availableComplaints}
            currentFilter={filterComplaint}
          />

          {filteredCases.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-white p-8 rounded-lg border border-red-200 max-w-md mx-auto">
                <Stethoscope className="w-16 h-16 text-red-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-red-800 mb-2">No Cases Found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or filters to find relevant cases.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCases.map((caseStudy, index) => (
                <div key={caseStudy.id} className="animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CaseStudyCard
                    id={caseStudy.id}
                    title={caseStudy.title}
                    description={caseStudy.description}
                    patientAge={caseStudy.patient_info.age}
                    patientGender={caseStudy.patient_info.gender}
                    chiefComplaint={caseStudy.patient_info.chief_complaint}
                    onStartCase={handleStartCase}
                  />
                </div>
              ))}
            </div>
          )}

          {filteredCases.length > 0 && (
            <div className="text-center mt-12">
              <div className="bg-white p-6 rounded-lg border border-red-200 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Showing {filteredCases.length} of {casesData.length} cases
                </h3>
                <p className="text-gray-600">
                  {searchQuery && `Search: "${searchQuery}"`}
                  {filterComplaint && ` • Filter: ${filterComplaint}`}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="bg-gradient-to-r from-red-800 to-red-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Stethoscope className="w-8 h-8 mr-2" />
              <span className="text-xl font-semibold">MedCase Interactive</span>
            </div>
            <p className="text-red-200 mb-4">
              © 2024 MedCase Interactive. Designed for medical education and clinical training.
            </p>
            <p className="text-red-300 text-sm">
              Empowering the next generation of healthcare professionals through interactive learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
