import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';

import StepsBar from './components/StepsBar/StepsBar';
import NavigationButtons from './components/NavigationButtons/NavigationButtons';
import PersonalFormPage from './components/PersonalFormPage/PersonalFormPage';
import SelectPlanPage from './components/SelectPlanPage/SelectPlanPage';
import PickAddOnsPage from './components/PickAddOnsPage/PickAddOnsPage';
import FinishUpPage from './components/FinishUpPage/FinishUpPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';

function App() {
    const currentPage = useSelector((state) => state.pages.currentPage);
    
    switch (currentPage) {
        case 1:
            return (
                <div className='app'>
                    <StepsBar />
                    <PersonalFormPage />
                    <NavigationButtons currentPage={currentPage} />
                </div>
            );

        case 2:
            return (
                <div className='app'>
                    <StepsBar />
                    <SelectPlanPage />
                    <NavigationButtons currentPage={currentPage} />
                </div>
            );

        case 3:
            return (
                <div className='app'>
                    <StepsBar />
                    <PickAddOnsPage />
                    <NavigationButtons currentPage={currentPage} />
                </div>
            );

            
        case 4:
            return (
            <div className='app'>
                <StepsBar />
                <FinishUpPage />
                <NavigationButtons currentPage={currentPage} />
            </div>
        );

        case 5:
            return(
                <div className='app'>
                    <StepsBar />
                    <CheckoutPage />
                </div>
            );

        default:
            return (
                <div className='app'>
                    <StepsBar />
                    <PersonalFormPage />
                    <NavigationButtons currentPage={currentPage} />
                </div>
            );
    }
}

export default App;
