import { AxiosInstance } from 'axios';
import { QSelect, QSelectProps, QSelectSlots } from 'quasar';
type Props = {
    link: string;
    defaultOptions?: any[];
    axiosInterceptor?: AxiosInstance;
    searchParam?: string;
} & Omit<QSelectProps, 'options'>;
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: QSelect['modelValue'];
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<QSelectSlots> & QSelectSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
} & {
    filter: (val: string) => any;
    loading: (val: boolean) => any;
    error: (val: unknown) => any;
    "update:options": (val: any[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onFilter?: ((val: string) => any) | undefined;
    onLoading?: ((val: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onError?: ((val: unknown) => any) | undefined;
    "onUpdate:options"?: ((val: any[]) => any) | undefined;
}>, {
    dark: boolean | null;
    optionsDark: boolean | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
