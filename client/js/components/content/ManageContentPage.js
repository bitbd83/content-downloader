import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contentActions from '../../actions/contentActions';
import ContentForm from './ContentForm';

export class ManageContentPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        // Initialise State
        this.state = {
            // Set State using content passed from Props
            content: Object.assign({}, props.content),
            errors: {},
            fetching: false
        };

        this.updateContentState = this.updateContentState.bind(this);
        this.fetchContent = this.fetchContent.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(`component:ManageContentPage:componentWillReceiveProps - [nextProps: ${JSON.stringify(nextProps)}]`);
        if (this.props.content.id != nextProps.content.id) {
            this.setState({content: Object.assign({}, nextProps.content)});
        }
    }

    updateContentState(event) {
        console.log(`component:ManageContentPage:updateContentState - [this.state.content: ${JSON.stringify(this.state.content)}]`);
        const field = event.target.name;
        let content = this.state.content;
        content[field] = event.target.value;
        return this.setState({content: content});
    }

    contentFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.content.id.length == 0) {
            errors.id = 'Content must be entered.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    fetchContent(event) {
        event.preventDefault();

        if (!this.contentFormIsValid()) {
            return;
        }

        this.setState({fetching: true});

        console.log(`component:ManageContentPage:fetchContent - [this.state.content: ${JSON.stringify(this.state.content)}]`);

        this.props.actions.fetchContent(this.state.content)
            .then(() => this.redirect())
            .catch(error => {
                this.setState({fetching: false});
            });
    }

    redirect() {
        this.setState({fetching: false});
        this.context.router.push('/contents');
    }

    render() {
        return (
            <ContentForm
                onChange={this.updateContentState}
                onFetch={this.fetchContent}
                content={this.state.content}
                errors={this.state.errors}
                fetching={this.state.fetching}
            />
        );
    }
}

ManageContentPage.propTypes = {
    content: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManageContentPage.contextTypes = {
    router: PropTypes.object
};

function getContentById(contents, id) {
    const content = contents.filter(content => content.id == id);
    if (content) return content[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    console.log(`component:ManageContentPage:mapStateToProps - Received state [state: ${JSON.stringify(state)}] from Redux Store`);
    console.log(`component:ManageContentPage:mapStateToProps - Received data(ownProps) from Redux Store`);

    const contentId = ownProps.params.id; // from path `/content/:id`

    let content = {id: '', contentQuery: ''};

    if (contentId && state.contents.length > 0) {
        content = getContentById(state.contents, contentId);
    }

    return {
        content: content
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageContentPage);
