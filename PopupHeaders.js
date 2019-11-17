var PopupHeaders = function PopupHeaders(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "row mb-3 mt-3 pl-3" },
            React.createElement(
                "div",
                { className: "col" },
                React.createElement(
                    "h3",
                    { className: "popupHeader" },
                    "RATE A CLASS"
                )
            )
        ),
        React.createElement(
            "div",
            { className: "row pl-3" },
            React.createElement(
                "div",
                { className: "col" },
                React.createElement(
                    "p",
                    { className: "popupSubheader" },
                    "We noticed you took",
                    React.createElement(
                        "span",
                        { className: "popupClassInfo" },
                        " ",
                        props.ClassName,
                        " "
                    ),
                    "with ",
                    React.createElement(
                        "span",
                        { className: "popupClassInfo" },
                        " Professor ",
                        props.Professor,
                        " "
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { className: "row pl-3" },
            React.createElement(
                "div",
                { className: "col" },
                React.createElement(
                    "p",
                    { className: "popupSubheader" },
                    "Please take 3-5 seconds to provide a few ratings for your peers!"
                )
            )
        )
    );
};

export default PopupHeaders;