import {confuse} from "../../utils/confuse";

describe('Тесты функции confuse', () => {

    test('Строки не должны быть равны', () => {
        const str = 'Москва';
        expect(confuse(str)).not.toEqual(str);
    });

    test('Строки из одного символа не должны быть равны', () => {
        const str = 'ММММММММ';
        expect(confuse(str)).not.toEqual(str);
    });

});
