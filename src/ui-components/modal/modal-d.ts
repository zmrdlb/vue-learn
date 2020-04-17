/**
 * vue-js-modal 事件回调函数参数
 */
export interface ModalEvtHandlerParamsE {
    params: object;
}

/**
 * vue-js-modal 事件回调函数
 */
export interface ModalEvtHandler {
    (e: ModalEvtHandlerParamsE): void;
}

/**
 * UiModal 参数
 */
export interface ModalParams {
    title?: string;
    beforeOpen?: ModalEvtHandler;
    beforeClose?: ModalEvtHandler;
}

interface InforModalParams extends ModalParams {
    inforType?: string;
    tip?: string;
    desc?: string;
}

interface InforModalBtnParams {
    label?: string;
    handler: (e: object) => void;
}

export interface AlertParams extends InforModalParams {
    ok?: InforModalBtnParams
}

export interface ConfirmParams extends InforModalParams {
    ok?: InforModalBtnParams;
    cancel?: InforModalBtnParams;
}
