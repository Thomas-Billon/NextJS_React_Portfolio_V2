'use client';

import React, { RefObject, useEffect, useRef } from 'react';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { tw } from '@/utils/tailwind/TinyWind';
import { EntryContext } from '@/components/history/timeline/HistoryTimelineEntry';
import { HistoryEventBirthdayProps, HistoryEventSchoolProps, HistoryEventCompanyProps } from '@/components/history/event/HistoryEvent';
import HistoryEventTimestamp from '@/components/history/event/HistoryEventTimestamp';
import { Props } from '@/utils/react/Props';


const HistoryEventTimestampOverlay = ({ props = {}}: Props<HistoryEventBirthdayProps | HistoryEventSchoolProps | HistoryEventCompanyProps>): React.ReactNode => {
    const eventOverlayRef = useRef<HTMLElement>(null);

    const entryContext = useCustomContext(EntryContext);

    useEffect(() => {
        if (eventOverlayRef.current) {
            eventOverlayRef.current.style.height = `${entryContext.currentTimestampOverlayHeight}px`;
        }
    }, [entryContext, entryContext.currentTimestampOverlayHeight]);

    return (
        <div ref={eventOverlayRef as RefObject<HTMLDivElement>} className={styles.HistoryEventTimestampOverlayStyle}>
            <HistoryEventTimestamp props={props} />
        </div>
    );
};

export default HistoryEventTimestampOverlay;


const styles = tw({
    HistoryEventTimestampOverlayStyle: [
        'absolute',
        'top-0',
        'left-0',
        'w-full',
        'overflow-y-hidden',
        'group/is-overlay'
    ]
});
