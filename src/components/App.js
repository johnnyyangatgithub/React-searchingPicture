import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './searchBar';
import ImageList from './ImagesList';

class App extends React.Component {
    //每一次当找不到this的值时，去函数调用的地方找函数名称的左边的东西就是this的值
    //解决办法之一就是将函数变成赋值型的箭头函数
    state = { images: [] }

    onSearchTerm = async (term) => {
        const response = await unsplash.get('/search/photos', {
            //This result here is equal to get request on the URL which will show on browser like--- ?query=term
            params: { query: term }
        });
        // console.log(this);
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                {/* 4444: 在这里在表单提交动作的时候将onSubmit的props传给子组件
                          并将父组件的值(func)this.onSearchTerm也一起传过去 */}
                <SearchBar onSubmit={this.onSearchTerm} />
                <ImageList images={this.state.images} />
            </div >
        );
    }
}

export default App;