import React, {Component} from 'react'
import Article from './Article'

class ArticleWrapper extends Component {
    state = {
        isOpen: false
    };


    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <Article article={article}/>;
        return (
            <div>
                <h2>
                    {article.title}
                </h2>
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default ArticleWrapper

