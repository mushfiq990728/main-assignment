import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 mt-20">
      <aside>
        <img src="/assets/logo.png" alt="HERO.iO" className="w-12 h-12" />
        <p className="font-bold">
          HERO.iO Ltd.
          <br />
          Building awesome apps since 2024
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="flex flex-col gap-2">
          <a href="#" className="link link-hover">Twitter</a>
          <a href="#" className="link link-hover">YouTube</a>
          <a href="#" className="link link-hover">Facebook</a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;