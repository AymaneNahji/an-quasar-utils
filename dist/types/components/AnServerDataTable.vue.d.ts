import { QTableColumn, QTableSlots } from 'quasar';
import AnModalForm from './AnModalForm.vue';
import { AxiosInstance } from 'axios';
type Paginated<T = any> = {
    count: number;
    lastPage: number;
    next: string | null;
    previous: string | null;
    results: T[];
};
type Filter = {
    [key: string]: any;
};
type FilterModalSlots = InstanceType<typeof AnModalForm>['$slots'];
export type AnServerDataTableSlots = QTableSlots & {
    [K in keyof FilterModalSlots as K extends "content" ? string : `filter-modal-${K}`]: FilterModalSlots[K];
} & {
    "title"?(_: {}): any;
    "search-input"?(_: {
        loading: boolean;
        value: string;
        search: (val: string) => void;
    }): any;
    "filter-btn"?(_: {
        label: string;
        color: string;
        click: () => void;
    }): any;
};
export type FilterModalData = {
    fields: {
        type: 'boolean-checkbox' | 'checkboxs' | 'radios' | 'text' | 'select' | 'select-multiple' | 'number' | 'date' | 'time' | 'date-time';
        label: string;
        urlParam: string;
        defaultValue?: any;
        choices?: {
            label: string;
            value: string | number | any;
        }[];
    }[];
    props?: InstanceType<typeof AnModalForm>['$props'];
};
declare function __VLS_template(): {
    slots: Readonly<QTableSlots & {
        readonly [x: string]: ((_: {}) => any) | undefined;
        readonly [x: `filter-modal-${string}`]: import("vue").Slot<any> | undefined;
        "filter-modal-close-icon-btn"?: ((_: {
            color: import("quasar").NamedColor | undefined;
            disable: boolean;
        }) => any) | undefined;
        "filter-modal-cancel-btn"?: ((_: {
            color: import("quasar").NamedColor | undefined;
            disable: boolean;
            label: string;
        }) => any) | undefined;
        "filter-modal-ok-btn"?: ((_: {
            color: import("quasar").NamedColor | undefined;
            label: string;
            disable: boolean;
            loading: boolean;
        }) => any) | undefined;
    } & {
        title?(_: {}): any;
        "search-input"?(_: {
            loading: boolean;
            value: string;
            search: (val: string) => void;
        }): any;
        "filter-btn"?(_: {
            label: string;
            color: string;
            click: () => void;
        }): any;
    }> & QTableSlots & {
        readonly [x: string]: ((_: {}) => any) | undefined;
        readonly [x: `filter-modal-${string}`]: import("vue").Slot<any> | undefined;
        "filter-modal-close-icon-btn"?: ((_: {
            color: import("quasar").NamedColor | undefined;
            disable: boolean;
        }) => any) | undefined;
        "filter-modal-cancel-btn"?: ((_: {
            color: import("quasar").NamedColor | undefined;
            disable: boolean;
            label: string;
        }) => any) | undefined;
        "filter-modal-ok-btn"?: ((_: {
            color: import("quasar").NamedColor | undefined;
            label: string;
            disable: boolean;
            loading: boolean;
        }) => any) | undefined;
    } & {
        title?(_: {}): any;
        "search-input"?(_: {
            loading: boolean;
            value: string;
            search: (val: string) => void;
        }): any;
        "filter-btn"?(_: {
            label: string;
            color: string;
            click: () => void;
        }): any;
    };
    refs: {
        filterModal: ({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                okLabel: string;
                cancelLabel: string;
                title: string;
                btnsColor: import("quasar").NamedColor | undefined;
                isLoading: boolean;
                formIsLoading: boolean;
            }> & Omit<{
                readonly okLabel: string;
                readonly cancelLabel: string;
                readonly title: string;
                readonly btnsColor: import("quasar").NamedColor | undefined;
                readonly isLoading: boolean;
                readonly formIsLoading: boolean;
                readonly modalCardProps?: ({
                    class?: string;
                    style?: string;
                } & {
                    dark?: boolean | null | undefined;
                    square?: boolean | undefined;
                    flat?: boolean | undefined;
                    bordered?: boolean | undefined;
                    tag?: string | undefined;
                }) | undefined;
                readonly onHide?: (() => any) | undefined;
                readonly onSubmit?: ((evt: Event | SubmitEvent) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                isLoading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                formIsLoading: {
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
                    type: () => import("quasar").QBtnProps["color"];
                    default: import("quasar").QBtnProps["color"];
                };
                modalCardProps: {
                    type: () => ({
                        class?: string;
                        style?: string;
                    } & InstanceType<typeof import("quasar").QCard>["$props"]);
                    required: false;
                };
            }>> & Readonly<{
                onHide?: (() => any) | undefined;
                onSubmit?: ((evt: Event | SubmitEvent) => any) | undefined;
            }>, "okLabel" | "cancelLabel" | "title" | "btnsColor" | "isLoading" | "formIsLoading">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: ((event: "hide") => void) & ((event: "submit", evt: Event | SubmitEvent) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                isLoading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                formIsLoading: {
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
                    type: () => import("quasar").QBtnProps["color"];
                    default: import("quasar").QBtnProps["color"];
                };
                modalCardProps: {
                    type: () => ({
                        class?: string;
                        style?: string;
                    } & InstanceType<typeof import("quasar").QCard>["$props"]);
                    required: false;
                };
            }>> & Readonly<{
                onHide?: (() => any) | undefined;
                onSubmit?: ((evt: Event | SubmitEvent) => any) | undefined;
            }>, {
                show: () => void;
                hide: () => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
                hide: () => any;
                submit: (evt: Event | SubmitEvent) => any;
            }, string, {
                okLabel: string;
                cancelLabel: string;
                title: string;
                btnsColor: import("quasar").NamedColor | undefined;
                isLoading: boolean;
                formIsLoading: boolean;
            }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            okLabel: string;
            cancelLabel: string;
            title: string;
            btnsColor: import("quasar").NamedColor | undefined;
            isLoading: boolean;
            formIsLoading: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            isLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            formIsLoading: {
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
                type: () => import("quasar").QBtnProps["color"];
                default: import("quasar").QBtnProps["color"];
            };
            modalCardProps: {
                type: () => ({
                    class?: string;
                    style?: string;
                } & InstanceType<typeof import("quasar").QCard>["$props"]);
                required: false;
            };
        }>> & Readonly<{
            onHide?: (() => any) | undefined;
            onSubmit?: ((evt: Event | SubmitEvent) => any) | undefined;
        }>, "hide" | "show" | ("okLabel" | "cancelLabel" | "title" | "btnsColor" | "isLoading" | "formIsLoading")> & import("vue").ShallowUnwrapRef<{
            show: () => void;
            hide: () => void;
        }> & {} & import("vue").ComponentCustomProperties & {} & {
            $slots: {
                "close-icon-btn"?(_: {
                    color: import("quasar").NamedColor | undefined;
                    disable: boolean;
                }): any;
                content?(_: {}): any;
                "cancel-btn"?(_: {
                    color: import("quasar").NamedColor | undefined;
                    disable: boolean;
                    label: string;
                }): any;
                "ok-btn"?(_: {
                    color: import("quasar").NamedColor | undefined;
                    label: string;
                    disable: boolean;
                    loading: boolean;
                }): any;
            };
        }) | null;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    columns: {
        type: () => QTableColumn[];
        required: true;
    };
    link: {
        type: StringConstructor;
        required: true;
    };
    linkParams: {
        type: () => {
            [key: string]: string | number;
        };
        default: {};
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hidePagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasFilter: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableRowClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterModalData: {
        type: () => FilterModalData;
        default: FilterModalData;
    };
    axiosInterceptor: {
        type: () => AxiosInstance;
        required: false;
    };
    paginationResponseKeys: {
        type: () => { [K in keyof Paginated]: string; };
        default: { [K in keyof Paginated]: string; };
    };
    orderingKey: {
        type: StringConstructor;
        default: string;
    };
}>, {
    filter: (dataFilter: Filter) => Promise<void>;
    fetchData: () => Promise<void>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    openFilter: () => any;
    rowClick: (row: any, index: number) => any;
    getDataSuccessfuly: (data: any) => any;
    getDataError: (error: any) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: () => QTableColumn[];
        required: true;
    };
    link: {
        type: StringConstructor;
        required: true;
    };
    linkParams: {
        type: () => {
            [key: string]: string | number;
        };
        default: {};
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hidePagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasFilter: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableRowClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterModalData: {
        type: () => FilterModalData;
        default: FilterModalData;
    };
    axiosInterceptor: {
        type: () => AxiosInstance;
        required: false;
    };
    paginationResponseKeys: {
        type: () => { [K in keyof Paginated]: string; };
        default: { [K in keyof Paginated]: string; };
    };
    orderingKey: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onOpenFilter?: (() => any) | undefined;
    onRowClick?: ((row: any, index: number) => any) | undefined;
    onGetDataSuccessfuly?: ((data: any) => any) | undefined;
    onGetDataError?: ((error: any) => any) | undefined;
}>, {
    title: string;
    square: boolean;
    flat: boolean;
    loading: boolean;
    linkParams: {
        [key: string]: string | number;
    };
    hidePagination: boolean;
    hasSearch: boolean;
    hasFilter: boolean;
    enableRowClick: boolean;
    filterModalData: FilterModalData;
    paginationResponseKeys: {
        count: string;
        lastPage: string;
        next: string;
        previous: string;
        results: string;
    };
    orderingKey: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
