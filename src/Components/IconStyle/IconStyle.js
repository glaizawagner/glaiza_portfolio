import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faTimes,
    faCode,
    faChevronRight,
    faChevronLeft,

} from '@fortawesome/free-solid-svg-icons'

const iconStyleMap = {
    hamburger: <FontAwesomeIcon className="fa_bars" icon={faBars} />,
    close: <FontAwesomeIcon className="fa_times" icon={faTimes} />,
    code: <FontAwesomeIcon className="fa_code" icon={faCode} />,
    right: <FontAwesomeIcon className="fa_right" icon={faChevronRight} />,
    left: <FontAwesomeIcon className="fa_left" icon={faChevronLeft} />,
    default: null,
}

export default function IconStyle({ style = 'default' }) {
    return iconStyleMap[style]
}