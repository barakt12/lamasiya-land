
import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CATEGORIES = [
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

interface UploadListingProps {
  onClose: () => void;
}

const UploadListing = ({ onClose }: UploadListingProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    neighborhood: '',
    description: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "הפריט הועלה בהצלחה!",
        description: "הפריט שלך זמין כעת בקטגוריה שבחרת",
      });
      onClose();
    }, 1500);
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">העלאת פריט חדש למסירה</DialogTitle>
          <DialogDescription className="text-center">
            מלאו את הפרטים כדי שאנשים יוכלו למצוא את הפריט שלכם
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">שם הפריט *</Label>
            <Input
              id="title"
              name="title"
              required
              placeholder="תארו בקצרה את הפריט"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">קטגוריה *</Label>
              <Select 
                required
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="בחרו קטגוריה" />
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
              <Label htmlFor="location">עיר *</Label>
              <Select
                required
                onValueChange={(value) => handleSelectChange('location', value)}
              >
                <SelectTrigger id="location">
                  <SelectValue placeholder="בחרו עיר" />
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
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="neighborhood">שכונה</Label>
            <Input
              id="neighborhood"
              name="neighborhood"
              placeholder="ציינו את השכונה"
              value={formData.neighborhood}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">תיאור הפריט *</Label>
            <Textarea
              id="description"
              name="description"
              required
              placeholder="תארו את הפריט במספר מילים (מצב, גודל, צבע, וכו')"
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
          </div>
          
          <div className="space-y-2">
            <Label>תמונת הפריט *</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              {imagePreview ? (
                <div className="relative">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="max-h-40 mx-auto object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setImagePreview(null)}
                    className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-sm"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              ) : (
                <div className="py-4">
                  <ImageIcon className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 mb-2">גררו לכאן תמונה, או לחצו כדי להעלות</p>
                  <Button 
                    type="button" 
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => document.getElementById('image-upload')?.click()}
                  >
                    <Upload className="h-4 w-4 ml-2" />
                    בחירת תמונה
                  </Button>
                </div>
              )}
              <Input
                id="image-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          
          <div className="space-y-4 border-t pt-4 mt-6">
            <h4 className="font-medium">פרטי התקשרות</h4>
            
            <div className="space-y-2">
              <Label htmlFor="contactName">שם מלא *</Label>
              <Input
                id="contactName"
                name="contactName"
                required
                placeholder="השם המלא שלכם"
                value={formData.contactName}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactPhone">טלפון *</Label>
                <Input
                  id="contactPhone"
                  name="contactPhone"
                  type="tel"
                  required
                  placeholder="מספר טלפון ליצירת קשר"
                  value={formData.contactPhone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactEmail">אימייל</Label>
                <Input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  placeholder="כתובת אימייל (לא חובה)"
                  value={formData.contactEmail}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button 
                type="button" 
                variant="outline"
              >
                ביטול
              </Button>
            </DialogClose>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-lamasia-vibrantpurple to-lamasia-vibrantpink"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'מעלה פריט...' : 'העלאת פריט'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadListing;
