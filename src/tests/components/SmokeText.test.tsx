import * as React from "react";
import * as ReactDOM from "react-dom"

import SmokeText from "../../components/base/SmokeText";


describe('Проверки SmokeText на поиск текста', () => {

    let container;

    beforeEach(()=>{
        container = document.createElement("div");
    })
    afterEach(()=>{
        container.remove()
    })
    test('Проверка на поиск слова регуляркой', () => {

        ReactDOM.render(
            <SmokeText>Москва</SmokeText>,
            container
        );
        expect(/м.*о.*с.*к.*в.*а/i.test(container.outerHTML)).not.toBeTruthy()
    });

    test('Проверка на поиск отзеркаленного слова регуляркой ', () => {
        ReactDOM.render(
            <SmokeText>Москва</SmokeText>,
            container
        );
        expect(/а.*в.*к.*с.*о.*м/i.test(container.outerHTML)).not.toBeTruthy()
    });

});
