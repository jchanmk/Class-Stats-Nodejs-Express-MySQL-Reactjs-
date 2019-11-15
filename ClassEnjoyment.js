var _this2 = this;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import StarList from "./StarList.js";

var ClassEnjoyment = function (_React$Component) {
    _inherits(ClassEnjoyment, _React$Component);

    function ClassEnjoyment(props) {
        _classCallCheck(this, ClassEnjoyment);

        var _this = _possibleConstructorReturn(this, (ClassEnjoyment.__proto__ || Object.getPrototypeOf(ClassEnjoyment)).call(this, props));
        // console.log(props)


        _this.state = {
            classEnjoyment: null
        };
        return _this;
    }

    return ClassEnjoyment;
}(React.Component);

renderClassEnjoyment = function renderClassEnjoyment(_ref) {
    var ClassEnjoyment = _ref.ClassEnjoyment;
    return React.createElement(
        "div",
        { className: "ratings" },
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "div",
                { className: "col-4" },
                React.createElement(
                    "span",
                    { className: "ratingsName" },
                    "Class Enjoyment: "
                )
            ),
            React.createElement(
                "div",
                { className: "col-5" },
                React.createElement(StarList, {
                    key: ClassEnjoyment,
                    rating: Math.round(ClassEnjoyment),
                    onClick: function onClick(rating) {
                        return _this2.userRating("classEnjoyment", rating);
                    }
                }),
                React.createElement(
                    "span",
                    {
                        "class": "submitted",
                        style: _this2.state.classEnjoyment ? { display: "block" } : { display: "none" }
                    },
                    "submitted!"
                )
            )
        )
    );
};