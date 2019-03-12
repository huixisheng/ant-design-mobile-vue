// import classnames from 'classnames';
// import React from 'react';
// import { FlexPropsType as BasePropsType } from './PropsType';

// export interface FlexProps extends BasePropsType {
//   alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
//   onClick?: () => void;
//   prefixCls?: string;
//   className?: string;
//   role?: string;
//   style?: React.CSSProperties;
// }
import classnames from 'classnames';
import VueTypes from 'vue-types';


const props = {
  alignContent: VueTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  prefixCls: VueTypes.string.def('am-flexbox'),
  className: VueTypes.string,
  role: VueTypes.string,
  style: VueTypes.object
};

export default {
  name: 'Flex',
  props,
  render() {
    const {
      direction,
      wrap,
      justify,
      align,
      alignContent,
      className,
      prefixCls,
      style,
      $slots,
      ...restProps
    } = this;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-dir-row`]: direction === 'row',
      [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
      [`${prefixCls}-dir-column`]: direction === 'column',
      [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

      [`${prefixCls}-nowrap`]: wrap === 'nowrap',
      [`${prefixCls}-wrap`]: wrap === 'wrap',
      [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

      [`${prefixCls}-justify-start`]: justify === 'start',
      [`${prefixCls}-justify-end`]: justify === 'end',
      [`${prefixCls}-justify-center`]: justify === 'center',
      [`${prefixCls}-justify-between`]: justify === 'between',
      [`${prefixCls}-justify-around`]: justify === 'around',

      [`${prefixCls}-align-start`]: align === 'start',
      [`${prefixCls}-align-center`]: align === 'center',
      [`${prefixCls}-align-end`]: align === 'end',
      [`${prefixCls}-align-baseline`]: align === 'baseline',
      [`${prefixCls}-align-stretch`]: align === 'stretch',

      [`${prefixCls}-align-content-start`]: alignContent === 'start',
      [`${prefixCls}-align-content-end`]: alignContent === 'end',
      [`${prefixCls}-align-content-center`]: alignContent === 'center',
      [`${prefixCls}-align-content-between`]: alignContent === 'between',
      [`${prefixCls}-align-content-around`]: alignContent === 'around',
      [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch',
    });
    // TODO: "style" is a reserved attribute and cannot be used as component prop. style={style}
    return (
      <div class={wrapCls} {...restProps}>
        {$slots.default}
      </div>
    );
  }
};
