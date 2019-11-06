var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import * as React from 'react';
import { useState, useCallback } from 'react';

export var Star = function Star(_ref) {
    var index = _ref.index,
        full = _ref.full,
        setOverride = _ref.setOverride,
        setRating = _ref.setRating;

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        down = _useState2[0],
        setDown = _useState2[1];

    var handleMouseDown = useCallback(function () {
        setDown(true);
    }, []);

    var handleMouseUp = useCallback(function () {
        setDown(false);
    }, []);

    var handleMouseEnter = useCallback(function () {
        setOverride(index);
    }, [index, setOverride]);

    var handleMouseLeave = useCallback(function () {
        setDown(false);
        setOverride(null);
    }, [setOverride]);

    var handleClick = useCallback(function () {
        setRating(index);
    }, [index, setRating]);

    return React.createElement(
        'svg',
        {
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            xmlnsXlink: 'http://www.w3.org/1999/xlink',
            viewBox: '0 0 512 512',
            height: '1.5em',
            className: 'star',
            onMouseDown: handleMouseDown,
            onMouseUp: handleMouseUp,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            onClick: handleClick
        },
        React.createElement(
            'g',
            { transform: 'scale(' + (down ? .95 : 1) + ')' },
            React.createElement(
                'g',
                { transform: 'scale(.95) translate(15,15)' },
                React.createElement('path', {
                    stroke: 'rgba(0,0,0,.85)',
                    'stroke-width': '30',
                    fill: full ? 'gold' : 'transparent',
                    d: 'M492.867,181.444l-149.825-21.785L276.014,23.861c-8.187-16.59-31.844-16.589-40.031,0l-67.026,135.799L19.133,181.445c-18.306,2.662-25.615,25.158-12.369,38.071l108.408,105.682L89.592,474.44c-3.125,18.232,16.012,32.136,32.386,23.528l132.475-70.452l134.025,70.451c17.914,8.607,37.051-5.296,33.926-23.528l-25.578-149.241l108.409-105.685C518.482,206.601,511.173,184.105,492.867,181.444z'
                })
            )
        )
    );
};