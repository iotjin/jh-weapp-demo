'use strict';
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var component_1 = require('../common/component');
var utils_1 = require('./utils');
var toast_1 = __importDefault(require('../toast/toast'));
var utils_2 = require('../common/utils');
var initialMinDate = utils_1.getToday().getTime();
var initialMaxDate = (function () {
  var now = utils_1.getToday();
  return new Date(
    now.getFullYear(),
    now.getMonth() + 6,
    now.getDate()
  ).getTime();
})();
component_1.VantComponent({
  props: {
    title: {
      type: String,
      value: '日期选择',
    },
    color: String,
    show: {
      type: Boolean,
      observer: function (val) {
        if (val) {
          this.initRect();
          this.scrollIntoView();
        }
      },
    },
    formatter: null,
    confirmText: {
      type: String,
      value: '确定',
    },
    rangePrompt: String,
    showRangePrompt: {
      type: Boolean,
      value: true,
    },
    defaultDate: {
      type: null,
      observer: function (val) {
        this.setData({ currentDate: val });
        this.scrollIntoView();
      },
    },
    allowSameDay: Boolean,
    confirmDisabledText: String,
    type: {
      type: String,
      value: 'single',
      observer: 'reset',
    },
    minDate: {
      type: null,
      value: initialMinDate,
    },
    maxDate: {
      type: null,
      value: initialMaxDate,
    },
    position: {
      type: String,
      value: 'bottom',
    },
    rowHeight: {
      type: null,
      value: utils_1.ROW_HEIGHT,
    },
    round: {
      type: Boolean,
      value: true,
    },
    poppable: {
      type: Boolean,
      value: true,
    },
    showMark: {
      type: Boolean,
      value: true,
    },
    showTitle: {
      type: Boolean,
      value: true,
    },
    showConfirm: {
      type: Boolean,
      value: true,
    },
    showSubtitle: {
      type: Boolean,
      value: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true,
    },
    maxRange: {
      type: null,
      value: null,
    },
    firstDayOfWeek: {
      type: Number,
      value: 0,
    },
  },
  data: {
    subtitle: '',
    currentDate: null,
    scrollIntoView: '',
  },
  created: function () {
    this.setData({
      currentDate: this.getInitialDate(),
    });
  },
  mounted: function () {
    if (this.data.show || !this.data.poppable) {
      this.initRect();
      this.scrollIntoView();
    }
  },
  methods: {
    reset: function () {
      this.setData({ currentDate: this.getInitialDate() });
      this.scrollIntoView();
    },
    initRect: function () {
      var _this = this;
      if (this.contentObserver != null) {
        this.contentObserver.disconnect();
      }
      var contentObserver = this.createIntersectionObserver({
        thresholds: [0, 0.1, 0.9, 1],
        observeAll: true,
      });
      this.contentObserver = contentObserver;
      contentObserver.relativeTo('.van-calendar__body');
      contentObserver.observe('.month', function (res) {
        if (res.boundingClientRect.top <= res.relativeRect.top) {
          // @ts-ignore
          _this.setData({
            subtitle: utils_1.formatMonthTitle(res.dataset.date),
          });
        }
      });
    },
    limitDateRange: function (date, minDate, maxDate) {
      if (minDate === void 0) {
        minDate = null;
      }
      if (maxDate === void 0) {
        maxDate = null;
      }
      minDate = minDate || this.data.minDate;
      maxDate = maxDate || this.data.maxDate;
      if (utils_1.compareDay(date, minDate) === -1) {
        return minDate;
      }
      if (utils_1.compareDay(date, maxDate) === 1) {
        return maxDate;
      }
      return date;
    },
    getInitialDate: function (defaultDate) {
      var _this = this;
      if (defaultDate === void 0) {
        defaultDate = null;
      }
      var _a = this.data,
        type = _a.type,
        minDate = _a.minDate,
        maxDate = _a.maxDate;
      var now = utils_1.getToday().getTime();
      if (type === 'range') {
        if (!Array.isArray(defaultDate)) {
          defaultDate = [];
        }
        var _b = defaultDate || [],
          startDay = _b[0],
          endDay = _b[1];
        var start = this.limitDateRange(
          startDay || now,
          minDate,
          utils_1.getPrevDay(maxDate).getTime()
        );
        var end = this.limitDateRange(
          endDay || now,
          utils_1.getNextDay(minDate).getTime()
        );
        return [start, end];
      }
      if (type === 'multiple') {
        if (Array.isArray(defaultDate)) {
          return defaultDate.map(function (date) {
            return _this.limitDateRange(date);
          });
        }
        return [this.limitDateRange(now)];
      }
      if (!defaultDate || Array.isArray(defaultDate)) {
        defaultDate = now;
      }
      return this.limitDateRange(defaultDate);
    },
    scrollIntoView: function () {
      var _this = this;
      utils_2.requestAnimationFrame(function () {
        var _a = _this.data,
          currentDate = _a.currentDate,
          type = _a.type,
          show = _a.show,
          poppable = _a.poppable,
          minDate = _a.minDate,
          maxDate = _a.maxDate;
        // @ts-ignore
        var targetDate = type === 'single' ? currentDate : currentDate[0];
        var displayed = show || !poppable;
        if (!targetDate || !displayed) {
          return;
        }
        var months = utils_1.getMonths(minDate, maxDate);
        months.some(function (month, index) {
          if (utils_1.compareMonth(month, targetDate) === 0) {
            _this.setData({ scrollIntoView: 'month' + index });
            return true;
          }
          return false;
        });
      });
    },
    onOpen: function () {
      this.$emit('open');
    },
    onOpened: function () {
      this.$emit('opened');
    },
    onClose: function () {
      this.$emit('close');
    },
    onClosed: function () {
      this.$emit('closed');
    },
    onClickDay: function (event) {
      var date = event.detail.date;
      var _a = this.data,
        type = _a.type,
        currentDate = _a.currentDate,
        allowSameDay = _a.allowSameDay;
      if (type === 'range') {
        // @ts-ignore
        var startDay = currentDate[0],
          endDay = currentDate[1];
        if (startDay && !endDay) {
          var compareToStart = utils_1.compareDay(date, startDay);
          if (compareToStart === 1) {
            this.select([startDay, date], true);
          } else if (compareToStart === -1) {
            this.select([date, null]);
          } else if (allowSameDay) {
            this.select([date, date]);
          }
        } else {
          this.select([date, null]);
        }
      } else if (type === 'multiple') {
        var selectedIndex_1;
        // @ts-ignore
        var selected = currentDate.some(function (dateItem, index) {
          var equal = utils_1.compareDay(dateItem, date) === 0;
          if (equal) {
            selectedIndex_1 = index;
          }
          return equal;
        });
        if (selected) {
          // @ts-ignore
          var cancelDate = currentDate.splice(selectedIndex_1, 1);
          this.setData({ currentDate: currentDate });
          this.unselect(cancelDate);
        } else {
          // @ts-ignore
          this.select(__spreadArray(__spreadArray([], currentDate), [date]));
        }
      } else {
        this.select(date, true);
      }
    },
    unselect: function (dateArray) {
      var date = dateArray[0];
      if (date) {
        this.$emit('unselect', utils_1.copyDates(date));
      }
    },
    select: function (date, complete) {
      if (complete && this.data.type === 'range') {
        var valid = this.checkRange(date);
        if (!valid) {
          // auto selected to max range if showConfirm
          if (this.data.showConfirm) {
            this.emit([
              date[0],
              utils_1.getDayByOffset(date[0], this.data.maxRange - 1),
            ]);
          } else {
            this.emit(date);
          }
          return;
        }
      }
      this.emit(date);
      if (complete && !this.data.showConfirm) {
        this.onConfirm();
      }
    },
    emit: function (date) {
      var getTime = function (date) {
        return date instanceof Date ? date.getTime() : date;
      };
      this.setData({
        currentDate: Array.isArray(date) ? date.map(getTime) : getTime(date),
      });
      this.$emit('select', utils_1.copyDates(date));
    },
    checkRange: function (date) {
      var _a = this.data,
        maxRange = _a.maxRange,
        rangePrompt = _a.rangePrompt,
        showRangePrompt = _a.showRangePrompt;
      if (maxRange && utils_1.calcDateNum(date) > maxRange) {
        if (showRangePrompt) {
          toast_1.default({
            duration: 0,
            context: this,
            message:
              rangePrompt ||
              '\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 ' +
                maxRange +
                ' \u5929',
          });
        }
        this.$emit('over-range');
        return false;
      }
      return true;
    },
    onConfirm: function () {
      var _this = this;
      if (
        this.data.type === 'range' &&
        !this.checkRange(this.data.currentDate)
      ) {
        return;
      }
      wx.nextTick(function () {
        // @ts-ignore
        _this.$emit('confirm', utils_1.copyDates(_this.data.currentDate));
      });
    },
    onClickSubtitle: function (event) {
      this.$emit('click-subtitle', event);
    },
  },
});
