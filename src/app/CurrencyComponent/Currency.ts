export interface Currency {
    id;
    attributes : Attributes;
}

export interface Attributes {
    code;
    name;
    currency_type;
    code_iso_numeric3;
    code_iso_alpha3;
    symbol;
    native_symbol;
    category;
}