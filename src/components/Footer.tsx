import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground font-medium">
              Copyright © 2012 omdic.biz & omdic.in. All Rights Reserved.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dr Vidur Sahgal, B 3/70, 3rd floor, Safdarjung Enclave, South West Delhi, Delhi-110029 INDIA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
