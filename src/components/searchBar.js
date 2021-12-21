import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    //2222: 当表单提交后，先取消冒泡
    onFormSubmit = e => {
        e.preventDefault();
        //3333: 在这里通过子组件和父组件的沟通进行回调函数，这里的this.props就是调用父组件的功能，props就是父组件传过来的参数
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="segment ui">
                {/* 1111: 在这里通过表单提交的动作进行函数onFormSubmit的调用，并寻找onSubmit参数的值 */}
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search img</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;