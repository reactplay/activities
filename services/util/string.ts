const NEW_LINE_CHAR = '\n';
const NEW_LINE_TEMPLATE = '_HP__10_NEW_LINE_10__HP_';
export const escape_new_line = (source_str) => {
    if (!source_str) {
        return '';
    }
    const res = source_str.replace(new RegExp(NEW_LINE_CHAR, 'g'), NEW_LINE_TEMPLATE);
    return res;
};

export const unescape_new_line = (source_str) => {
    if (!source_str) {
        return '';
    }
    const res = source_str.replace(new RegExp(NEW_LINE_TEMPLATE, 'g'), NEW_LINE_CHAR);
    return res;
};
