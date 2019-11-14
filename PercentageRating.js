var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PercentageRating = function (_React$Component) {
    _inherits(PercentageRating, _React$Component);

    function PercentageRating(props) {
        _classCallCheck(this, PercentageRating);

        var _this = _possibleConstructorReturn(this, (PercentageRating.__proto__ || Object.getPrototypeOf(PercentageRating)).call(this, props));
        // console.log(props)


        _this.mouseEnter = function (num) {
            _this.setState({ index: num });
        };

        _this.mouseLeave = function () {
            _this.setState({ index: -1 });
        };

        _this.state = {
            isHover: false
        };
        return _this;
    }

    _createClass(PercentageRating, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(props) {
            this.setState({ rating: props.rating });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "button",
                { className: "percentageButtons align-middle",
                    style: !this.state.isHover ? { background: "linear-gradient(to right, " + this.props.color + " " + this.props.rating + "%, white 0%)" } : { background: "none" },
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ isHover: true });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ isHover: false });
                    },
                    onClick: this.props.onClick
                },
                React.createElement(
                    "span",
                    { className: "percentageName", style: !this.state.isHover ? { display: "block" } : { display: "none" } },
                    this.props.type
                ),
                React.createElement(
                    "span",
                    { className: "percentage", style: !this.state.isHover ? { display: "block" } : { display: "none" } },
                    this.props.rating,
                    "%"
                ),
                React.createElement(
                    "span",
                    { className: "submit", style: this.state.isHover ? { display: "block" } : { display: "none" } },
                    "submit",
                    React.createElement("i", { "class": "fas fa-arrow-right", style: { position: "absolute", right: "10px", bottom: "6px" } })
                )
            );
        }
    }]);

    return PercentageRating;
}(React.Component);

export default PercentageRating;