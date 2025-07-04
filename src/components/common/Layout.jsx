import React from 'react'
import PropTypes from "prop-types"

import { Header } from './Header';
import { Footer } from './Footer'

// src/components/common/Layout.jsx
export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ minHeight: "80vh" }}>
                {children}
            </main>
            <Footer />
        </>
    );
};


Layout.propTypes = {
    children: PropTypes.isRequired,
};
