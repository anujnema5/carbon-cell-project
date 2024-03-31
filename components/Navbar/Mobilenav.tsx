import React, { useState } from 'react';
import Navheader from './Navheader';
import Links from './Links';
import Search from './Search';
import Userseperator from './Userseperator';
import { useConfig } from '@/providers/Config';
import { TNavLinks } from '@/data/navlinks';

type Props = {
  imgUrl: string;
  navLinks: TNavLinks[];
  supportLinks: TNavLinks[];
};

const Mobilenav: React.FC<Props> = ({ imgUrl, navLinks, supportLinks }) => {
  const { menu } = useConfig();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sm:hidden px-5 pt-10 pb-6 flex flex-col gap-10">
      <Navheader logo={imgUrl} />
      
      {menu && (
        <div className={`flex flex-col gap-10 ${isMenuOpen ? 'open' : 'closed'}`}>
          <div className="flex flex-col gap-10">
            {menu && <Search />}
            <Links links={navLinks} />
          </div>

          <div className="flex flex-col gap-10">
            <Links links={supportLinks} />
            {menu && <Userseperator />}
          </div>
        </div>
      )}

    </div>
  );
};

export default Mobilenav;
