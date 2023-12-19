import React from 'react';
import PillarSection from './ThreePillars/pillarSection';
import { Pillar } from '../FundamentalsComponents/ThreePillars/fundamentalsConstants'

export default function ThreePillars() {
    return (
        <div className='min-w-max min-h-max'>
            <div className="grid grid-cols-3 divide-x divide-gray-500 divide-solid h-40 w-screen mt-4">
                {Pillar.map((pillar) => (
                    <PillarSection
                        key={pillar.key}
                        numberIcon={pillar.numberIcon}
                        header={pillar.header}
                        description={pillar.description}
                        alt={pillar.alt}
                    />
                ))}
            </div>
        </div>
    );
}