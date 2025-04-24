import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";


export default function BackButton() {
    return (
        <button className="mb-3" onClick={() => window.history.back()}>
        <IoMdArrowRoundBack />
        </button>
    );
}
