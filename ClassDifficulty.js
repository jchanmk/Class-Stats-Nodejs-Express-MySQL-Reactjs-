var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PercentageRating from "./PercentageRating.js";

var ClassDifficulty = function (_React$Component) {
    _inherits(ClassDifficulty, _React$Component);

    function ClassDifficulty(props) {
        _classCallCheck(this, ClassDifficulty);

        console.log("in class difficulty component");

        var _this = _possibleConstructorReturn(this, (ClassDifficulty.__proto__ || Object.getPrototypeOf(ClassDifficulty)).call(this, props));

        _this.state = {
            easy: props.Easy,
            medium: props.Medium,
            hard: props.Hard,
            submitted: false
        };
        return _this;
    }

    _createClass(ClassDifficulty, [{
        key: "render",
        value: function render() {
            var _this2 = this;

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
                            "Class Difficulty: "
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-5" },
                        React.createElement(PercentageRating, {
                            type: "easy",
                            color: "#27FF9B",
                            rating: this.props.Easy != null ? Math.round(this.props.Easy * 100) : 0
                            // onClick={() => this.userRating("examDifficulty", 1)}
                            , onClick: function onClick() {
                                return _this2.props.onClick(1);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "medium",
                            color: "#27B4FF",
                            rating: this.props.Medium != null ? Math.round(this.props.Medium * 100) : 0
                            // onClick={() => this.userRating("examDifficulty", 0)}
                            , onClick: function onClick() {
                                return _this2.props.onClick(0);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "hard",
                            color: "#DB6E6E",
                            rating: this.props.Hard != null ? Math.round(this.props.Hard * 100) : 0
                            // onClick={() => this.userRating("examDifficulty", -1)}
                            , onClick: function onClick() {
                                return _this2.props.onClick(-1);
                            }
                        }),
                        React.createElement(
                            "span",
                            {
                                "class": "submitted",
                                style: this.props.Submitted ? { display: "block", marginTop: "0" } : { display: "none" }
                            },
                            "submitted!"
                        )
                    )
                )
            );
        }
    }]);

    return ClassDifficulty;
}(React.Component);

export default ClassDifficulty;