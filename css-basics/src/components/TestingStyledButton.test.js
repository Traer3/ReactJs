import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import TestingStyledButton from "./TestingStyledButton";

test('TestingStyledButton change color on click', ()=> {

    const{getByText} = render(<TestingStyledButton/>);
    const buttonElement = getByText(/click me/i);

    //Проверяем начальный цвет текста 
    expect(buttonElement).toHaveStyle({color: 'blue'});

    //Кликаем по кнопке
    fireEvent.click(buttonElement);

    //Проверяем цвет текста после нажатия
    expect(buttonElement).toHaveStyle({color: 'red'});

});

