
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Mock data for listings
const MOCK_LISTINGS = [
  {
    id: 1,
    title: 'ספה תלת מושבית',
    category: 'רהיטים',
    location: 'תל אביב',
    neighborhood: 'פלורנטין',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    description: 'ספה נוחה במצב מצוין, צבע אפור בהיר. ריפוד בד נעים',
    isAvailable: true,
    datePosted: '2023-05-15'
  },
  {
    id: 2,
    title: 'מקרר שארפ 500 ליטר',
    category: 'מוצרי חשמל',
    location: 'ירושלים',
    neighborhood: 'קטמון',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30',
    description: 'מקרר דו דלתי במצב טוב, נקי ועובד מצוין. צבע לבן.',
    isAvailable: true,
    datePosted: '2023-05-20'
  },
  {
    id: 3,
    title: 'מיטת יחיד + מזרן',
    category: 'רהיטים',
    location: 'חיפה',
    neighborhood: 'הדר',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    description: 'מיטת יחיד מעץ כולל מזרן אורטופדי במצב טוב מאוד.',
    isAvailable: false,
    datePosted: '2023-05-10'
  },
  {
    id: 4,
    title: 'ערכת כלי אוכל מלאה',
    category: 'כלי בית',
    location: 'באר שבע',
    neighborhood: 'רמות',
    image: 'https://images.unsplash.com/photo-1594378903899-2ea140210137',
    description: 'סט צלחות, כוסות וסכו״ם ל-6 סועדים. כמעט חדש.',
    isAvailable: true,
    datePosted: '2023-05-18'
  },
  {
    id: 5,
    title: 'ארון בגדים 4 דלתות',
    category: 'רהיטים',
    location: 'תל אביב',
    neighborhood: 'רמת אביב',
    image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975',
    description: 'ארון בגדים גדול עם מדפים ומקום לתליית בגדים. עץ מלא.',
    isAvailable: true,
    datePosted: '2023-05-12'
  },
  {
    id: 6,
    title: 'מכונת כביסה LG',
    category: 'מוצרי חשמל',
    location: 'ראשון לציון',
    neighborhood: 'נווה ים',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1',
    description: 'מכונת כביסה במצב מצוין, עובדת מעולה.',
    isAvailable: true,
    datePosted: '2023-05-22'
  },
  {
    id: 7,
    title: 'שולחן אוכל + 4 כיסאות',
    category: 'רהיטים',
    location: 'פתח תקווה',
    neighborhood: 'כפר גנים',
    image: 'https://images.unsplash.com/photo-1617098900591-3f90928e8c54',
    description: 'שולחן אוכל מלבני מעץ מלא עם 4 כיסאות תואמים.',
    isAvailable: true,
    datePosted: '2023-05-16'
  },
  {
    id: 8,
    title: 'מחשב נייח Dell',
    category: 'אלקטרוניקה',
    location: 'הרצליה',
    neighborhood: 'הרצליה פיתוח',
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761',
    description: 'מחשב שולחני עם מסך 24 אינץ׳, מקלדת ועכבר. מתאים לעבודה משרדית.',
    isAvailable: false,
    datePosted: '2023-05-08'
  },
  {
    id: 9,
    title: 'ספרי קריאה - 20 ספרים',
    category: 'ספרים וצעצועים',
    location: 'רמת גן',
    neighborhood: 'תל בנימין',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646',
    description: 'אוסף ספרי קריאה במצב מצוין, רובם ספרי מתח וספרות יפה.',
    isAvailable: true,
    datePosted: '2023-05-19'
  },
  {
    id: 10,
    title: 'ערכת גינון מלאה',
    category: 'גינה וחוץ',
    location: 'כפר סבא',
    neighborhood: 'עליה',
    image: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b',
    description: 'כלי גינון איכותיים, כולל מגרפה, את חפירה, מזמרה ועוד.',
    isAvailable: true,
    datePosted: '2023-05-21'
  },
  {
    id: 11,
    title: 'עגלת תינוק משולבת',
    category: 'אחר',
    location: 'נתניה',
    neighborhood: 'קרית השרון',
    image: 'https://images.unsplash.com/photo-1591876252053-83751f74f422',
    description: 'עגלת תינוק משולבת הכוללת סלקל, עריסה וטיולון. שמורה היטב.',
    isAvailable: true,
    datePosted: '2023-05-17'
  },
  {
    id: 12,
    title: 'סט מזוודות 3 חלקים',
    category: 'אחר',
    location: 'אשדוד',
    neighborhood: 'רובע ח׳',
    image: 'https://images.unsplash.com/photo-1596465924579-ea2912f45cae',
    description: 'סט מזוודות קשיחות בשלושה גדלים, כמעט ולא היה בשימוש.',
    isAvailable: true,
    datePosted: '2023-05-14'
  }
];

interface ListingsGridProps {
  filters: {
    category: string;
    location: string;
    isAvailable: boolean;
  };
  viewMode: 'grid' | 'list';
}

