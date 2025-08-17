import { useEffect, useState } from 'react';

export const useCurrentTime = (timeZone) => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => setTime(
            new Date().toLocaleTimeString('en-US', { timeZone, hour12: true })
        );

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, [timeZone]);

    return time;
};