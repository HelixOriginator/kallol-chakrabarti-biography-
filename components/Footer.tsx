import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Kallol Chakrabarti. All rights reserved.</p>
        <p className="mt-2 text-sm">
            Research and publications are intellectual property of their respective publishers and the author.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
