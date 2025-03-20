"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var RNSvgaPlayer = (0, react_native_1.requireNativeComponent)('RNSvgaPlayer');
var SVGAPlayer = /** @class */ (function (_super) {
    __extends(SVGAPlayer, _super);
    function SVGAPlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SVGAPlayer.prototype.load = function (source) {
        this.setState({
            source: source,
        });
    };
    SVGAPlayer.prototype.startAnimation = function () {
        this.setState({
            currentState: 'start',
        });
    };
    SVGAPlayer.prototype.pauseAnimation = function () {
        this.setState({
            currentState: 'pause',
        });
    };
    SVGAPlayer.prototype.stopAnimation = function () {
        this.setState({
            currentState: 'stop',
        });
    };
    SVGAPlayer.prototype.stepToFrame = function (toFrame, andPlay) {
        var _this = this;
        this.setState({
            currentState: andPlay === true ? 'play' : 'pause',
            toFrame: -1,
        }, function () {
            _this.setState({
                toFrame: toFrame,
            });
        });
    };
    SVGAPlayer.prototype.stepToPercentage = function (toPercentage, andPlay) {
        var _this = this;
        this.setState({
            currentState: andPlay === true ? 'play' : 'pause',
            toPercentage: -1,
        }, function () {
            _this.setState({
                toPercentage: toPercentage,
            });
        });
    };
    SVGAPlayer.prototype.componentWillUnmount = function () {
        this.stopAnimation();
    };
    SVGAPlayer.prototype.render = function () {
        var _this = this;
        if (!this.props.source) {
            return null;
        }
        var eventListeners = {};
        if (react_native_1.Platform.OS === 'android') {
            eventListeners.onChange = function (event) {
                var action = event.nativeEvent.action;
                if (action === 'onFinished') {
                    if (typeof _this.props.onFinished === 'function') {
                        _this.props.onFinished();
                    }
                }
                else if (action === 'onFrame') {
                    if (typeof _this.props.onFrame === 'function') {
                        _this.props.onFrame(event.nativeEvent.value);
                    }
                }
                else if (action === 'onPercentage') {
                    if (typeof _this.props.onPercentage === 'function') {
                        _this.props.onPercentage(event.nativeEvent.value);
                    }
                }
            };
        }
        else if (react_native_1.Platform.OS === 'ios') {
            if (typeof this.props.onFrame === 'function') {
                eventListeners.onFrame = function (event) {
                    _this.props.onFrame(event.nativeEvent.value);
                };
            }
            if (typeof this.props.onPercentage === 'function') {
                eventListeners.onPercentage = function (event) {
                    _this.props.onPercentage(event.nativeEvent.value);
                };
            }
        }
        return <RNSvgaPlayer {...this.props} {...this.state} {...eventListeners}/>;
    };
    return SVGAPlayer;
}(react_1.default.Component));
exports.default = SVGAPlayer;
