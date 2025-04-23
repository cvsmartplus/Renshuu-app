import React from 'react';
import { HiMiniArrowSmallLeft } from 'react-icons/hi2';


export default function BackButton() {
    return (
        <button className="btn btn-outline-secondary mb-3" onClick={() => window.history.back()}>
        <HiMiniArrowSmallLeft /> Kembali
        </button>
    );
}
