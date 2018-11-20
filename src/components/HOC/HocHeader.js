import React from 'react';

export default (linkNames) => (Wrapper) => class HocHeader extends React.Component {
    render() {
        return (
            <div className='header'>
                {linkNames.map((item, key) => <a key={key} href="http://baidu.com">{item}</a>)}
                <Wrapper {...this.props} />
            </div>
        )
    }
}