var SELECTORS = {
    content: {
        APP_ROOT_ELEMENT: '#app',
        MESSAGES_LIST_IN_OUT_OBSERVED: '.tSmQ1',
        CONTAINER_INPUT_MESSAGE_SEND: '.DuUXI',
        INPUT_TYPE_MESSAGE_SEND: '.copyable-text.selectable-text',
        SCROLLABLE_LIST_MESSAGES: '._26MUt',
        LEFT_CLICKABLE_USERS_PANEL: '._3Xjbn._3jNGW',
        TRANSLATE_BUTTON: '.' + style.footer__input__text__btn__translate,
        HEADER_USER_TITLE: 'header._1UuMR'
    },
    translator: {
        INPUT_SOURCE: '.QFw9Te textarea',
        OUTPUT_RESULT_TRANSLATION_CONTAINER: '.dePhmb',
        SPAN_TRALSATION_RESULTS: 'span.VIiyi',
        CONTAINER_LIST_SOURCE_LANGUAGES: '.hRFt4b',
        CONTAINER_LIST_TARGET_LANGUAGES: '.ykTHSe',
        ITEM_LANGUAGE_IN_CONTAINER_LIST_BY_LANGUAGE: (lang) => {
            return `div.ordo2[data-language-code="${lang}"]`;
        }
    }
};