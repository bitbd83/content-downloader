import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as contentActions from '../../actions/contentActions';
import ContentList from './ContentList';
import {bindActionCreators} from 'redux';

class ContentsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToGetContentPage = this.redirectToGetContentPage.bind(this);
    }

    redirectToGetContentPage() {
        history.push('/contents');
    }

    componentDidMount() {
        console.log("Contents count" + this.props.contents.length);
    }

    render() {
        const {contents} = this.props;

        console.log(`component:ContentsPage:render - Called render with exposed Props from Redux`);
        return (
            <div>
                <h1>Content</h1>
                <input type="submit"
                       value="Get Content"
                       className="btn btn-primary"
                       onClick={this.redirectToGetContentsPage}/>
                <ContentList contents={contents} />
            </div>
        );
    }
}

ContentsPage.propTypes = {
    contents: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        contents: state.contents
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentsPage);
