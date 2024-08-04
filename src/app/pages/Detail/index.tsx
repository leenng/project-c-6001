import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { messages } from 'locales/message';
import { useLocation, useParams } from 'react-router-dom';
import { Footer } from 'app/components/Footer';
import './style.css'

const Detail: React.FC = () => {
  const params = useParams();
  const { id } = params; 
  const { t } = useTranslation();
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [location]);
  const jsons = {
    "1":t(...messages.serve1()),
    "2":t(...messages.serve2()),
    "3":t(...messages.serve3()),
    "4":t(...messages.serve4())
  }
  return (
    <Fragment>

    <div className="bg-[#f8f8f8]">
      <div className="w py-[45px] px-[16px] md:py-[95px]">
        <div style={{padding:"20px 0", minHeight:"calc(100vh - 50px - 218px - 40px)"}}>
            <div className='details' dangerouslySetInnerHTML={{ __html: jsons[id as any]}}></div>
        </div>
      </div>
    </div>
    <Footer />
    </Fragment>
  );
};

export { Detail };
