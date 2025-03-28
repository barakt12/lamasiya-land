
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Gift, PanelTop } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm py-3 shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Gift className="text-lamasia-vibrantpurple h-8 w-8" />
          <h1 className="text-2xl font-bold gradient-text">למסירה</h1>
        </Link>
        
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-lamasia-vibrantpurple transition-colors">דף הבית</Link>
          <Link to="/listings" className="hover:text-lamasia-vibrantpurple transition-colors">פריטים למסירה</Link>
          <a href="/#how-it-works" className="hover:text-lamasia-vibrantpurple transition-colors">איך זה עובד?</a>
          <a href="/#benefits" className="hover:text-lamasia-vibrantpurple transition-colors">יתרונות</a>
          <a href="/#stories" className="hover:text-lamasia-vibrantpurple transition-colors">סיפורי הצלחה</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="border-lamasia-vibrantpurple text-lamasia-vibrantpurple hover:bg-lamasia-vibrantpurple hover:text-white"
          >
            התחברות
          </Button>
          <Button 
            className="bg-gradient-to-r from-lamasia-vibrantpurple to-lamasia-vibrantpink text-white"
            as={Link}
            to="/listings"
          >
            <Heart className="h-4 w-4 mr-2" />
            תרמו פריט
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
