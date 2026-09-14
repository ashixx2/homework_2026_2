/**
 * Создает глубокую копию переданного значения.
 *
 * @param {*} value - значение, которое необходимо скопировать
 * @returns {*} глубокая копия переданного значения
 */
const deepClone = function (value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(deepClone);
    }

    const copy = {};

    Object.keys(value).forEach(function (key) {
        copy[key] = deepClone(value[key]);
    });

    return copy;
};
