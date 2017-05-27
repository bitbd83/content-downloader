import React from 'react';
import PropTypes from 'prop-types';
import ContentListRow from './ContentListRow';

const ContentList = ({contents}) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-4"><strong>ID</strong></div>
                <div className="col-xs-4"><strong>Content URL</strong></div>
            </div>
            {contents.map(
                (content) => <ContentListRow key={content.id} content={content} />
            )}
        </div>
    );
};

ContentList.propTypes = {
    contents: PropTypes.array.isRequired
};

export default ContentList;
