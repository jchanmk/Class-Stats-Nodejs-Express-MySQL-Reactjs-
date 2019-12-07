var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import StarList from "./StarList.js";

var ClassEnjoyment = function (_React$Component) {
    _inherits(ClassEnjoyment, _React$Component);

    function ClassEnjoyment(props) {
        _classCallCheck(this, ClassEnjoyment);

        console.log("in class enjoyment");

        var _this = _possibleConstructorReturn(this, (ClassEnjoyment.__proto__ || Object.getPrototypeOf(ClassEnjoyment)).call(this, props));

        _this.state = {
            rating: props.ClassEnjoyment,
            submitted: false
        };
        return _this;
    }

    _createClass(ClassEnjoyment, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(props) {
            this.setState({ rating: props.ClassEnjoyment });
        }
    }, {
        key: "render",
        value: function render() {
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
                            key: this.props.ClassEnjoyment,
                            rating: Math.round(this.props.ClassEnjoyment)
                            // onClick={(rating) => this.userRating("classEnjoyment", rating)}
                            , onClick: this.props.onClick
                        }),
                        React.createElement(
                            "span",
                            {
                                "class": "submitted",
                                style: this.props.Submitted ? { display: "block" } : { display: "none" }
                            },
                            "submitted!"
                        )
                    )
                )
            );
        }
    }]);

    return ClassEnjoyment;
}(React.Component);

export default ClassEnjoyment;