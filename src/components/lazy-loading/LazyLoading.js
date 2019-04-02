import React, { lazy, Suspense } from 'react';
///import MyComp from './MyComp';

const MyComp = lazy(() => import('./MyComp'))

class LazyLoading extends React.Component {
    render() {
        return (
            <div>
                <h1>Lazy Loading</h1>
                <Suspense fallback={<div>(Another Component) loading..... </div>}>
                    <MyComp />
                </Suspense>
            </div>
         );
    }
}

export default LazyLoading;
