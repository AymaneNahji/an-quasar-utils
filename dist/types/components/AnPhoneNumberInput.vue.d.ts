import { ICountryData, TCountryCode } from 'countries-list';
import { QInput, QInputProps, QInputSlots, QSelect, QSelectProps } from 'quasar';
type Props = {
    countryProps?: {
        excludeCountries?: TCountryCode[];
        defaultCountry?: TCountryCode;
    } & Omit<QSelectProps, 'modelValue'>;
} & QInputProps;
declare function __VLS_template(): {
    slots: Readonly<{
        "country-select-default": () => import("vue").VNode[];
        "country-select-prepend": () => import("vue").VNode[];
        "country-select-append": () => import("vue").VNode[];
        "country-select-before": () => import("vue").VNode[];
        "country-select-after": () => import("vue").VNode[];
        "country-select-label": () => import("vue").VNode[];
        "country-select-error": () => import("vue").VNode[];
        "country-select-hint": () => import("vue").VNode[];
        "country-select-counter": () => import("vue").VNode[];
        "country-select-loading": () => import("vue").VNode[];
        "country-select-selected": () => import("vue").VNode[];
        "country-select-before-options": () => import("vue").VNode[];
        "country-select-after-options": () => import("vue").VNode[];
        "country-select-no-option": (scope: {
            inputValue: string;
        }) => import("vue").VNode[];
        "country-select-selected-item": (scope: {
            index: number;
            opt: any;
            selected: boolean;
            removeAtIndex: (index: number) => void;
            toggleOption: (opt: any) => void;
            tabindex: number;
        }) => import("vue").VNode[];
        "country-select-option": (scope: {
            index: number;
            opt: any;
            selected: boolean;
            focused: boolean;
            toggleOption: (opt: any) => void;
            setOptionIndex: (index: number) => void;
            itemProps: any;
        }) => import("vue").VNode[];
    } & QInputSlots> & {
        "country-select-default": () => import("vue").VNode[];
        "country-select-prepend": () => import("vue").VNode[];
        "country-select-append": () => import("vue").VNode[];
        "country-select-before": () => import("vue").VNode[];
        "country-select-after": () => import("vue").VNode[];
        "country-select-label": () => import("vue").VNode[];
        "country-select-error": () => import("vue").VNode[];
        "country-select-hint": () => import("vue").VNode[];
        "country-select-counter": () => import("vue").VNode[];
        "country-select-loading": () => import("vue").VNode[];
        "country-select-selected": () => import("vue").VNode[];
        "country-select-before-options": () => import("vue").VNode[];
        "country-select-after-options": () => import("vue").VNode[];
        "country-select-no-option": (scope: {
            inputValue: string;
        }) => import("vue").VNode[];
        "country-select-selected-item": (scope: {
            index: number;
            opt: any;
            selected: boolean;
            removeAtIndex: (index: number) => void;
            toggleOption: (opt: any) => void;
            tabindex: number;
        }) => import("vue").VNode[];
        "country-select-option": (scope: {
            index: number;
            opt: any;
            selected: boolean;
            focused: boolean;
            toggleOption: (opt: any) => void;
            setOptionIndex: (index: number) => void;
            itemProps: any;
        }) => import("vue").VNode[];
    } & QInputSlots;
    refs: {
        countrySelect: QSelect | null;
        phoneInput: QInput | null;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    selectCountry: (value: ICountryData) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onSelectCountry?: ((value: ICountryData) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
