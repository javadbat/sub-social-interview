import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';
import { fixMobileHeightVH } from '../utils/LayoutHelper';
import { ErrorBoundary } from './error-boundary/ErrorBoundary';

type LayoutProps = {
    children: React.ReactNode
}

function Layout(props: LayoutProps) {
    useEffect(() => {
        fixMobileHeightVH();
    }
        , []);
    return (
        <div className='app-layout'>
            <ErrorBoundary>
                {props.children}
            </ErrorBoundary>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;
