
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingsGrid from '@/components/ListingsGrid';
import ListingsFilter from '@/components/ListingsFilter';
import UploadListing from '@/components/UploadListing';
import { Button } from '@/components/ui/button';
import { Plus, FilterX } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Listings = () => {
  const { toast } = useToast();
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: 'הכל',
    location: 'הכל',
    isAvailable: true,
  });
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');
  
  const handleFilterReset = () => {
    setFilters({
      category: 'הכל',
      location: 'הכל',
      isAvailable: true,
    });
    toast({
      title: "הסננים אופסו",
      description: "כל הסננים חזרו להגדרות ברירת המחדל",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">פריטים למסירה</h1>
            
            <div className="flex gap-3">
              <Button 
                variant="outline"
                className="border-lamasia-vibrantpurple text-lamasia-vibrantpurple hover:bg-lamasia-vibrantpurple hover:text-white"
                onClick={handleFilterReset}
              >
                <FilterX className="h-4 w-4 ml-2" />
                איפוס סננים
              </Button>
              
              <Button 
                className="bg-gradient-to-r from-lamasia-vibrantpurple to-lamasia-vibrantpink text-white"
                onClick={() => setIsUploadOpen(true)}
              >
                <Plus className="h-4 w-4 ml-2" />
                העלאת פריט
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <div className="lg:col-span-1">
              <ListingsFilter 
                filters={filters} 
                setFilters={setFilters} 
                activeView={activeView}
                setActiveView={setActiveView}
              />
            </div>
            
            <div className="lg:col-span-3">
              <ListingsGrid 
                filters={filters} 
                viewMode={activeView}
              />
            </div>
          </div>
        </div>
      </main>
      
      {isUploadOpen && (
        <UploadListing onClose={() => setIsUploadOpen(false)} />
      )}
      
      <Footer />
    </div>
  );
};

export default Listings;
