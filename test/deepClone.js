'use strict';

QUnit.module('Тестируем функцию deepClone', () => {
    QUnit.test('Работает правильного для простого объекта', (assert) => {
        const original = { a: 1, b: 2 };
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия должна быть равна оригиналу');
        assert.notStrictEqual(cloned, original, 'Копия должна быть независимой от оригинала');
    });

    QUnit.test('Работает правильно для вложенного объекта', (assert) => {
        const original = { a: 1, b: { c: 2 } };
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия должна быть равна оригиналу');
        assert.notStrictEqual(cloned.b, original.b, 'Вложенный объект должен быть независимым');
    });

    QUnit.test('Работает правильно для массива', (assert) => {
        const original = [1, 2, { a: 3 }];
        const cloned = deepClone(original);

        assert.deepEqual(cloned, original, 'Копия массива должна быть равна оригиналу');
        assert.notStrictEqual(cloned[2], original[2], 'Вложенный объект в массиве должен быть независимым');
    });

    QUnit.test('Работает правильно для глубоко вложенного объекта', function (assert) {
    const original = {
        a: {
            b: {
                c: 42
            }
        }
    };

    const cloned = deepClone(original);

    assert.deepEqual(cloned, original, 'Объекты содержат одинаковые данные');
    assert.notStrictEqual(cloned.a.b, original.a.b, 'Глубоко вложенный объект скопирован');
    });

    QUnit.test('Работает правильно для объекта с вложенным массивом', function (assert) {
    const original = {
        numbers: [1, 2, 3],
        data: [{ value: 10 }]
    };

    const cloned = deepClone(original);

    assert.deepEqual(cloned, original, 'Структуры содержат одинаковые данные');
    assert.notStrictEqual(cloned.numbers, original.numbers, 'Массив скопирован');
    assert.notStrictEqual(cloned.data[0], original.data[0], 'Объект внутри массива скопирован');
    });

});
