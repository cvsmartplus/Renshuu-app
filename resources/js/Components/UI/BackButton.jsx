import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";


export default function BackButton() {
    return (
        <button className="btn mb-3" onClick={() => window.history.back()}>
        <IoMdArrowRoundBack />
        </button>
    );
}
