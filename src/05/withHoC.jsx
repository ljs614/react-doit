import React from 'react';

export default function withHoC(WrapperedComponent) {
  const { displayName, name } = WrapperedComponent;
  const wrappedComponentName = displayName || name;
  return class WithHoc extends React.Component {
    static displayName = `withHoC(${wrappedComponentName})`;
    render() {
      return <WrapperedComponent {...this.props} />;
    }
  };
}
