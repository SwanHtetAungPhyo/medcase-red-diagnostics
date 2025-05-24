
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilterByComplaint: (complaint: string | null) => void;
  availableComplaints: string[];
  currentFilter: string | null;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  onSearch,
  onFilterByComplaint,
  availableComplaints,
  currentFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-red-200 shadow-sm mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-red-500" />
          <Input
            placeholder="Search cases by title, description, or symptoms..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 border-red-200 focus:border-red-400 focus:ring-red-400"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="border-red-300 text-red-700 hover:bg-red-50"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {showFilters && (
        <div className="mt-4 pt-4 border-t border-red-200">
          <h3 className="text-sm font-semibold text-red-800 mb-3">Filter by Chief Complaint:</h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={currentFilter === null ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                currentFilter === null 
                  ? "bg-red-600 text-white hover:bg-red-700" 
                  : "border-red-300 text-red-700 hover:bg-red-50"
              }`}
              onClick={() => onFilterByComplaint(null)}
            >
              All Cases
            </Badge>
            {availableComplaints.map((complaint) => (
              <Badge
                key={complaint}
                variant={currentFilter === complaint ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  currentFilter === complaint 
                    ? "bg-red-600 text-white hover:bg-red-700" 
                    : "border-red-300 text-red-700 hover:bg-red-50"
                }`}
                onClick={() => onFilterByComplaint(complaint)}
              >
                {complaint}
                {currentFilter === complaint && (
                  <X className="w-3 h-3 ml-1" onClick={(e) => {
                    e.stopPropagation();
                    onFilterByComplaint(null);
                  }} />
                )}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
