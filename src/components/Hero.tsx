
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PackageOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 relative overflow-hidden bg-gradient-to-r from-lamasia-yellow to-lamasia-peach">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 animate-float w-16 h-16 rounded-full bg-lamasia-vibrantpurple"></div>
        <div className="absolute top-40 right-20 animate-bounce-slow w-20 h-20 rounded-full bg-lamasia-vibrantpink"></div>
        <div className="absolute bottom-20 left-1/4 animate-bounce-slow w-12 h-12 rounded-full bg-lamasia-vibrantorange"></div>
      </div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 py-8 md:py-20 text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">למסירה</span>
            <br />
            מעבירים דברים<br />הלאה בחיוך
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            במקום לזרוק רהיטים, בגדים או חפצים - העבירו אותם למישהו שצריך אותם באמת. 
            <br />תורמים לקהילה ולסביבה בלחיצת כפתור.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-lamasia-vibrantpurple text-white hover:bg-lamasia-vibrantpurple/90 text-lg py-6 px-8">
              מסירת חפץ
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-2 border-lamasia-vibrantpurple text-lamasia-vibrantpurple hover:bg-lamasia-vibrantpurple hover:text-white text-lg py-6 px-8">
              חיפוש פריטים
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-lamasia-vibrantpink opacity-10"></div>
            <div className="bg-white p-4 rounded-2xl shadow-xl rotate-3 mb-6 max-w-sm">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-lamasia-peach flex items-center justify-center">
                  <PackageOpen className="h-5 w-5 text-lamasia-vibrantorange" />
                </div>
                <div className="mr-3">
                  <h3 className="font-bold">ספה תלת מושבית</h3>
                  <p className="text-sm text-gray-500">תל אביב, זמין מהיום</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="ספה למסירה" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="mt-2 text-sm">במצב מעולה, נוחה מאוד, צריך רכב להובלה</p>
            </div>
            
            <div className="bg-white p-4 rounded-2xl shadow-xl -rotate-3 max-w-sm mr-10">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-lamasia-green flex items-center justify-center">
                  <PackageOpen className="h-5 w-5 text-green-600" />
                </div>
                <div className="mr-3">
                  <h3 className="font-bold">ארון ספרים</h3>
                  <p className="text-sm text-gray-500">ירושלים, זמין מחר</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1588923067549-6eb4f495d4c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va2Nhc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                alt="ארון ספרים למסירה" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="mt-2 text-sm">ארון במצב טוב, צבע עץ טבעי, 5 מדפים</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
