import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

function humanize(str) {
    return str
        .replace(/^[\s_]+|[\s_]+$/g, '')
        .replace(/[_\s]+/g, ' ')
        .replace(/^[a-z]/, function(m) { return m.toUpperCase(); });
}

const ContentListRow = ({content}) => {
    return (
        <div className="row">
            <div className="col-xs-4">{content.id}</div>
            <div className="col-xs-4">
                <Link to={'/content/' + content.id}>{humanize(content.contentUrl)}</Link>
            </div>
        </div>
    );
};

ContentListRow.propTypes = {
    content: PropTypes.object.isRequired
};

export default ContentListRow;
