
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-lamasia-vibrantpurple to-lamasia-vibrantpink text-white">
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-3xl">
          <Gift className="h-16 w-16 mx-auto mb-6 animate-bounce-slow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להצטרף לקהילת הנתינה?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            הצטרפו עכשיו וגלו כמה קל להעביר פריטים שאינכם צריכים לאנשים שכן צריכים אותם.
            יחד נבנה קהילה של שיתוף ונתינה ונשמור על הסביבה.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white text-lamasia-vibrantpurple hover:bg-white/90 transition-colors text-lg py-6 px-8"
              as={Link}
              to="/listings"
            >
              מסירת חפץ
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 transition-colors text-lg py-6 px-8"
            >
              הצטרפות לקהילה
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
