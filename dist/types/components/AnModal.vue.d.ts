import { QBtnProps, QCard } from 'quasar';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'close-icon-btn'?(_: {
            color: import("quasar").NamedColor | undefined;
            disable: boolean;
        }): any;
        content?(_: {}): any;
        'cancel-btn'?(_: {
            color: import("quasar").NamedColor | undefined;
            disable: boolean;
            label: string;
        }): any;
        'ok-btn'?(_: {
            click: () => void;
            color: import("quasar").NamedColor | undefined;
            label: string;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideOkBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideActions: {
        type: BooleanConstructor;
        default: boolean;
    };
    okLabel: {
        type: StringConstructor;
        default: string;
    };
    cancelLabel: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    btnsColor: {
        type: () => QBtnProps["color"];
        default: QBtnProps["color"];
    };
    modalCardProps: {
        type: () => ({
            class?: string;
            style?: string;
        } & InstanceType<typeof QCard>["$props"]);
        required: false;
    };
}>, {
    show: () => void;
    hide: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    okClick: () => any;
    hide: () => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideOkBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideActions: {
        type: BooleanConstructor;
        default: boolean;
    };
    okLabel: {
        type: StringConstructor;
        default: string;
    };
    cancelLabel: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    btnsColor: {
        type: () => QBtnProps["color"];
        default: QBtnProps["color"];
    };
    modalCardProps: {
        type: () => ({
            class?: string;
            style?: string;
        } & InstanceType<typeof QCard>["$props"]);
        required: false;
    };
}>> & Readonly<{
    onOkClick?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
}>, {
    persistent: boolean;
    hideOkBtn: boolean;
    hideActions: boolean;
    okLabel: string;
    cancelLabel: string;
    title: string;
    btnsColor: import("quasar").NamedColor | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
