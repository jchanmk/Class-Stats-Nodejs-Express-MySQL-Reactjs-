var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PercentageRating from "./PercentageRating.js";

var AttendanceAttn = function (_React$Component) {
    _inherits(AttendanceAttn, _React$Component);

    function AttendanceAttn(props) {
        _classCallCheck(this, AttendanceAttn);

        var _this = _possibleConstructorReturn(this, (AttendanceAttn.__proto__ || Object.getPrototypeOf(AttendanceAttn)).call(this, props));
        // console.log(props)


        _this.state = {
            inattentive: props.Inattentive,
            attentive: props.Attentive,
            submitted: false
        };
        return _this;
    }

    _createClass(AttendanceAttn, [{
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
                            "Professors Attention to Attendance/ Tardies: "
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-5" },
                        React.createElement(PercentageRating, {
                            type: "inattentive",
                            color: "#27FF9B",
                            rating: this.props.Inattentive != null ? Math.round(this.props.Inattentive * 100) : 0
                            // onClick={() => this.userRating("attendanceAttn", 1)}
                            , onClick: function onClick() {
                                return _this2.props.onClick(1);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "attentive",
                            color: "#DB6E6E",
                            rating: this.props.Attentive != null ? Math.round(this.props.Attentive * 100) : 0
                            // onClick={() => this.userRating("attendanceAttn", 0)}
                            , onClick: function onClick() {
                                return _this2.props.onClick(0);
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

    return AttendanceAttn;
}(React.Component);

export default AttendanceAttn;