
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Search, LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const CATEGORIES = [
  'הכל',
  'רהיטים',
  'מוצרי חשמל',
  'כלי בית',
  'ביגוד ואופנה',
  'ספרים וצעצועים',
  'אלקטרוניקה',
  'גינה וחוץ',
  'אחר'
];

const LOCATIONS = [
  'הכל',
  'תל אביב',
  'ירושלים',
  'חיפה',
  'באר שבע',
  'אשדוד',
  'נתניה',
  'רמת גן',
  'הרצליה',
  'רעננה',
  'כפר סבא',
  'חולון',
  'בת ים',
  'אשקלון',
  'ראשון לציון',
  'פתח תקווה',
  'אחר'
];

interface ListingsFilterProps {
  filters: {
    category: string;
    location: string;
    isAvailable: boolean;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    category: string;
    location: string;
    isAvailable: boolean;
  }>>;
  activeView: 'grid' | 'list';
  setActiveView: React.Dispatch<React.SetStateAction<'grid' | 'list'>>;
}

const ListingsFilter = ({ 
  filters, 
  setFilters,
  activeView,
  setActiveView
}: ListingsFilterProps) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="space-y-6">
      <Card className="border-lamasia-purple shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-medium">חיפוש</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Input
              placeholder="חיפוש פריטים..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          <div className="flex justify-end mt-4">
            <div className="border rounded-md overflow-hidden flex">
              <Button 
                variant={activeView === 'grid' ? 'default' : 'ghost'} 
                size="sm"
                className={`rounded-none ${activeView === 'grid' ? 'bg-lamasia-vibrantpurple' : ''}`}
                onClick={() => setActiveView('grid')}
              >
                <LayoutGrid size={16} />
              </Button>
              <Button 
                variant={activeView === 'list' ? 'default' : 'ghost'} 
                size="sm"
                className={`rounded-none ${activeView === 'list' ? 'bg-lamasia-vibrantpurple' : ''}`}
                onClick={() => setActiveView('list')}
              >
                <List size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-lamasia-purple shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-medium">סינון לפי</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category">קטגוריה</Label>
            <Select
              value={filters.category}
              onValueChange={(value) => setFilters({...filters, category: value})}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="כל הקטגוריות" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">מיקום</Label>
            <Select
              value={filters.location}
              onValueChange={(value) => setFilters({...filters, location: value})}
            >
              <SelectTrigger id="location">
                <SelectValue placeholder="כל המיקומים" />
              </SelectTrigger>
              <SelectContent>
                {LOCATIONS.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox 
              id="available-only" 
              checked={filters.isAvailable}
              onCheckedChange={(checked) => 
                setFilters({...filters, isAvailable: checked as boolean})
              }
            />
            <Label htmlFor="available-only" className="mr-2">הצג רק פריטים זמינים</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListingsFilter;
