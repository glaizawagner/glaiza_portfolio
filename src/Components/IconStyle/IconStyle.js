import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faTimes,
    faCode

} from '@fortawesome/free-solid-svg-icons'

const iconStyleMap = {
    hamburger: <FontAwesomeIcon className="fa_bars" icon={faBars} />,
    close: <FontAwesomeIcon className="fa_times" icon={faTimes} />,
    code: <FontAwesomeIcon className="fa_code" icon={faCode} />,
    default: null,
}

export default function IconStyle({ style = 'default' }) {
    return iconStyleMap[style]
}