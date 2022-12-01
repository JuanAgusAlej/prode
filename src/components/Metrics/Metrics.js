import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { activePulse, pageview } from '../../service/metrics';

const Metrics = () => {
  const location = useLocation();
  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  useEffect(() => {
    const pulseInterval = setInterval(() => activePulse(), 60000 * 5);
    return () => clearInterval(pulseInterval);
  }, []);
};

export default Metrics;
