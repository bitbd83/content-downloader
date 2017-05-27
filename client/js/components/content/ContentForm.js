import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const ContentForm = ({content, onFetch, onChange, fetching, errors}) => {
    return (
        <form>
            <h1>Fetch Content</h1>
            <TextInput
                name="id"
                label="Content Id"
                value={content.id}
                onChange={onChange}
                error={errors.id}/>
            <TextInput
                name="contentQuery"
                label="Content Query"
                value={content.contentQuery}
                onChange={onChange}
                error={errors.contentQuery}/>
            <input
                type="submit"
                disabled={fetching}
                value={fetching ? 'Fetching...' : 'Fetch'}
                className="btn btn-primary"
                onClick={onFetch} />
        </form>
    );
};

ContentForm.propTypes = {
    content: PropTypes.object.isRequired,
    onFetch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    fetching: PropTypes.bool,
    errors: PropTypes.object
};

export default ContentForm;
