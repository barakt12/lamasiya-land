
import React from 'react';
import { Gift, Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Gift className="text-lamasia-vibrantpurple h-8 w-8" />
              <h2 className="text-2xl font-bold gradient-text">למסירה</h2>
            </div>
            <p className="text-gray-600 mb-6">
              פלטפורמה המחברת בין אנשים שרוצים למסור חפצים
              לבין אנשים שצריכים אותם. יחד נעשה טוב לחברה ולסביבה.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-lamasia-vibrantpurple rounded-full flex items-center justify-center text-white hover:bg-lamasia-vibrantpurple/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 bg-lamasia-vibrantpurple rounded-full flex items-center justify-center text-white hover:bg-lamasia-vibrantpurple/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 bg-lamasia-vibrantpurple rounded-full flex items-center justify-center text-white hover:bg-lamasia-vibrantpurple/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">דף הבית</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">איך זה עובד</a></li>
              <li><a href="#items" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">פריטים למסירה</a></li>
              <li><a href="#stories" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">סיפורי הצלחה</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">קטגוריות</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">רהיטים</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">מוצרי חשמל</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">בגדים</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">לילדים</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">כלי בית</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">צרו קשר</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">info@lamasia.co.il</li>
              <li className="text-gray-600">03-1234567</li>
              <li><a href="#" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">אודות</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">תנאי שימוש</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lamasia-vibrantpurple transition-colors">מדיניות פרטיות</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2023 למסירה - כל הזכויות שמורות
          </p>
          <p className="text-gray-500 text-xs mt-2 flex items-center justify-center">
            נבנה באהבה
            <Heart className="mx-1 h-3 w-3 text-red-500 fill-red-500" />
            בישראל
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