const ListingsGrid = ({ filters, viewMode }: ListingsGridProps) => {
  const { toast } = useToast();

  const filteredListings = MOCK_LISTINGS.filter(listing => {
    if (filters.isAvailable && !listing.isAvailable) return false;
    if (filters.category !== 'הכל' && listing.category !== filters.category) return false;
    if (filters.location !== 'הכל' && listing.location !== filters.location) return false;
    return true;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('he-IL', { day: 'numeric', month: 'numeric', year: 'numeric' }).format(date);
  };

  const handleContact = (id: number) => {
    toast({
      title: "פרטי קשר נשלחו",
      description: "בקשה ליצירת קשר נשלחה למפרסם הפריט",
    });
  };

  const handleFavorite = (id: number) => {
    toast({
      title: "נוסף למועדפים",
      description: "הפריט נוסף לרשימת המועדפים שלך",
    });
  };

  if (filteredListings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold mb-2">לא נמצאו פריטים מתאימים</h3>
        <p className="text-gray-600 mb-6 max-w-md">
          נסו לשנות את הסננים או לחפש קטגוריה אחרת
        </p>
        <Button 
          variant="outline" 
          className="border-lamasia-vibrantpurple text-lamasia-vibrantpurple hover:bg-lamasia-vibrantpurple hover:text-white"
          onClick={() => {
            // Reset filters logic would go here
          }}
        >
          נקה סננים
        </Button>
      </div>
    );
  }

  return (
    <div className={viewMode === 'grid' 
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
      : "space-y-4"
    }>
      {filteredListings.map((item) => (
        viewMode === 'grid' ? (
          <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <Badge 
                className={`absolute top-2 right-2 ${!item.isAvailable ? 'bg-gray-500' : 'bg-lamasia-vibrantpurple'}`}
              >
                {item.isAvailable ? 'זמין' : 'נלקח'}
              </Badge>
              <Badge 
                className="absolute top-2 left-2 bg-lamasia-vibrantorange"
              >
                {item.category}
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold truncate">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-center mb-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4 ml-1" />
                {item.location}, {item.neighborhood}
              </div>
              <div className="flex items-center mb-3 text-sm text-gray-500">
                <Clock className="h-4 w-4 ml-1" />
                פורסם בתאריך {formatDate(item.datePosted)}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button 
                variant="outline" 
                size="sm"
                className="border-lamasia-vibrantpurple text-lamasia-vibrantpurple hover:bg-lamasia-vibrantpurple hover:text-white"
                onClick={() => handleFavorite(item.id)}
              >
                <Heart className="h-4 w-4 ml-1" />
                שמור
              </Button>
              <Button 
                size="sm"
                disabled={!item.isAvailable}
                className={`bg-gradient-to-r ${item.isAvailable 
                  ? 'from-lamasia-vibrantpurple to-lamasia-vibrantpink cursor-pointer' 
                  : 'bg-gray-300 cursor-not-allowed'}`}
                onClick={() => handleContact(item.id)}
              >
                <CheckCircle2 className="h-4 w-4 ml-1" />
                {item.isAvailable ? 'יצירת קשר' : 'נלקח'}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-48 sm:h-auto sm:w-1/3">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <Badge 
                  className={`absolute top-2 right-2 ${!item.isAvailable ? 'bg-gray-500' : 'bg-lamasia-vibrantpurple'}`}
                >
                  {item.isAvailable ? 'זמין' : 'נלקח'}
                </Badge>
                <Badge 
                  className="absolute top-2 left-2 bg-lamasia-vibrantorange"
                >
                  {item.category}
                </Badge>
              </div>
              <div className="sm:w-2/3 p-4">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <div className="flex items-center mb-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 ml-1" />
                  {item.location}, {item.neighborhood}
                </div>
                <div className="flex items-center mb-3 text-sm text-gray-500">
                  <Clock className="h-4 w-4 ml-1" />
                  פורסם בתאריך {formatDate(item.datePosted)}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-lamasia-vibrantpurple text-lamasia-vibrantpurple hover:bg-lamasia-vibrantpurple hover:text-white"
                    onClick={() => handleFavorite(item.id)}
                  >
                    <Heart className="h-4 w-4 ml-1" />
                    שמור
                  </Button>
                  <Button 
                    size="sm"
                    disabled={!item.isAvailable}
                    className={`bg-gradient-to-r ${item.isAvailable 
                      ? 'from-lamasia-vibrantpurple to-lamasia-vibrantpink cursor-pointer' 
                      : 'bg-gray-300 cursor-not-allowed'}`}
                    onClick={() => handleContact(item.id)}
                  >
                    <CheckCircle2 className="h-4 w-4 ml-1" />
                    {item.isAvailable ? 'יצירת קשר' : 'נלקח'}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )
      ))}
    </div>
  );
};

export default ListingsGrid;
