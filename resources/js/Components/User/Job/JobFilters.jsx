import React from 'react';
import Checkbox from '@/Components/UI/Forms/ReusableFormComponents/CheckBox';

export default function JobFilters({ selectedTypes, handleTypeChange, selectedLocations, handleLocationChange, locations }) {
    return (
        <div className="list-group">
            <div className="mb-3">
                <h6>Tipe pekerjaan</h6>
                {['Remote', 'On-Site', 'Flexible', 'Hybrid', 'Contract', 'Internship'].map((type, index) => (
                    <Checkbox
                        key={index}
                        id={`checkbox-${type}`}
                        checked={selectedTypes.includes(type)}
                        onChange={() => handleTypeChange(type)}
                        label={type}
                        className="me-2"
                    />
                ))}
            </div>
            <div className="mb-3">
                <h6>Lokasi</h6>
                {locations.map((location, index) => (
                    <Checkbox
                        key={index}
                        id={`checkbox-${location}`}
                        checked={selectedLocations.includes(location)}
                        onChange={() => handleLocationChange(location)}
                        label={location}
                        className="me-2"
                    />
                ))}
            </div>
        </div>
    );
}
