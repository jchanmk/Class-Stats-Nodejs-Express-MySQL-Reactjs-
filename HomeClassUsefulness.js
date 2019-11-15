var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PercentageRating from "./PercentageRating.js";

var HomeClassUsefulness = function (_React$Component) {
    _inherits(HomeClassUsefulness, _React$Component);

    function HomeClassUsefulness(props) {
        _classCallCheck(this, HomeClassUsefulness);

        var _this = _possibleConstructorReturn(this, (HomeClassUsefulness.__proto__ || Object.getPrototypeOf(HomeClassUsefulness)).call(this, props));
        // console.log(props)


        _this.state = {
            useful: props.Useful,
            notUseful: props.NotUseful,
            submitted: false
        };
        return _this;
    }

    _createClass(HomeClassUsefulness, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "ratings" },
                React.createElement(PercentageRating, {
                    type: "useful",
                    color: "#27FF9B",
                    rating: this.props.Useful != null ? Math.round(this.props.Useful * 100) : 0,
                    onClick: function onClick() {
                        return _this2.props.onClick(1);
                    }
                }),
                React.createElement(PercentageRating, {
                    type: "not useful",
                    color: "#DB6E6E",
                    rating: this.props.NotUseful != null ? Math.round(this.props.NotUseful * 100) : 0,
                    onClick: function onClick() {
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
            );
        }
    }]);

    return HomeClassUsefulness;
}(React.Component);

export default HomeClassUsefulness;