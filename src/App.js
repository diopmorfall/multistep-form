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

const attributions =
    <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Mor Fall Diop</a>.
    </div>;

function App() {

    const currentPage = useSelector((state) => state.pages.currentPage);
    switch (currentPage) {
        case 1:
            return (
                <>
                    <StepsBar />
                    <PersonalFormPage />
                    <NavigationButtons currentPage={currentPage} />
                </>
            );

        case 2:
            return (
                <>
                    <StepsBar />
                    <SelectPlanPage />
                    <NavigationButtons currentPage={currentPage} />
                </>
            );

        case 3:
            return (
                <>
                    <StepsBar />
                    <PickAddOnsPage />
                    <NavigationButtons currentPage={currentPage} />
                </>
            );

        default:
            return (
                <>
                    <StepsBar />
                    <PersonalFormPage />
                    <NavigationButtons currentPage={currentPage} />
                </>
            );
        /*
        case 4:
        return (
            <>
                <StepsBar />
                <FinishUpPage />
                <NavigationButtons currentPage={currentPage} />
            </>
        );

        case 5:
        return (
            <>
                <CheckoutPage />
            </>
        );
        */
    }
}

export default App;
